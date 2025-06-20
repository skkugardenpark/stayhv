import { Hero } from "@/components/sections/hero"

export const metadata = {
  title: "Haven Stay - 조용한 하루가 필요할 때",
  description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      
      {/* OUR STORY Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sage-100 text-sage-700 text-lg font-medium tracking-wider mb-8">
                <span>―</span>
                <span className="font-display">OUR STORY</span>
                <span>―</span>
              </div>
              
              <h2 className="section-title text-stone-800 mb-8">
                자연 속에서 찾는
                <br />
                <span className="bg-gradient-to-r from-sage-600 to-sand-600 bg-clip-text text-transparent">
                  진정한 휴식의 의미
                </span>
              </h2>
              
              <p className="body-large text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Haven Stay는 단순한 숙박을 넘어서는 특별한 경험을 제공합니다.
                <br />
                자연과 하나가 되어 몸과 마음의 진정한 치유를 경험할 수 있는 공간입니다.
              </p>
            </div>

            {/* Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  title: "자연과의 조화",
                  subtitle: "Harmony with Nature",
                  description: "친환경 소재와 지속가능한 디자인으로 자연 그대로의 아름다움을 보존합니다.",
                  icon: "🌿",
                  gradient: "from-sage-400 to-sage-600"
                },
                {
                  title: "조용한 공간",
                  subtitle: "Quiet Sanctuary",
                  description: "도시의 소음에서 벗어나 진정한 고요함을 경험할 수 있는 공간입니다.",
                  icon: "🌸",
                  gradient: "from-sand-400 to-sand-600"
                },
                {
                  title: "마음의 치유",
                  subtitle: "Healing for the Soul",
                  description: "바쁜 일상에 지친 마음을 달래고 내면의 평화를 찾을 수 있는 공간입니다.",
                  icon: "✨",
                  gradient: "from-nude-400 to-nude-600"
                }
              ].map((story, index) => (
                <div key={index} className="group text-center animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="card p-8 lg:p-10 hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-2">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                      {story.icon}
                    </div>
                    
                    <p className="text-sage-600 font-medium tracking-wide text-sm mb-3">
                      {story.subtitle}
                    </p>
                    
                    <h3 className="text-2xl font-display font-semibold text-stone-800 mb-4">
                      {story.title}
                    </h3>
                    
                    <p className="text-stone-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="section-padding bg-sand-50">
        <div className="section-container">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sage-100 text-sage-700 text-lg font-medium tracking-wider mb-8">
              <span>―</span>
              <span className="font-display">OUR SPACES</span>
              <span>―</span>
            </div>
            
            <h2 className="section-title text-stone-800 mb-8">
              자연과 함께하는
              <br />
              <span className="bg-gradient-to-r from-sage-600 to-sand-600 bg-clip-text text-transparent">
                특별한 공간들
              </span>
            </h2>
            
            <p className="body-large text-stone-600 max-w-3xl mx-auto">
              각기 다른 매력을 가진 객실에서 당신만의 완벽한 휴식을 찾아보세요.
              <br />
              모든 공간은 자연과의 조화를 고려하여 디자인되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Forest Suite",
                description: "숲을 바라보는 프리미엄 스위트룸",
                price: "350,000원",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
                tag: "PREMIUM",
                features: ["숲 전망", "자쿠지", "테라스"]
              },
              {
                name: "Garden View",
                description: "정원이 보이는 아늑한 객실",
                price: "280,000원",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
                tag: "POPULAR",
                features: ["정원 뷰", "독서 공간", "친환경"]
              },
              {
                name: "Minimalist Retreat",
                description: "미니멀한 디자인의 휴식 공간",
                price: "220,000원",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop",
                tag: "NEW",
                features: ["미니멀", "명상 공간", "조용함"]
              }
            ].map((room, index) => (
              <div key={index} className="group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="card overflow-hidden hover-lift bg-white hover:shadow-soft-xl transition-all duration-500">
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                        room.tag === 'PREMIUM' ? 'bg-sage-600 text-white' :
                        room.tag === 'POPULAR' ? 'bg-nude-500 text-white' :
                        'bg-stone-600 text-white'
                      }`}>
                        {room.tag}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-stone-800">{room.price}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-stone-800 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                      {room.name}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-4">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-sand-100 text-sand-700 text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      <a
                        href={`/rooms/${index + 1}`}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-stone-800 text-white rounded-lg font-medium hover:bg-stone-900 transition-all duration-300 group-hover:bg-sage-600"
                      >
                        자세히 보기
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a
              href="/rooms"
              className="inline-flex items-center px-8 py-4 bg-sage-500 text-white rounded-xl font-semibold text-lg hover:bg-sage-600 transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:scale-105 hover:-translate-y-1"
            >
              모든 객실 보기
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Haven Stay - 당신의 특별한 휴식이 시작됩니다"
            className="w-full h-full object-cover object-center scale-105 animate-parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/70 via-stone-800/60 to-stone-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 section-container text-center text-white">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg text-lg font-medium tracking-wide">
              당신만의 특별한 시간을 위해
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-none">
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
                className="group relative inline-flex items-center px-12 py-5 bg-sage-500 text-white rounded-2xl font-bold text-xl hover:bg-sage-600 transition-all duration-500 shadow-2xl hover:shadow-sage-500/30 hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sage-400 to-sage-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  지금 예약하기
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a
                href="/about"
                className="group inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-lg text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
