"use client"

import Image from "next/image"
import Link from "next/link"

const roomTypes = [
  {
    id: 1,
    name: "Forest Suite",
    subtitle: "프리미엄 스위트",
    description: "숲을 바라보는 최고급 스위트룸으로 자연과 완벽한 조화를 이룹니다. 넓은 공간과 프라이빗 테라스에서 진정한 휴식을 경험하세요.",
    details: "킹사이즈 침대 2개가 있는 넓은 침실과 별도의 거실 공간이 마련되어 있어 가족이나 친구들과 함께 여유로운 시간을 보낼 수 있습니다. 전용 자쿠지와 테라스에서 숲의 전경을 감상하며 특별한 순간을 만들어보세요.",
    size: "80㎡",
    capacity: "2-4인",
    price: "350,000원",
    mainImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "킹사이즈 침대 2개", "별도 거실 공간", "프라이빗 자쿠지", "전용 테라스",
      "숲 전망", "미니바", "네스프레소 머신", "블루투스 스피커"
    ],
    color: "forest",
    layout: "text-left" // 좌측 텍스트, 우측 이미지
  },
  {
    id: 2,
    name: "Garden View",
    subtitle: "가든 뷰 룸",
    description: "아름다운 정원이 한눈에 들어오는 아늑한 객실입니다. 자연 채광이 풍부하고 독서를 위한 특별한 공간이 마련되어 있습니다.",
    details: "정원을 바라보는 대형 창문을 통해 계절의 변화를 느낄 수 있습니다. 편안한 독서 공간과 친환경 어메니티로 자연과 함께하는 힐링 타임을 제공합니다.",
    size: "55㎡",
    capacity: "2인",
    price: "280,000원",
    mainImages: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "퀸사이즈 침대", "정원 뷰 대형창", "독서 공간", "친환경 어메니티",
      "무선 충전기", "요가 매트", "아로마 디퓨저", "웰컴 티 세트"
    ],
    color: "sage",
    layout: "text-right" // 우측 텍스트, 좌측 이미지
  },
  {
    id: 3,
    name: "Minimalist Retreat",
    subtitle: "미니멀 객실",
    description: "군더더기 없는 깔끔한 디자인으로 명상과 휴식에 온전히 집중할 수 있는 특별한 공간입니다.",
    details: "미니멀한 인테리어와 차분한 색감으로 마음의 평온을 찾을 수 있습니다. 명상을 위한 쿠션과 조용한 환경이 진정한 내면의 평화를 선사합니다.",
    size: "45㎡",
    capacity: "1-2인",
    price: "220,000원",
    mainImages: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "더블 침대", "명상 공간", "미니멀 가구", "조용한 환경",
      "명상 쿠션", "차 세트", "향초", "수면 조명"
    ],
    color: "ocean",
    layout: "sticky-text" // 고정 텍스트, 스크롤 이미지
  },
  {
    id: 4,
    name: "Couples Hideaway",
    subtitle: "커플 전용룸",
    description: "로맨틱한 분위기가 가득한 커플만을 위한 특별한 공간입니다. 프라이빗한 환경에서 둘만의 시간을 만끽하세요.",
    details: "로맨틱한 조명과 커플 스파 시설, 샴페인 서비스까지. 특별한 날을 더욱 특별하게 만들어줄 모든 것이 준비되어 있습니다.",
    size: "60㎡",
    capacity: "2인",
    price: "320,000원",
    mainImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467987506553-8f3916508521?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "킹사이즈 침대", "로맨틱 조명", "커플 스파", "샴페인 서비스",
      "장미 꽃잎 데코", "캔들 디너", "전용 욕조", "늦은 체크아웃"
    ],
    color: "rose",
    layout: "text-left"
  },
  {
    id: 5,
    name: "Wellness Studio",
    subtitle: "웰니스 스튜디오",
    description: "몸과 마음의 건강을 위한 웰니스 특화 객실입니다. 요가와 명상을 위한 전용 공간에서 진정한 힐링을 경험하세요.",
    details: "요가 매트와 명상 쿠션이 준비된 전용 스튜디오 공간에서 나만의 웰니스 루틴을 만들어보세요. 아로마 테라피와 헬스케어 키트로 완벽한 셀프케어를 제공합니다.",
    size: "70㎡",
    capacity: "2-3인",
    price: "380,000원",
    mainImages: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "요가 전용 공간", "명상 쿠션", "아로마 디퓨저", "헬스케어 키트",
      "발란스 볼", "스트레칭 밴드", "에센셜 오일", "웰니스 프로그램"
    ],
    color: "lavender",
    layout: "text-right"
  },
  {
    id: 6,
    name: "Family Cabin",
    subtitle: "패밀리 캐빈",
    description: "온 가족이 함께하는 소중한 시간을 위한 넓고 편안한 캐빈입니다. 아이들을 위한 특별한 공간과 가족 액티비티가 준비되어 있습니다.",
    details: "2개의 침실과 넓은 거실, 그리고 아이들만을 위한 키즈존까지. 가족 모두가 편안하고 즐거운 시간을 보낼 수 있도록 세심하게 구성된 공간입니다.",
    size: "90㎡",
    capacity: "4-6인",
    price: "420,000원",
    mainImages: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop"
    ],
    amenities: [
      "침실 2개", "넓은 거실", "키즈존", "미니 주방",
      "보드게임", "아동 도서", "장난감", "가족 액티비티 키트"
    ],
    color: "earth",
    layout: "grid-focus" // 그리드 이미지 집중
  }
]

