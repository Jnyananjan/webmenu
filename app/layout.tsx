import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Savoria - Restaurant Menu",
  description: "Discover exquisite flavors",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-background text-foreground overflow-x-hidden`}>{children}</body>
    </html>
  )
}
