export const metadata = {
  title: "Haven Stay - 조용한 하루가 필요할 때",
  description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sand-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
            alt="Haven Stay - 자연 속 평온한 공간"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/50 to-stone-700/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                <span className="block text-white">MORE THAN</span>
                <span className="block bg-gradient-to-r from-sage-300 via-sand-200 to-nude-300 bg-clip-text text-transparent">
                  STAY
                </span>
              </h1>
              
              <div className="mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
            </div>

            {/* Subtitle */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/95">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                href="/booking"
                className="group relative inline-flex items-center px-12 py-5 bg-sage-500 text-white rounded-2xl font-bold text-xl hover:bg-sage-600 transition-all duration-500 shadow-2xl hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  지금 예약하기
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="/rooms"
                className="group inline-flex items-center px-10 py-4 bg-white/15 backdrop-blur-lg text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  객실 둘러보기
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-sage-300 mb-2">98%</div>
                <div className="text-sm text-white font-medium">고객 만족도</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-sand-200 mb-2">4.9</div>
                <div className="text-sm text-white font-medium">평균 평점</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-nude-300 mb-2">2024</div>
                <div className="text-sm text-white font-medium">설립 연도</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 text-white/90">
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium tracking-widest">SCROLL DOWN</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"></div>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8">
              자연과 함께하는
              <br />
              <span className="bg-gradient-to-r from-sage-600 to-sand-600 bg-clip-text text-transparent">
                특별한 경험
              </span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Haven Stay에서 일상의 소음을 벗어나 진정한 평온을 경험하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-sage-50 to-sage-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-3xl">
                🌿
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">자연과의 조화</h3>
              <p className="text-stone-600">친환경적인 운영과 지속가능한 디자인으로 자연 그대로의 아름다움을 보존합니다.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-sand-50 to-sand-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sand-400 to-sand-600 flex items-center justify-center text-3xl">
                🌸
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">조용한 공간</h3>
              <p className="text-stone-600">도시의 소음에서 벗어나 진정한 고요함을 경험할 수 있는 공간입니다.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-nude-50 to-nude-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-nude-400 to-nude-600 flex items-center justify-center text-3xl">
                ✨
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">마음의 치유</h3>
              <p className="text-stone-600">바쁜 일상에 지친 마음을 달래고 내면의 평화를 찾을 수 있는 공간입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Haven Stay - 당신의 특별한 휴식이 시작됩니다"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-700/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg text-lg font-medium">
              당신만의 특별한 시간을 위해
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
              지금 바로
              <br />
              <span className="bg-gradient-to-r from-sage-300 to-sand-200 bg-clip-text text-transparent">
                예약하세요
              </span>
            </h2>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
              더 이상 미루지 마세요. 당신이 찾던 진정한 휴식이 Haven Stay에서 시작됩니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                href="/booking"
                className="group relative inline-flex items-center px-12 py-5 bg-sage-500 text-white rounded-2xl font-bold text-xl hover:bg-sage-600 transition-all duration-500 shadow-2xl hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  지금 예약하기
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="/about"
                className="group inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-lg text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
