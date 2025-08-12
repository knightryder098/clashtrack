import Hero from "@/components/hero"
import WarPerformance from "@/components/war-performance"
import MemberActivity from "@/components/member-activity"

export default function Page() {
  return (
    <main className="ml-16 space-y-40">
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section id="war-performance" className="min-h-screen flex items-center justify-center">
        <WarPerformance />
      </section>
      <section id="member-activity" className="min-h-screen flex items-center justify-center">
        <MemberActivity />
      </section>
    </main>
  )
}
