"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

const data = [{ name: "health", value: 76, fill: "#A0C9E9" }]

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-6"
    >
      <div className="mx-auto h-24 w-24 rounded-full bg-accent/20" />
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">Clash Analytics HQ</h1>
      <p className="text-xl text-offwhite/80">War Room Intel</p>
      <div className="flex items-center justify-center">
        <RadialBarChart width={120} height={120} cx="50%" cy="50%" innerRadius={40} outerRadius={55} data={data}>
          <PolarAngleAxis type="number" domain={[0, 100]} dataKey="value" tick={false} />
          <RadialBar minAngle={15} background dataKey="value" cornerRadius={10} />
        </RadialBarChart>
      </div>
      <div className="flex gap-4 justify-center">
        <Button variant="default">Start War Prep</Button>
        <Button variant="ghost">View Hall of Fame</Button>
      </div>
    </motion.div>
  )
}
