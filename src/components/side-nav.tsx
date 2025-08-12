"use client"

import { motion, useScroll } from "framer-motion"

const sections = [
  { id: "hero", label: "Brief" },
  { id: "war-performance", label: "Wars" },
  { id: "member-activity", label: "Activity" }
]

export default function SideNav() {
  const { scrollYProgress } = useScroll()
  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-16 flex flex-col items-center justify-center">
      <div className="w-px h-3/4 bg-offwhite/20 relative">
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group absolute left-1/2 -translate-x-1/2"
            style={{ top: `${(i / (sections.length - 1)) * 100}%` }}
          >
            <span className="block h-2 w-2 rounded-full bg-offwhite/40 group-hover:bg-accent transition-colors" />
          </a>
        ))}
        <motion.span
          className="block h-2 w-2 rounded-full bg-accent absolute left-1/2 -translate-x-1/2"
          style={{ top: scrollYProgress.to(v => `${v * 100}%`) }}
        />
      </div>
    </nav>
  )
}
