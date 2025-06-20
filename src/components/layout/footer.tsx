"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerNavigation = {
    discover: [
      { name: '홈', href: '/' },
      { name: '객실', href: '/rooms' },
      { name: '경험', href: '/experience' },
      { name: '소개', href: '/about' },
    ],
    support: [
      { name: '자주 묻는 질문', href: '/faq' },
      { name: '후기', href: '/reviews' },
      { name: '연락하기', href: '/contact' },
      { name: '예약 취소', href: '/cancel' },
    ],
    company: [
      { name: '회사 소개', href: '/company' },
      { name: '채용', href: '/careers' },
      { name: '언론 보도', href: '/press' },
      { name: '파트너십', href: '/partners' },
    ],
    legal: [
      { name: '개인정보처리방침', href: '/privacy' },
      { name: '이용약관', href: '/terms' },
      { name: '쿠키 정책', href: '/cookies' },
      { name: '사이트맵', href: '/sitemap' },
    ],
  }

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.955.01 6.729.048 2.695.26.26 2.695.048 6.729.01 7.955 0 8.396 0 12.017c0 3.62.01 4.061.048 5.287.212 4.034 2.647 6.469 6.681 6.681 1.226.038 1.667.048 5.287.048 3.621 0 4.062-.01 5.288-.048 4.034-.212 6.469-2.647 6.681-6.681.038-1.226.048-1.667.048-5.287 0-3.621-.012-4.062-.048-5.288C23.79 2.695 21.355.26 17.321.048 16.095.01 15.654 0 12.017 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.654a6.386 6.386 0 100 12.772 6.386 6.386 0 000-12.772zm0 10.531a4.144 4.144 0 110-8.289 4.144 4.144 0 010 8.29zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Blog',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 8v10c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V8c0-1.105.895-2 2-2h14c1.105 0 2 .895 2 2zm-2 0l-7 4.5L5 8v1.5l7 4.5 7-4.5V8z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-sage-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-sand-500 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-nude-500 to-transparent"></div>
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <section className="border-b border-white/10">
          <div className="section-container section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                  특별한 소식을
                  <br />
                  <span className="bg-gradient-to-r from-sage-300 to-sand-200 bg-clip-text text-transparent">
                    가장 먼저 받아보세요
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  새로운 프로모션, 특별 이벤트, 그리고 Haven Stay만의 독점 혜택을 놓치지 마세요.
                </p>
              </div>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-sage-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="group px-8 py-4 bg-sage-500 text-white rounded-xl font-semibold hover:bg-sage-600 transition-all duration-300 shadow-soft hover:shadow-glow hover:scale-105 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-2">
                    구독하기
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <section className="section-container py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="group inline-flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage-500 to-sage-600 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-white group-hover:text-sage-300 transition-colors duration-300">
                    Haven Stay
                  </span>
                  <span className="text-sm text-white/70 tracking-wider">
                    More than stay
                  </span>
                </div>
              </Link>
              
              <p className="text-white/80 leading-relaxed mb-8 max-w-md">
                자연과 함께하는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.
                도시의 번잡함에서 벗어나 고요함과 평화를 찾는 특별한 공간입니다.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>강원도 평창군 자연로 123</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+82 33-123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@havenstay.com</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Discover */}
              <div>
                <h3 className="font-display font-semibold text-lg mb-6 text-white">Discover</h3>
                <ul className="space-y-4">
                  {footerNavigation.discover.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-sage-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-display font-semibold text-lg mb-6 text-white">Support</h3>
                <ul className="space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-sage-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-display font-semibold text-lg mb-6 text-white">Company</h3>
                <ul className="space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-sage-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-display font-semibold text-lg mb-6 text-white">Legal</h3>
                <ul className="space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-sage-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="border-t border-white/10">
          <div className="section-container py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-white/60 text-sm">
                <p>© {currentYear} Haven Stay. All rights reserved.</p>
                <p className="mt-1">사업자등록번호: 123-45-67890 | 대표: 김자연</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group text-white/60 hover:text-sage-300 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={item.name}
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-sage-500/20 transition-all duration-300">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>

              {/* Awards/Certifications */}
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sage-500/20 flex items-center justify-center">
                    <span className="text-sage-400 text-xs font-bold">★</span>
                  </div>
                  <span>2024 베스트 스테이</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-sand-500/20 flex items-center justify-center">
                    <span className="text-sand-400 text-xs font-bold">♡</span>
                  </div>
                  <span>고객만족도 98%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
} 