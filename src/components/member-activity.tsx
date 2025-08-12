"use client"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

const data = Array.from({ length: 12 }, () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
)

export default function MemberActivity() {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <h2 className="text-4xl font-bold mb-4">Member Activity</h2>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="grid grid-cols-7 gap-1">
            {data.map((week, i) =>
              week.map((val, j) => (
                <Tooltip key={`${i}-${j}`}>
                  <TooltipTrigger asChild>
                    <div
                      className="h-4 w-4 rounded-sm bg-accent"
                      style={{ opacity: val / 5 }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{val} actions</p>
                  </TooltipContent>
                </Tooltip>
              ))
            )}
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  )
}
