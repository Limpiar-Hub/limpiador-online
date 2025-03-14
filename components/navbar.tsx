"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar() {
  const [isCommerceSpacesOpen, setIsCommerceSpacesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Limpiar Logo" width={140} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {/* Commerce Spaces with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCommerceSpacesOpen(true)}
              onMouseLeave={() => setIsCommerceSpacesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link href="/commerce-spaces" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Commerce Spaces
                </Link>
                <svg
                  className={`w-4 h-4 transition-transform ${isCommerceSpacesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <AnimatePresence>
                {isCommerceSpacesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                    onMouseEnter={() => setIsCommerceSpacesOpen(true)}
                  >
                    <Link
                      href="/start-here"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Start Here
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rest of navigation links */}
            <Link href="/limpiador" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Limpiador
            </Link>
            <Link href="/waste-management" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Waste Management
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/social-impact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Social Impact
            </Link>
            <Link href="https://blog.limpiar.online/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              Blog
            </Link>
          </nav>

          {/* Get Started Button */}
          <Link
            href="https://sales.limpiar.online/home--limpiar-page"
            className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
          >
            Get Started
          </Link>
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="/commerce-spaces" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Commerce Spaces
                </Link>
                <Link href="/start-here" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Start Here
                </Link>
                <Link href="/limpiador" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Limpiador
                </Link>
                <Link href="/waste-management" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Waste Management
                </Link>
                <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/social-impact" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Social Impact
                </Link>
                <Link
                  href="https://sales.limpiar.online/home--limpiar-page"
                  className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Get Started
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

