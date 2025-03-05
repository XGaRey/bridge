"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const formSchema = z.object({
  dataSource: z.enum(["personal", "research", "media", "other"]),
  region: z.string().min(2, { message: "请选择地区" }),
  city: z.string().min(2, { message: "请输入城市" }),
  year: z.string().min(4, { message: "请输入年份" }),
  amount: z.string().min(1, { message: "请输入彩礼金额" }),
  items: z.string().optional(),
  education: z.string().optional(),
  occupation: z.string().optional(),
  additionalInfo: z.string().optional(),
  anonymous: z.boolean().default(false),
  consent: z.boolean().refine((value) => value === true, {
    message: "您必须同意数据使用条款",
  }),
})

export default function SubmitPage() {
  const [submitting, setSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataSource: "personal",
      region: "",
      city: "",
      year: new Date().getFullYear().toString(),
      amount: "",
      items: "",
      education: "",
      occupation: "",
      additionalInfo: "",
      anonymous: false,
      consent: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true)

    try {
      // 模拟API调用
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log(values)
      toast({
        title: "数据提交成功",
        description: "感谢您为彩礼数据研究做出的贡献",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "提交失败",
        description: "请稍后再试",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

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
            <h1 className="text-3xl font-bold">彩礼数据提交</h1>
            <p className="text-muted-foreground">您提供的数据将用于研究分析，帮助我们更好地了解彩礼现状</p>
          </div>

          <Tabs defaultValue="individual">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="individual">个人数据提交</TabsTrigger>
              <TabsTrigger value="batch">批量数据上传</TabsTrigger>
            </TabsList>
            <TabsContent value="individual">
              <Card className="max-w-2xl">
                <CardHeader>
                  <CardTitle>彩礼数据表单</CardTitle>
                  <CardDescription>请填写您了解的彩礼相关信息，所有数据将严格保密</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="dataSource"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>数据来源</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="personal" />
                                  </FormControl>
                                  <FormLabel className="font-normal">个人/家庭经历</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="research" />
                                  </FormControl>
                                  <FormLabel className="font-normal">调研数据</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="media" />
                                  </FormControl>
                                  <FormLabel className="font-normal">媒体报道</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="other" />
                                  </FormControl>
                                  <FormLabel className="font-normal">其他来源</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="region"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>省份/地区</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="选择省份/地区" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="beijing">北京市</SelectItem>
                                  <SelectItem value="shanghai">上海市</SelectItem>
                                  <SelectItem value="guangdong">广东省</SelectItem>
                                  <SelectItem value="jiangsu">江苏省</SelectItem>
                                  <SelectItem value="zhejiang">浙江省</SelectItem>
                                  <SelectItem value="shandong">山东省</SelectItem>
                                  <SelectItem value="henan">河南省</SelectItem>
                                  <SelectItem value="sichuan">四川省</SelectItem>
                                  <SelectItem value="hebei">河北省</SelectItem>
                                  <SelectItem value="hunan">湖南省</SelectItem>
                                  <SelectItem value="anhui">安徽省</SelectItem>
                                  <SelectItem value="hubei">湖北省</SelectItem>
                                  <SelectItem value="fujian">福建省</SelectItem>
                                  <SelectItem value="other">其他地区</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>城市/县区</FormLabel>
                              <FormControl>
                                <Input placeholder="请输入城市或县区名称" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="year"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>年份</FormLabel>
                              <FormControl>
                                <Input placeholder="彩礼发生的年份" {...field} />
                              </FormControl>
                              <FormDescription>请输入彩礼发生的年份，如2023</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>彩礼金额（人民币）</FormLabel>
                              <FormControl>
                                <Input placeholder="请输入彩礼总金额" {...field} />
                              </FormControl>
                              <FormDescription>请输入彩礼总金额，仅数字，如：88000</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="items"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>彩礼物品构成</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="除现金外的彩礼物品，如首饰、房产、车辆等"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>请详细描述彩礼中包含的物品及其价值</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="education"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>教育程度</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="选择教育程度" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="primary">小学及以下</SelectItem>
                                  <SelectItem value="middle">初中</SelectItem>
                                  <SelectItem value="high">高中/中专</SelectItem>
                                  <SelectItem value="college">大专</SelectItem>
                                  <SelectItem value="bachelor">本科</SelectItem>
                                  <SelectItem value="master">硕士</SelectItem>
                                  <SelectItem value="doctor">博士及以上</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>新娘的教育程度（可选）</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="occupation"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>职业类型</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="选择职业类型" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="government">政府/事业单位</SelectItem>
                                  <SelectItem value="enterprise">企业职员</SelectItem>
                                  <SelectItem value="business">个体经营</SelectItem>
                                  <SelectItem value="farmer">农业从业者</SelectItem>
                                  <SelectItem value="worker">工人</SelectItem>
                                  <SelectItem value="teacher">教师</SelectItem>
                                  <SelectItem value="medical">医疗工作者</SelectItem>
                                  <SelectItem value="it">IT/互联网</SelectItem>
                                  <SelectItem value="other">其他</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>新娘的职业类型（可选）</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>补充信息</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="其他您认为重要的信息，如彩礼谈判过程、家庭背景等"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>任何您认为有助于研究的补充信息</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="anonymous"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>匿名提交</FormLabel>
                              <FormDescription>选择此项后，您的个人信息将不会被记录</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>数据使用同意</FormLabel>
                              <FormDescription>我同意将所提供的数据用于研究分析和公共政策参考</FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" disabled={submitting}>
                        {submitting ? "提交中..." : "提交数据"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="batch">
              <Card className="max-w-2xl">
                <CardHeader>
                  <CardTitle>批量数据上传</CardTitle>
                  <CardDescription>适用于研究机构、媒体等批量提交彩礼数据</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-dashed p-8 text-center">
                      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <h3 className="mt-4 text-lg font-semibold">拖放文件或点击上传</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          支持 .xlsx, .csv 格式文件，单个文件大小不超过10MB
                        </p>
                        <Button className="mt-4" variant="outline">
                          选择文件
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">数据模板</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        请下载并使用标准模板填写数据，以确保数据格式正确
                      </p>
                      <Button variant="outline" size="sm">
                        下载Excel模板
                      </Button>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-medium mb-2">数据要求</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>请确保数据真实可靠，来源清晰</li>
                        <li>批量数据需包含地区、年份、金额等必要信息</li>
                        <li>如有敏感个人信息，请进行匿名化处理</li>
                        <li>上传前请检查数据格式是否符合模板要求</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled>上传数据</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          <Toaster />
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

