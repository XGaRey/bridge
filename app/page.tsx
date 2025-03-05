import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Database, FileText, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Database className="h-5 w-5" />
            <span>数智彩礼</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              首页
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              数据看板
            </Link>
            <Link href="/submit" className="text-sm font-medium">
              数据提交
            </Link>
            <Link href="/about" className="text-sm font-medium">
              关于平台
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                登录
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">注册</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">数智彩礼平台</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  全面整合彩礼数据，助力婚姻和谐，促进社会公平。通过数据驱动的方式，为政策制定提供科学依据。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="w-full min-[400px]:w-auto">
                      查看数据看板
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/submit">
                    <Button variant="outline" className="w-full min-[400px]:w-auto">
                      提交彩礼数据
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl bg-muted p-4 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart2 className="h-24 w-24 text-primary/20" />
                  </div>
                  <div className="relative z-10 h-full rounded-md border bg-background/80 backdrop-blur p-4">
                    <div className="space-y-2">
                      <div className="h-2 w-1/2 rounded-full bg-primary/20"></div>
                      <div className="h-2 w-3/4 rounded-full bg-primary/15"></div>
                      <div className="h-2 w-1/3 rounded-full bg-primary/10"></div>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-16 rounded-md bg-primary/5 flex items-center justify-center">
                          <div className="h-8 w-8 rounded-full bg-primary/10"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">核心功能</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                我们的平台提供全方位的彩礼数据采集与分析服务
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Database className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">多源数据接入</h3>
                <p className="text-sm text-muted-foreground text-center">
                  整合婚姻登记系统、社会调研、用户上报等多渠道数据
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <FileText className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">数据分析</h3>
                <p className="text-sm text-muted-foreground text-center">深入分析彩礼数据，揭示地区差异和变化趋势</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <BarChart2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">可视化展示</h3>
                <p className="text-sm text-muted-foreground text-center">直观展示彩礼数据，便于理解和决策参考</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">社会参与</h3>
                <p className="text-sm text-muted-foreground text-center">鼓励公众参与数据上报，共建健康婚恋环境</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 数智彩礼平台. 保留所有权利.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              使用条款
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              隐私政策
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

