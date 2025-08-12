"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { war: 1, stars: 30 },
  { war: 2, stars: 28 },
  { war: 3, stars: 32 },
  { war: 4, stars: 29 },
  { war: 5, stars: 33 }
]

export default function WarPerformance() {
  return (
    <Card className="w-[600px]">
      <CardHeader className="pb-0">
        <h2 className="text-4xl font-bold mb-2">War Performance</h2>
        <Tabs defaultValue="month" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="week">7d</TabsTrigger>
            <TabsTrigger value="month">30d</TabsTrigger>
            <TabsTrigger value="year">365d</TabsTrigger>
          </TabsList>
          <TabsContent value="month">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="war" stroke="#A0C9E9" />
                  <YAxis stroke="#A0C9E9" />
                  <Tooltip />
                  <Line type="monotone" dataKey="stars" stroke="#A0C9E9" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
      <CardContent />
    </Card>
  )
}
