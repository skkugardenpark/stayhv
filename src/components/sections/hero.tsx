"use client"

import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
          alt="Haven Stay - 자연 속 평온한 공간"
          fill
          className="object-cover object-center scale-105 animate-parallax"
          priority
          quality={90}
        />
        {/* 여러 레이어 그라디언트로 깊이감 연출 */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/50 to-stone-700/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-stone-900/20 to-stone-900/40"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sage-300/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-sand-200/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-sage-200/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-sand-300/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-sage-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="space-y-12 animate-fade-in-up">
          {/* Main Headline - LEFLO 스타일 대형 타이포그래피 */}
          <div className="space-y-6">
            <h1 className="hero-text text-white leading-none animate-reveal">
              <span className="block">MORE THAN</span>
              <span className="block bg-gradient-to-r from-sage-300 via-sand-200 to-nude-300 bg-clip-text text-transparent animate-shimmer bg-300% bg-[length:200%_100%]">
                STAY
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-sage-400 to-transparent animate-scale-in"></div>
          </div>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/95 tracking-wide font-display">
              조용한 하루가 필요할 때,
              <br />
              <span className="text-sage-200">자연 속에서 찾는 진정한 휴식</span>
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              미니멀하고 고급스러운 공간에서 몸과 마음을 치유하는 시간을 가져보세요.
              <br />
              당신만의 특별한 이야기가 Haven Stay에서 시작됩니다.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Link
              href="/booking"
              className="group relative inline-flex items-center px-12 py-5 bg-sage-500 text-white rounded-2xl font-bold text-xl hover:bg-sage-600 transition-all duration-500 shadow-2xl hover:shadow-sage-500/30 hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sage-400 to-sage-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-3">
                지금 예약하기
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/rooms"
              className="group inline-flex items-center px-10 py-4 bg-white/15 backdrop-blur-lg text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl"
            >
              <span className="flex items-center gap-2">
                객실 둘러보기
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-sage-300 mb-2">98%</div>
              <div className="text-sm text-white font-medium tracking-wide">고객 만족도</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-sand-200 mb-2">4.9</div>
              <div className="text-sm text-white font-medium tracking-wide">평균 평점</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-nude-300 mb-2">2024</div>
              <div className="text-sm text-white font-medium tracking-wide">설립 연도</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator - 완전히 분리하여 중앙 고정 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="flex flex-col items-center gap-3 text-white/90">
          <span className="text-sm font-medium tracking-widest">SCROLL DOWN</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent z-20"></div>
    </section>
  )
} 