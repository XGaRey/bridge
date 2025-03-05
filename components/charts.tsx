"use client"

import { Bar, Line, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export function BarChart() {
  const data: ChartData<"bar"> = {
    labels: ["山东", "河南", "河北", "安徽", "江苏", "湖北", "四川", "广东", "浙江", "福建"],
    datasets: [
      {
        label: "平均彩礼金额 (万元)",
        data: [15.6, 14.8, 13.5, 12.7, 11.2, 10.5, 9.8, 3.8, 5.6, 7.2],
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        borderColor: "rgb(99, 102, 241)",
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "各地区平均彩礼金额",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "金额 (万元)",
        },
      },
    },
  }

  return <Bar data={data} options={options} />
}

export function LineChart() {
  const data: ChartData<"line"> = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "全国平均彩礼金额 (万元)",
        data: [6.5, 7.2, 7.8, 8.3, 8.9, 9.2, 9.5, 9.8, 10.1, 10.3, 10.5],
        borderColor: "rgb(99, 102, 241)",
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        tension: 0.3,
      },
      {
        label: "农村平均彩礼金额 (万元)",
        data: [7.8, 8.5, 9.2, 9.8, 10.5, 11.2, 11.8, 12.3, 12.8, 13.2, 13.5],
        borderColor: "rgb(220, 38, 38)",
        backgroundColor: "rgba(220, 38, 38, 0.5)",
        tension: 0.3,
      },
      {
        label: "城市平均彩礼金额 (万元)",
        data: [5.2, 5.8, 6.3, 6.8, 7.2, 7.5, 7.8, 8.0, 8.2, 8.4, 8.5],
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.5)",
        tension: 0.3,
      },
    ],
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "彩礼金额历年变化趋势",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "金额 (万元)",
        },
      },
    },
  }

  return <Line data={data} options={options} />
}

export function PieChart() {
  const data: ChartData<"pie"> = {
    labels: ["现金", "房产", "车辆", "首饰", "家电", "其他"],
    datasets: [
      {
        label: "彩礼构成占比",
        data: [60, 15, 10, 8, 5, 2],
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(220, 38, 38, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(107, 114, 128, 0.7)",
        ],
        borderColor: [
          "rgb(99, 102, 241)",
          "rgb(220, 38, 38)",
          "rgb(16, 185, 129)",
          "rgb(245, 158, 11)",
          "rgb(139, 92, 246)",
          "rgb(107, 114, 128)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "彩礼构成分析",
      },
    },
  }

  return <Pie data={data} options={options} />
}

