"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/" },
  { title: "Option", href: "/" },
  { title: "Contact Us", href: "/" },
  { title: "Chat Care", href: "/chatCare" } 
]

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed z-50 w-full flex justify-center mt-4 px-6 mb-12">
      <nav className="w-full max-w-6xl bg-white/5 shadow-xl backdrop-blur-lg border border-white/10 text-green-200 rounded-2xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-green-300">
            Terrarium Project
          </div>

          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.title}
                variant="ghost"
                size="sm"
                className="text-xs border hover:border-green-500 hover:bg-green-900 transition-colors active:border-green-200"
                asChild
              >
                <Link href={link.href}>{link.title}</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="text-sm border border-green-500 hover:border-green-300 transition-colors cursor-pointer"
            >
              <Link href="/yourBodyInNumbers">Your Body</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-300 hover:bg-green-800"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col items-start gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.title}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm border hover:border-green-500 hover:bg-green-900 transition-colors"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.href}>{link.title}</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-sm border hover:border-green-100 hover:bg-green-900 transition-colors cursor-pointer"
            >
              <Link href="/yourBodyInNumbers">Your Body</Link>
            </Button>
          </div>
        )}
      </nav>
    </div>
  )
}
