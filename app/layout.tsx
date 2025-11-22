import type React from "react"
import type { Metadata } from "next"
// Adding Orbitron, Inter, and Exo 2 fonts
import { Orbitron, Inter, Exo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PlexusBackground } from "@/components/ui/plexus-background"
import "./globals.css"

// Configuring the requested fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "ALPLATECH | Máquina de Faturamento",
  description: "Transformamos cliques em receita. Estratégia, inteligência e performance.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${orbitron.variable} ${inter.variable} ${exo2.variable} font-sans antialiased bg-[#0B0C10] text-[#E8F0F8]`}
        suppressHydrationWarning
      >
        <PlexusBackground />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
