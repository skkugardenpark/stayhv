"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-cream-200' 
        : 'bg-transparent'
    }`}>
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="group flex items-center"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Haven Stay"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-sage-500 to-sand-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  pathname === item.href
                    ? (isScrolled ? 'text-sage-600' : 'text-sage-300')
                    : (isScrolled ? 'text-stone-700 hover:text-sage-600' : 'text-white/90 hover:text-white')
                }`}
              >
                {item.name}
                
                {/* Active indicator */}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-500 to-sand-500 transition-all duration-300 ${
                  pathname === item.href 
                    ? 'scale-x-100 opacity-100' 
                    : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/booking"
              className={`group relative inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
                isScrolled 
                  ? 'bg-sage-500 text-white hover:bg-sage-600 shadow-soft hover:shadow-soft-lg' 
                  : 'bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25 hover:border-white/50'
              } hover:scale-105 hover:-translate-y-0.5`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sage-400 to-sage-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                예약하기
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'bg-stone-100 hover:bg-stone-200' 
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
            }`}
            aria-expanded="false"
            aria-label="메뉴 열기"
          >
            <span className="sr-only">메뉴 열기</span>
            <div className="absolute left-1/2 top-1/2 block w-5 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen ? 'rotate-45' : '-translate-y-1.5'
              } ${isScrolled ? 'bg-stone-800' : 'bg-white'}`}></span>
              <span className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              } ${isScrolled ? 'bg-stone-800' : 'bg-white'}`}></span>
              <span className={`absolute block h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isOpen ? '-rotate-45' : 'translate-y-1.5'
              } ${isScrolled ? 'bg-stone-800' : 'bg-white'}`}></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/98 backdrop-blur-xl border-t border-cream-200 shadow-soft-lg">
          <div className="section-container py-6">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-sage-100 text-sage-700 shadow-soft'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-sage-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-cream-200">
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="group block w-full px-6 py-4 bg-sage-500 text-white text-center rounded-xl font-semibold shadow-soft hover:bg-sage-600 hover:shadow-soft-lg transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    예약하기
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 