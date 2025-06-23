'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <nav className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo/DigiWebClub.png" alt="logo" className="w-16 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <li><Link href="/" className="hover:text-[#05ce9b] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#05ce9b] transition">About</Link></li>
            <li><Link href="/blog" className="hover:text-[#05ce9b] transition">Blog</Link></li>
            <Dropdown label="Shop" items={[{ label: 'Shop – 01', href: '#' }, { label: 'Shop – 02', href: '#' }, { label: 'Shop Details', href: '#' }]} />
            <Dropdown label="Pages" items={[{ label: 'Page – 01', href: '#' }, { label: 'Page – 02', href: '#' }, { label: 'Page Details', href: '#' }]} />
            <li><Link href="/contact" className="hover:text-[#05ce9b] transition">Contact</Link></li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-[#05ce9b] cursor-pointer" />
            <Search className="w-5 h-5 text-gray-700 hover:text-[#05ce9b] cursor-pointer" />
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-base font-medium">
              <li><Link href="/" className="hover:text-[#05ce9b] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#05ce9b] transition">About</Link></li>
              <MobileDropdown label="Blog" items={[{ label: 'Blog – 01 (Default)', href: '#' }, { label: 'Blog – 02', href: '#' }, { label: 'Blog Details', href: '#' }]} />
              <MobileDropdown label="Shop" items={[{ label: 'Shop – 01', href: '#' }, { label: 'Shop – 02', href: '#' }, { label: 'Shop Details', href: '#' }]} />
              <MobileDropdown label="Pages" items={[{ label: 'Page – 01', href: '#' }, { label: 'Page – 02', href: '#' }, { label: 'Page Details', href: '#' }]} />
              <li><Link href="/contact" className="hover:text-[#05ce9b] transition">Contact</Link></li>
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
