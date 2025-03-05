import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="container flex flex-col items-center">
        <Link href="/" className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <span>数智彩礼</span>
        </Link>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">登录</CardTitle>
            <CardDescription className="text-center">输入您的账号信息登录平台</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" placeholder="请输入您的邮箱" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">密码</Label>
                <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                  忘记密码?
                </Link>
              </div>
              <Input id="password" placeholder="请输入您的密码" type="password" />
            </div>
            <Button className="w-full">登录</Button>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm">
              还没有账号?{" "}
              <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                注册
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

