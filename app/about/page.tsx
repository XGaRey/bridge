import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, FileText, BarChart2, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>数智彩礼</span>
          </a>
          <nav className="ml-auto flex items-center gap-4">
            <a href="/" className="text-sm font-medium">
              首页
            </a>
            <a href="/dashboard" className="text-sm font-medium">
              数据看板
            </a>
            <a href="/submit" className="text-sm font-medium">
              数据提交
            </a>
            <a href="/about" className="text-sm font-medium">
              关于平台
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold">关于数智彩礼平台</h1>
            <p className="text-muted-foreground max-w-3xl">
              数智彩礼平台是一个专注于彩礼数据采集、分析与研究的综合性平台，旨在通过数据驱动的方式，为政策制定提供科学依据，促进婚姻和谐与社会公平。
            </p>
          </div>

          <Tabs defaultValue="platform">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="platform">平台介绍</TabsTrigger>
              <TabsTrigger value="features">核心功能</TabsTrigger>
              <TabsTrigger value="team">团队介绍</TabsTrigger>
            </TabsList>
            <TabsContent value="platform" className="space-y-6 pt-4">
              <div className="prose max-w-none dark:prose-invert">
                <h2>平台背景</h2>
                <p>
                  彩礼作为中国传统婚姻习俗的重要组成部分，在不同地区有着不同的表现形式和金额标准。近年来，高额彩礼问题引发了社会广泛关注，成为影响农村经济发展和婚姻和谐的重要因素。
                </p>
                <p>
                  数智彩礼平台应运而生，通过系统性地收集、整合和分析全国各地的彩礼数据，为相关研究和政策制定提供数据支持，助力解决高额彩礼问题，促进婚姻家庭和谐与社会稳定。
                </p>

                <h2>平台愿景</h2>
                <p>
                  我们致力于成为中国最权威、最全面的彩礼数据研究平台，通过数据驱动的方式，推动彩礼习俗的理性回归，促进婚姻家庭关系的健康发展。
                </p>

                <h2>数据来源</h2>
                <p>平台数据来源多元化，包括但不限于：</p>
                <ul>
                  <li>婚姻登记系统的彩礼金额申报（如有）</li>
                  <li>社会调研、问卷调查、用户匿名上报</li>
                  <li>舆情监测（社交媒体、婚恋平台、论坛中关于彩礼的讨论）</li>
                  <li>历史数据（地区婚嫁案例、法院纠纷案件中的彩礼数据）</li>
                </ul>

                <h2>数据安全</h2>
                <p>
                  我们高度重视用户隐私和数据安全，采取严格的数据保护措施，确保所有收集的数据仅用于研究分析，不会泄露个人敏感信息。
                </p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Database className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>数据采集与整合</CardTitle>
                      <CardDescription>多源数据接入与处理</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>婚姻登记系统的彩礼金额申报数据接入</li>
                      <li>社会调研、问卷调查数据收集</li>
                      <li>用户匿名上报系统</li>
                      <li>舆情监测数据采集</li>
                      <li>历史数据整合与清洗</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>数据分析与研究</CardTitle>
                      <CardDescription>深度挖掘彩礼数据价值</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>彩礼地区差异分析</li>
                      <li>彩礼历史变化趋势研究</li>
                      <li>彩礼与社会经济因素关联分析</li>
                      <li>彩礼纠纷案例研究</li>
                      <li>专业研究报告生成</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <BarChart2 className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>数据可视化展示</CardTitle>
                      <CardDescription>直观呈现彩礼数据</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>全国彩礼分布地图</li>
                      <li>彩礼金额变化趋势图</li>
                      <li>彩礼构成分析图表</li>
                      <li>地区对比分析图表</li>
                      <li>自定义数据查询与展示</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>社会参与与互动</CardTitle>
                      <CardDescription>促进公众参与和讨论</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>用户数据提交系统</li>
                      <li>彩礼问题讨论社区</li>
                      <li>专家观点分享</li>
                      <li>政策建议反馈</li>
                      <li>公众教育与宣传</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="team" className="pt-4">
              <div className="prose max-w-none dark:prose-invert">
                <h2>团队介绍</h2>
                <p>
                  数智彩礼平台由一支跨学科的专业团队创建和维护，团队成员来自社会学、经济学、数据科学、计算机科学等多个领域，拥有丰富的研究经验和技术背景。
                </p>

                <h3>核心团队</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 not-prose mt-6">
                  <Card>
                    <CardHeader>
                      <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">张</span>
                      </div>
                      <CardTitle className="text-center">张教授</CardTitle>
                      <CardDescription className="text-center">项目负责人 | 社会学博士</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm">
                        中国社会科学院研究员，长期从事婚姻家庭社会学研究，主持多项国家级研究项目。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">李</span>
                      </div>
                      <CardTitle className="text-center">李博士</CardTitle>
                      <CardDescription className="text-center">数据科学负责人 | 统计学博士</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm">
                        北京大学统计学博士，专注于社会数据分析与挖掘，拥有丰富的大数据分析经验。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">王</span>
                      </div>
                      <CardTitle className="text-center">王工程师</CardTitle>
                      <CardDescription className="text-center">技术负责人 | 计算机科学硕士</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm">
                        清华大学计算机科学硕士，拥有十年互联网平台开发经验，精通数据可视化与系统架构。
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="mt-8">合作机构</h3>
                <p>我们与多家研究机构、高校和政府部门保持密切合作，共同推进彩礼研究和相关政策制定。</p>
                <ul>
                  <li>中国社会科学院社会学研究所</li>
                  <li>北京大学社会学系</li>
                  <li>清华大学社会科学学院</li>
                  <li>各省市民政部门</li>
                  <li>中国婚姻家庭研究会</li>
                </ul>

                <h3>加入我们</h3>
                <p>
                  如果您对彩礼研究感兴趣，或者希望为平台建设贡献力量，欢迎与我们联系。我们期待与更多志同道合的专家学者和技术人才合作。
                </p>
                <p>联系邮箱：contact@shuzicaili.org</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="w-full border-t py-6 mt-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 数智彩礼平台. 保留所有权利.</p>
          <div className="flex gap-4">
            <a href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              使用条款
            </a>
            <a href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              隐私政策
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

