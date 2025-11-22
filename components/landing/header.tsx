"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-tech-black/80 backdrop-blur-md border-b border-tech-grey"
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-4 h-24 flex items-center justify-between md:justify-between">
        {/* Logo - Centralizada no mobile */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link 
            href="/" 
            className="relative flex items-center group"
            style={{
              width: '224px', // w-56 = 14rem = 224px (ajuste conforme necessário)
              height: '150px', // h-16 = 4rem = 64px (ajuste conforme necessário)
            }}
          >
            <Image 
              src="/images/logo.png" 
              alt="ALPLATECH Logo" 
              fill 
              className="object-contain brightness-110 group-hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_10px_rgba(0,85,255,0.3)]" 
              style={{
                objectPosition: 'center center', // Centralizado no mobile
              }}
              priority 
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Início", "Planos", "Serviços"].map((item) => (
            <Link
              key={item}
              href={`#${item
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}`}
              className="text-tech-offwhite hover:text-tech-blue transition-colors font-inter text-sm tracking-wide"
            >
              {item.toUpperCase()}
            </Link>
          ))}
          <Link href="/obrigado?type=whatsapp">
            <Button
              variant="outline"
              className="border-tech-blue text-tech-blue hover:bg-tech-blue/10 hover:text-tech-cyan font-exo2 uppercase tracking-wide bg-transparent"
            >
              Falar no WhatsApp
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle - Posicionado absolutamente */}
        <button 
          className="md:hidden absolute right-4 text-white p-2 z-10" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Menu Principal"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-tech-black border-b border-tech-grey overflow-hidden"
        >
          <div className="flex flex-col items-center p-4 gap-4">
            {["Início", "Planos", "Serviços"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-tech-offwhite hover:text-tech-blue font-inter text-center"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="/obrigado?type=whatsapp" className="w-full max-w-xs">
              <Button className="w-full bg-tech-blue text-white hover:bg-blue-600 font-exo2 uppercase">
                Falar no WhatsApp
              </Button>
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
