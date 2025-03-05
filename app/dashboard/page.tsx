import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/charts"

export default function DashboardPage() {
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
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">彩礼数据看板</h1>
            <p className="text-muted-foreground">全面展示各地区彩礼数据统计和分析结果</p>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">总览</TabsTrigger>
                <TabsTrigger value="regional">地区分析</TabsTrigger>
                <TabsTrigger value="trends">趋势分析</TabsTrigger>
                <TabsTrigger value="reports">调研报告</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">全国平均彩礼金额</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">¥92,345</div>
                      <p className="text-xs text-muted-foreground">较去年增长 +5.2%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">最高彩礼地区</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">山东省</div>
                      <p className="text-xs text-muted-foreground">平均 ¥156,780</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">最低彩礼地区</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">广东省</div>
                      <p className="text-xs text-muted-foreground">平均 ¥38,500</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">数据样本量</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12,546</div>
                      <p className="text-xs text-muted-foreground">来自全国31个省市</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>全国彩礼金额分布</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <BarChart />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>彩礼构成分析</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <PieChart />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="regional" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>各省份彩礼金额对比</CardTitle>
                    <CardDescription>基于最新数据统计的各省份平均彩礼金额</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BarChart />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="trends" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>彩礼金额历年变化趋势</CardTitle>
                    <CardDescription>2015-2025年全国彩礼金额变化趋势</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <LineChart />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>调研报告</CardTitle>
                    <CardDescription>基于平台数据的专业分析报告</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium">2025年全国彩礼现状调研报告</h3>
                        <p className="text-sm text-muted-foreground mt-1">发布日期: 2025-02-15</p>
                        <p className="mt-2">
                          本报告基于12,546份样本数据，全面分析了全国各地区彩礼现状、变化趋势及社会影响。
                        </p>
                        <a href="#" className="text-primary text-sm mt-2 inline-block">
                          下载报告
                        </a>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium">彩礼与农村经济发展关系研究</h3>
                        <p className="text-sm text-muted-foreground mt-1">发布日期: 2024-11-20</p>
                        <p className="mt-2">深入分析彩礼习俗对农村经济发展的影响，提出相关政策建议。</p>
                        <a href="#" className="text-primary text-sm mt-2 inline-block">
                          下载报告
                        </a>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium">城乡彩礼差异化研究</h3>
                        <p className="text-sm text-muted-foreground mt-1">发布日期: 2024-08-05</p>
                        <p className="mt-2">对比分析城市与农村地区彩礼习俗的差异，探讨背后的社会文化因素。</p>
                        <a href="#" className="text-primary text-sm mt-2 inline-block">
                          下载报告
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
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

