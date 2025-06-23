'use client'

import React from 'react'
import Link from 'next/link'
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:text-left text-center md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex justify-center items-center space-x-3 group">
              <div className="relative">
                <div className="w-20 flex items-center justify-center">
                  <img src="/logo/DigiWebClub.png" alt="logo" />
                </div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-[#05ce9b]">DIGIWEBCLUB</span>
            </Link>
            <p className="text-gray-400 md:text-left text-center leading-relaxed text-base sm:text-sm">
              Premier destination for digital creative solutions. We combine creativity with technology to deliver exceptional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Facebook className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Twitter className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Instagram className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Linkedin className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-3 sm:space-y-2 w-full">
              <Link href="/" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Home
              </Link>
              <Link href="/agency" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Agency
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Services
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-3 sm:space-y-2 w-full">
              <a href="#" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Web Design
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Web Development
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Digital Marketing
              </a>
              <a href="#" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Brand Identity
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4 sm:space-y-3 w-full">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-6 h-6 sm:w-5 sm:h-5 text-[#05ce9b]" />
                <span className="text-gray-400 text-base sm:text-sm">hello@creativeweb.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-6 h-6 sm:w-5 sm:h-5 text-[#05ce9b]" />
                <span className="text-gray-400 text-base sm:text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-6 h-6 sm:w-5 sm:h-5 text-[#05ce9b]" />
                <span className="text-gray-400 text-base sm:text-sm">123 Creative St, Digital City, DC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} CreativeWeb. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm items-center">
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-1 px-2 rounded">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-1 px-2 rounded">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-1 px-2 rounded">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 