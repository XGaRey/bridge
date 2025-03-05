import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="container flex flex-col items-center">
        <Link href="/" className="mb-8 flex items-center gap-2 text-2xl font-bold">
          <span>数智彩礼</span>
        </Link>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">注册账号</CardTitle>
            <CardDescription className="text-center">创建您的账号以使用平台全部功能</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">姓</Label>
                <Input id="first-name" placeholder="请输入您的姓" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">名</Label>
                <Input id="last-name" placeholder="请输入您的名" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" placeholder="请输入您的邮箱" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <Input id="password" placeholder="请设置您的密码" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">确认密码</Label>
              <Input id="confirm-password" placeholder="请再次输入密码" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm">
                我已阅读并同意{" "}
                <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                  使用条款
                </Link>{" "}
                和{" "}
                <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  隐私政策
                </Link>
              </Label>
            </div>
            <Button className="w-full">注册</Button>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm">
              已有账号?{" "}
              <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                登录
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

