import type { Metadata } from "next"
import "./globals.css"
import SideNav from "@/components/side-nav"

export const metadata: Metadata = {
  title: "Clash Analytics HQ",
  description: "SAMI-style clan analytics dashboard"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-teal-950 text-offwhite antialiased">
        <SideNav />
        {children}
      </body>
    </html>
  )
}
