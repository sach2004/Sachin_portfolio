import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sachin S Thankachan | Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in backend systems, scalable APIs, and AI-powered applications built with Node.js, Next.js, and modern cloud tooling.",
  keywords: [
    "Sachin S Thankachan",
    "full-stack engineer",
    "backend engineer",
    "Node.js developer",
    "Next.js developer",
    "AI engineer",
    "GenAI applications",
    "portfolio",
  ],
  authors: [{ name: "Sachin S Thankachan" }],
  creator: "Sachin S Thankachan",
  publisher: "Sachin S Thankachan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sachin S Thankachan | Full-Stack Engineer",
    description:
      "Backend systems, full-stack delivery, and AI-powered products built with engineering depth and product focus.",
    siteName: "Sachin S Thankachan Portfolio",
    images: [
      {
        url: "/images/sachin-pic-cutout.png",
        width: 1024,
        height: 1024,
        alt: "Sachin S Thankachan portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin S Thankachan | Full-Stack Engineer",
    description:
      "Full-stack engineer focused on backend systems, scalable APIs, and AI-powered applications.",
    images: ["/images/sachin-pic-cutout.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
