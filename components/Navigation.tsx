'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { gsap } from "gsap"

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

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
    <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md mobile-navbar">
      <nav className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 nav-logo">
            <img src="/logo/DigiWebClub.png" alt="logo" className="w-16 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium mobile-navbar3">
            <li><Link href="/" className="hover:text-[#05ce9b] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#05ce9b] transition">About</Link></li>
            <li><Link href="/blog" className="hover:text-[#05ce9b] transition">Blog</Link></li>
            <li><Link href="/services" className="hover:text-[#05ce9b] transition">Service</Link></li>
            <li><Link href="/contact" className="hover:text-[#05ce9b] transition">Contact</Link></li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden my-4 mobile-navbar2">
            <ul className="flex flex-col justify-center text-center space-y-4 font-medium text-lg">
              <li><Link href="/" ><span onClick={() => setMobileOpen(false)} className="hover:text-[#05ce9b] transition cursor-pointer">Home</span></Link></li>
              <li><Link href="/about" ><span onClick={() => setMobileOpen(false)} className="hover:text-[#05ce9b] transition cursor-pointer">About</span></Link></li>
              <li><Link href="/services" ><span onClick={() => setMobileOpen(false)} className="hover:text-[#05ce9b] transition cursor-pointer">Service</span></Link></li>
              <li><Link href="/contact" ><span onClick={() => setMobileOpen(false)} className="hover:text-[#05ce9b] transition cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

// Desktop Dropdown
function Dropdown({ label, items }: { label: string, items: { label: string, href: string }[] }) {
  const [open, setOpen] = React.useState(false)
  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 hover:text-[#05ce9b] transition ${open ? 'text-[#05ce9b]' : ''}`}>
        {label} <span className="ml-1">▼</span>
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="block px-6 py-3 hover:bg-red-50 hover:text-[#05ce9b] transition">{item.label}</Link>
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
    <div>
      <button className="w-full flex justify-between items-center py-2 hover:text-[#05ce9b]" onClick={() => setOpen(!open)}>
        {label} <span className="ml-2">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul className="pl-4 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="block hover:text-[#05ce9b]">{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
