import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { HydrationSuppressor } from "@/components/hydration-suppressor"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CodeGrid",
  description: "CodeGrid Application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <HydrationSuppressor />
        {children}
      </body>
    </html>
  )
}