export default function RoomsPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            alt="Haven Stay - 완벽한 객실들"
            fill
            className="object-cover object-center scale-105 animate-parallax"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sage-900/80 via-forest-800/70 to-earth-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 section-container text-center text-white">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-lg text-xl font-medium tracking-wider shadow-2xl animate-glow">
              <span className="text-sage-300">🏨</span>
              <span className="font-display">ROOMS</span>
              <span className="text-sage-300">🏨</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white leading-none animate-reveal">
              <span className="block animate-slide-in-left">완벽한</span>
              <span className="block bg-gradient-to-r from-sage-300 via-forest-200 to-earth-300 bg-clip-text text-transparent animate-shimmer bg-300% bg-[length:200%_100%]">
                객실들
              </span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/95 tracking-wide font-display animate-slide-in-right" style={{animationDelay: '0.3s'}}>
              당신만의 완벽한 휴식을 위한
              <br />
              <span className="text-sage-200">다양한 객실 선택</span>
            </p>
          </div>
        </div>
      </section>

      {/* Room Sections */}
      {roomTypes.map((room, index) => {
        if (room.layout === "text-left") {
          return (
            <section key={room.id} className={`min-h-screen flex items-center py-20 ${
              index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
            }`}>
              <div className="section-container">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left Text */}
                  <div className="space-y-8 animate-slide-in-left">
                    <div className="space-y-4">
                      <h2 className="text-5xl lg:text-6xl font-display font-bold text-stone-800 leading-tight">
                        {room.name}
                      </h2>
                      <p className="text-xl text-stone-500 font-medium tracking-wide">
                        {room.subtitle}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
                        {room.description}
                      </p>
                      <p className="text-base text-stone-500 leading-relaxed">
                        {room.details}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-sm text-stone-600">
                        <span>크기: {room.size}</span>
                        <span>수용인원: {room.capacity}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm text-stone-600">
                        {room.amenities.slice(0, 6).map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              room.color === 'forest' ? 'bg-forest-500' :
                              room.color === 'sage' ? 'bg-sage-500' :
                              room.color === 'ocean' ? 'bg-ocean-500' :
                              room.color === 'rose' ? 'bg-rose-500' :
                              room.color === 'lavender' ? 'bg-lavender-500' :
                              'bg-earth-500'
                            }`}></span>
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="text-3xl font-bold text-stone-800">{room.price}</div>
                      <Link
                        href={`/booking?room=${room.id}`}
                        className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                          room.color === 'forest' ? 'bg-forest-600 hover:bg-forest-700 text-white' :
                          room.color === 'sage' ? 'bg-sage-600 hover:bg-sage-700 text-white' :
                          room.color === 'ocean' ? 'bg-ocean-600 hover:bg-ocean-700 text-white' :
                          room.color === 'rose' ? 'bg-rose-600 hover:bg-rose-700 text-white' :
                          room.color === 'lavender' ? 'bg-lavender-600 hover:bg-lavender-700 text-white' :
                          'bg-earth-600 hover:bg-earth-700 text-white'
                        }`}
                      >
                        예약하기
                      </Link>
                    </div>
                  </div>

                  {/* Right Images */}
                  <div className="space-y-4 animate-slide-in-right">
                    <div className="relative h-96 rounded-2xl overflow-hidden group">
                      <Image
                        src={room.mainImages[0]}
                        alt={room.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {room.mainImages[1] && (
                      <div className="relative h-64 rounded-2xl overflow-hidden group">
                        <Image
                          src={room.mainImages[1]}
                          alt={`${room.name} 2`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )
        }

        if (room.layout === "text-right") {
          return (
            <section key={room.id} className={`min-h-screen flex items-center py-20 ${
              index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
            }`}>
              <div className="section-container">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Left Images */}
                  <div className="grid grid-cols-2 gap-4 animate-slide-in-left">
                    {room.mainImages.slice(0, 4).map((image, idx) => (
                      <div key={idx} className="relative h-48 lg:h-56 rounded-xl overflow-hidden group">
                        <Image
                          src={image}
                          alt={`${room.name} ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Text */}
                  <div className="space-y-8 animate-slide-in-right">
                    <div className="space-y-4">
                      <h2 className="text-5xl lg:text-6xl font-display font-bold text-stone-800 leading-tight">
                        {room.name}
                      </h2>
                      <p className="text-xl text-stone-500 font-medium tracking-wide">
                        {room.subtitle}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
                        {room.description}
                      </p>
                      <p className="text-base text-stone-500 leading-relaxed">
                        {room.details}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-sm text-stone-600">
                        <span>크기: {room.size}</span>
                        <span>수용인원: {room.capacity}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm text-stone-600">
                        {room.amenities.slice(0, 6).map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              room.color === 'forest' ? 'bg-forest-500' :
                              room.color === 'sage' ? 'bg-sage-500' :
                              room.color === 'ocean' ? 'bg-ocean-500' :
                              room.color === 'rose' ? 'bg-rose-500' :
                              room.color === 'lavender' ? 'bg-lavender-500' :
                              'bg-earth-500'
                            }`}></span>
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="text-3xl font-bold text-stone-800">{room.price}</div>
                      <Link
                        href={`/booking?room=${room.id}`}
                        className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                          room.color === 'forest' ? 'bg-forest-600 hover:bg-forest-700 text-white' :
                          room.color === 'sage' ? 'bg-sage-600 hover:bg-sage-700 text-white' :
                          room.color === 'ocean' ? 'bg-ocean-600 hover:bg-ocean-700 text-white' :
                          room.color === 'rose' ? 'bg-rose-600 hover:bg-rose-700 text-white' :
                          room.color === 'lavender' ? 'bg-lavender-600 hover:bg-lavender-700 text-white' :
                          'bg-earth-600 hover:bg-earth-700 text-white'
                        }`}
                      >
                        예약하기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }

        if (room.layout === "sticky-text") {
          // 각 이미지에 대응하는 텍스트 정보
          const imageTexts = [
            {
              title: room.name,
              subtitle: "메인 뷰",
              description: room.description,
              details: "이 공간의 핵심적인 매력을 담고 있는 메인 영역입니다. 자연과 하나가 되는 느낌을 받을 수 있도록 세심하게 디자인되었습니다."
            },
            {
              title: "침실 공간",
              subtitle: "Bedroom Area", 
              description: "편안한 숙면을 위한 완벽한 침실 공간입니다.",
              details: "프리미엄 린넨과 최적의 조명으로 최상의 휴식을 제공합니다. 미니멀한 디자인으로 마음의 평온을 찾을 수 있습니다."
            },
            {
              title: "휴식 공간",
              subtitle: "Relaxation Zone",
              description: "명상과 독서를 위한 조용한 공간입니다.", 
              details: "차분한 분위기에서 내면의 평화를 찾고 진정한 휴식을 취할 수 있는 특별한 공간입니다."
            }
          ]

          return (
            <section key={room.id} className="relative">
              {/* 각 이미지와 텍스트를 하나의 섹션으로 구성 */}
              {room.mainImages.map((image, idx) => (
                <div key={idx} className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Image */}
                  <div className="relative h-screen lg:sticky lg:top-0">
                    <Image
                      src={image}
                      alt={`${room.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>

                  {/* Right Text */}
                  <div className="flex items-center bg-white min-h-screen">
                    <div className="p-8 lg:p-16 xl:p-24 w-full max-w-lg">
                      {/* 제목 */}
                      <div className="mb-12">
                        <div className="w-1 h-16 bg-stone-800 mb-6"></div>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-stone-800 leading-tight">
                          {imageTexts[idx].title}
                        </h2>
                        <p className="text-lg text-stone-500 mt-4 font-light">
                          {imageTexts[idx].subtitle}
                        </p>
                      </div>
                      
                      {/* 설명 텍스트 */}
                      <div className="space-y-8 text-stone-600 leading-relaxed">
                        <p className="text-lg lg:text-xl font-light">
                          {imageTexts[idx].description}
                        </p>
                        
                        <p className="text-base lg:text-lg font-light">
                          {imageTexts[idx].details}
                        </p>
                        
                        <div className="pt-4 space-y-2 text-sm lg:text-base">
                          <p><span className="font-medium">크기:</span> {room.size}</p>
                          <p><span className="font-medium">수용인원:</span> {room.capacity}</p>
                          <p><span className="font-medium">가격:</span> {room.price}</p>
                        </div>
                      </div>

                      {/* 어메니티 - 마지막 섹션에만 표시 */}
                      {idx === room.mainImages.length - 1 && (
                        <div className="mt-12">
                          <h3 className="text-lg font-medium text-stone-800 mb-4">제공 어메니티</h3>
                          <div className="space-y-2 text-sm text-stone-500">
                            {room.amenities.slice(0, 4).map((amenity, amenityIdx) => (
                              <div key={amenityIdx} className="flex items-start gap-2">
                                <span className="text-stone-400 mt-2">•</span>
                                <span>{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 예약 버튼 - 마지막 섹션에만 표시 */}
                      {idx === room.mainImages.length - 1 && (
                        <div className="mt-12">
                          <Link
                            href={`/booking?room=${room.id}`}
                            className="inline-block px-8 py-3 bg-stone-800 text-white font-medium tracking-wide transition-all duration-300 hover:bg-stone-700 hover:scale-105"
                          >
                            예약하기
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )
        }

        if (room.layout === "grid-focus") {
          return (
            <section key={room.id} className="min-h-screen py-20 bg-stone-100">
              <div className="section-container">
                <div className="max-w-7xl mx-auto">
                  {/* Text Header */}
                  <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-5xl lg:text-6xl font-display font-bold text-stone-800 mb-4">
                      {room.name}
                    </h2>
                    <p className="text-xl text-stone-500 font-medium mb-8">
                      {room.subtitle}
                    </p>
                    <div className="max-w-4xl mx-auto space-y-6">
                      <p className="text-lg text-stone-600 leading-relaxed">
                        {room.description}
                      </p>
                      <p className="text-base text-stone-500 leading-relaxed">
                        {room.details}
                      </p>
                    </div>
                  </div>

                  {/* 3x2 Image Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
                    {room.mainImages.map((image, idx) => (
                      <div 
                        key={idx} 
                        className={`relative rounded-2xl overflow-hidden group animate-zoom-in ${
                          idx === 0 ? 'col-span-2 lg:col-span-1 h-80 lg:h-96' : 
                          idx === 1 ? 'h-48 lg:h-96' : 
                          'h-48 lg:h-64'
                        }`}
                        style={{animationDelay: `${idx * 0.1}s`}}
                      >
                        <Image
                          src={image}
                          alt={`${room.name} ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                        <span className="w-2 h-2 rounded-full bg-earth-500"></span>
                        <span className="text-sm text-stone-600">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Info */}
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-8 text-stone-600">
                      <span>크기: {room.size}</span>
                      <span>수용인원: {room.capacity}</span>
                      <span className="text-2xl font-bold text-stone-800">{room.price}</span>
                    </div>
                    
                    <Link
                      href={`/booking?room=${room.id}`}
                      className="inline-flex items-center px-12 py-4 bg-earth-600 hover:bg-earth-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      예약하기
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        }

        return null
      })}
    </main>
  )
} 