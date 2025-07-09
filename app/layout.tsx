import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stefen Sutandi - Portfolio",
  description:
    "Electrical Engineering student passionate about IoT, Data Analysis, Product Management, and Business Development",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='45' fill='%23111827'/><text x='50' y='65' fontFamily='Arial,sans-serif' fontSize='45' fontWeight='bold' textAnchor='middle' fill='url(%23grad)'>S</text></svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='45' fill='%23111827'/><text x='50' y='65' fontFamily='Arial,sans-serif' fontSize='45' fontWeight='bold' textAnchor='middle' fill='url(%23grad)'>S</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='45' fill='%23111827'/><text x='50' y='65' fontFamily='Arial,sans-serif' fontSize='45' fontWeight='bold' textAnchor='middle' fill='url(%23grad)'>S</text></svg>",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
