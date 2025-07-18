"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Nyumbani", href: "/" },
    { name: "Mafanikio", href: "/sekta" },
    { name: "Miradi Mikubwa", href: "/miradi-mikubwa" },
    { name: "Kabla na Baada", href: "/kabla-na-baada" },
    { name: "Habari", href: "/habari" },
    { name: "Mashuhuda", href: "/mashuhuda" },
    { name: "Kampeni 2025", href: "/kampeni-2025" },
    { name: "Kuhusu", href: "/kuhusu" },
    { name: "Wasiliana", href: "/wasiliana" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#049132] rounded-full flex items-center justify-center border-2 border-[#edfa10]">
              <span className="text-white font-bold text-sm sm:text-lg">TZ</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-[#049132]">Serikali</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#049132] hover:bg-[#edfa10] hover:bg-opacity-20 transition-all duration-200 text-sm xl:text-base whitespace-nowrap px-2 py-1 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Language Toggle */}
          {/*<div className="hidden lg:flex items-center flex-shrink-0">
            {/*<LanguageToggle />}
          </div>*/}

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-[#edfa10] hover:bg-opacity-20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#edfa10]">
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-[#049132] hover:bg-[#edfa10] hover:bg-opacity-20 transition-all duration-200 rounded-md text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
