'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { gsap } from "gsap"

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  useEffect(() => {
    var tl1 = gsap.timeline();
    tl1.fromTo(
      ".mobile-navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo('.nav-logo',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.15 }
      )
      .fromTo('.mobile-navbar3 li',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
      )
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const tl = gsap.timeline();
      tl.fromTo('.mobile-navbar',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
      gsap.fromTo('.mobile-navbar2 ul li',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      );
    }
  }, [mobileOpen]);

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 mobile-navbar ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-md'
        }`}>
        <nav className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 nav-logo group">
              <img
                src="/logo/DigiWebClub.png"
                alt="logo"
                className="w-12 h-auto md:w-16 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium mobile-navbar3">
              <li>
                <Link
                  href="/"
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 ${isActive('/') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                    }`}
                >
                  Home
                  {isActive('/') && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#05ce9b] rounded-full"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 ${isActive('/about') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                    }`}
                >
                  About
                  {isActive('/about') && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#05ce9b] rounded-full"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 ${isActive('/services') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                    }`}
                >
                  Service
                  {isActive('/services') && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#05ce9b] rounded-full"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 ${isActive('/blog') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                    }`}
                >
                  Blog
                  {isActive('/blog') && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#05ce9b] rounded-full"></span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 ${isActive('/contact') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                    }`}
                >
                  Contact
                  {isActive('/contact') && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#05ce9b] rounded-full"></span>
                  )}
                </Link>
              </li>
            </ul>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 touch-manipulation"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="py-4 mobile-navbar2">
              <ul className="flex flex-col space-y-1 font-medium text-base">
                <li>
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <span
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 active:bg-[#05ce9b]/20 cursor-pointer touch-manipulation ${isActive('/') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                        }`}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={() => setMobileOpen(false)}>
                    <span
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 active:bg-[#05ce9b]/20 cursor-pointer touch-manipulation ${isActive('/about') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                        }`}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={() => setMobileOpen(false)}>
                    <span
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 active:bg-[#05ce9b]/20 cursor-pointer touch-manipulation ${isActive('/services') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                        }`}
                    >
                      Service
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setMobileOpen(false)}>
                    <span
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 active:bg-[#05ce9b]/20 cursor-pointer touch-manipulation ${isActive('/blog') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                        }`}
                    >
                      Blog
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <span
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 active:bg-[#05ce9b]/20 cursor-pointer touch-manipulation ${isActive('/contact') ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''
                        }`}
                    >
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

// Desktop Dropdown
function Dropdown({ label, items }: { label: string, items: { label: string, href: string }[] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 transition-all duration-300 ${open ? 'text-[#05ce9b] bg-[#05ce9b]/10' : ''}`}>
        {label} <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-lg z-50 overflow-hidden">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="block px-6 py-3 hover:bg-[#05ce9b]/10 hover:text-[#05ce9b] transition-all duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

// Mobile Dropdown (Accordion style)
function MobileDropdown({ label, items }: { label: string, items: { label: string, href: string }[] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full flex justify-between items-center py-3 px-4 hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 rounded-lg transition-all duration-300 touch-manipulation"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="pl-4 space-y-2 py-2">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="block px-4 py-2 rounded-lg hover:text-[#05ce9b] hover:bg-[#05ce9b]/10 transition-all duration-300 touch-manipulation"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
