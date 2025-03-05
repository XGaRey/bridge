from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime
import pandas as pd
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
mongo = PyMongo(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/report', methods=['GET', 'POST'])
def report():
    if request.method == 'POST':
        data = {
            "type": "user_report",
            "amount": request.form.get('amount'),
            "province": request.form.get('province'),
            "city": request.form.get('city'),
            "marriage_date": request.form.get('marriage_date'),
            "create_time": datetime.now(),
            "source": "web"
        }
        mongo.db.reports.insert_one(data)
        return jsonify({"status": "success"})
    return render_template('report.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/api/statistics')
def get_statistics():
    # 从不同数据源聚合数据
    pipeline = [
        {"$group": {
            "_id": "$province",
            "avg_amount": {"$avg": "$amount"},
            "count": {"$sum": 1}
        }}
    ]
    result = list(mongo.db.reports.aggregate(pipeline))
    return jsonify(result)

@app.route('/api/import', methods=['POST'])
def import_data():
    # 支持多种数据导入方式
    file = request.files['file']
    data_type = request.form.get('type')
    
    if file and allowed_file(file.filename):
        df = pd.read_excel(file)
        records = df.to_dict('records')
        for record in records:
            record['type'] = data_type
            record['create_time'] = datetime.now()
        mongo.db.reports.insert_many(records)
        return jsonify({"status": "success", "count": len(records)})
    return jsonify({"status": "error"})

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ['xlsx', 'csv']

if __name__ == '__main__':
    app.run(debug=True)