"use client"

import Image from "next/image"
import Link from "next/link"

const featuredReviews = [
  {
    id: 1,
    name: "김은혜",
    date: "2024년 11월",
    rating: 5,
    title: "완벽한 힐링 여행이었습니다!",
    content: "도시 생활에 지쳐있던 저에게 Haven Stay는 정말 천국 같은 곳이었어요. 일출 요가 프로그램이 특히 인상 깊었고, 직원분들이 모두 친절하셨습니다. 자연과 하나 되는 느낌을 받을 수 있어서 정말 만족스러웠습니다.",
    roomType: "Forest Suite",
    stayDuration: "2박 3일",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop"
    ],
    likes: 24,
    helpful: 18
  },
  {
    id: 2,
    name: "박지수",
    date: "2024년 10월",
    rating: 5,
    title: "커플 여행으로 최고였어요",
    content: "남자친구와 함께 방문했는데 정말 로맨틱한 시간을 보낼 수 있었습니다. Couples Hideaway는 분위기가 정말 좋았고, 커플 스파도 받았는데 최고였어요. 밤에 별 관측 프로그램도 참여했는데 너무 감동적이었습니다.",
    roomType: "Couples Hideaway",
    stayDuration: "1박 2일",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop"
    ],
    likes: 19,
    helpful: 15
  },
  {
    id: 3,
    name: "최민호",
    date: "2024년 10월",
    rating: 4,
    title: "조용하고 평화로운 휴식",
    content: "업무 스트레스로 지쳐있을 때 찾게 된 Haven Stay였습니다. Minimalist Retreat에서 머물렀는데 정말 미니멀하면서도 필요한 것은 모두 갖춰져 있어서 좋았어요. 명상 프로그램과 숲속 트레킹이 정말 도움이 되었습니다.",
    roomType: "Minimalist Retreat",
    stayDuration: "3박 4일",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=400&auto=format&fit=crop"
    ],
    likes: 16,
    helpful: 12
  },
  {
    id: 4,
    name: "이소영",
    date: "2024년 9월",
    rating: 5,
    title: "가족 여행으로 완벽했습니다",
    content: "가족과 함께 Family Cabin에서 머물렀는데 아이들이 정말 좋아했어요. 키즈존도 잘 되어있고, 농장 체험 프로그램도 아이들에게 좋은 경험이 되었습니다. 어른들도 스파에서 힐링할 수 있어서 모든 가족이 만족한 여행이었어요.",
    roomType: "Family Cabin",
    stayDuration: "2박 3일",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&auto=format&fit=crop"
    ],
    likes: 22,
    helpful: 20
  }
]

const ratingBreakdown = [
  { stars: 5, percentage: 78, count: 972 },
  { stars: 4, percentage: 18, count: 224 },
  { stars: 3, percentage: 3, count: 37 },
  { stars: 2, percentage: 1, count: 12 },
  { stars: 1, percentage: 0, count: 2 }
]

const categoryRatings = [
  { category: "청결도", rating: 4.9 },
  { category: "서비스", rating: 4.8 },
  { category: "위치", rating: 4.7 },
  { category: "가격 대비 만족도", rating: 4.6 },
  { category: "시설", rating: 4.8 },
  { category: "음식", rating: 4.9 }
]

export default function ReviewsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
            alt="Haven Stay - 고객 후기"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sage-900/80 via-forest-800/70 to-ocean-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-lg text-xl font-medium tracking-wider">
              <span className="text-sage-300">💬</span>
              <span>GUEST REVIEWS</span>
              <span className="text-sage-300">💬</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
              <span className="block">진짜 후기로 만나는</span>
              <span className="block bg-gradient-to-r from-sage-300 via-forest-200 to-ocean-300 bg-clip-text text-transparent">
                Haven Stay
              </span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/95">
              고객들이 직접 경험한
              <br />
              <span className="text-sage-200">특별한 순간들의 이야기</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-sage-300 mb-2">4.8★</div>
                <div className="text-sm text-white/70">평균 평점</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-forest-300 mb-2">1,247</div>
                <div className="text-sm text-white/70">총 후기</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-ocean-300 mb-2">98%</div>
                <div className="text-sm text-white/70">추천율</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-sunset-300 mb-2">85%</div>
                <div className="text-sm text-white/70">재방문율</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Statistics */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-sand-50 to-nude-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sage-100 text-sage-700 text-lg font-medium mb-8">
                <span>―</span>
                <span>OVERALL RATINGS</span>
                <span>―</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8">
                고객 만족도
                <br />
                <span className="bg-gradient-to-r from-sage-600 to-forest-600 bg-clip-text text-transparent">
                  통계 현황
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Rating Breakdown */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">평점 분포</h3>
                
                <div className="space-y-4">
                  {ratingBreakdown.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 min-w-0">
                        <span className="text-sm font-medium text-stone-600">{rating.stars}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                      
                      <div className="flex-1 bg-stone-200 rounded-full h-3">
                        <div 
                          className="h-full bg-gradient-to-r from-sage-400 to-forest-500 rounded-full"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                      
                      <div className="text-sm text-stone-600 min-w-0">
                        <span className="font-medium">{rating.percentage}%</span>
                        <span className="text-stone-500 ml-1">({rating.count})</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <div className="text-4xl font-bold text-stone-800 mb-2">4.8</div>
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-2xl text-yellow-500">★</span>
                    ))}
                  </div>
                  <div className="text-stone-600">1,247개의 후기 기준</div>
                </div>
              </div>

              {/* Category Ratings */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-8 text-center">카테고리별 평점</h3>
                
                <div className="space-y-6">
                  {categoryRatings.map((item) => (
                    <div key={item.category}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-stone-700">{item.category}</span>
                        <span className="font-bold text-stone-800">{item.rating}</span>
                      </div>
                      <div className="bg-stone-200 rounded-full h-2">
                        <div 
                          className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full"
                          style={{ width: `${(item.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-gradient-to-br from-sage-50 via-forest-50 to-earth-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-forest-100 text-forest-700 text-lg font-medium mb-8">
                <span>―</span>
                <span>FEATURED REVIEWS</span>
                <span>―</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8">
                고객들의 생생한
                <br />
                <span className="bg-gradient-to-r from-forest-600 to-earth-600 bg-clip-text text-transparent">
                  후기 이야기
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {featuredReviews.map((review) => (
                <div key={review.id} className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-stone-800">{review.name}</h4>
                        <div className="text-sm text-stone-500">{review.date}</div>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-2">
                        {[1,2,3,4,5].map((star) => (
                          <span key={star} className={`text-lg ${star <= review.rating ? 'text-yellow-500' : 'text-stone-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-sm text-stone-600">
                        {review.roomType} • {review.stayDuration}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h5 className="text-xl font-bold text-stone-800 mb-4">{review.title}</h5>

                  {/* Content */}
                  <p className="text-stone-600 leading-relaxed mb-6">{review.content}</p>

                  {/* Photos */}
                  {review.photos && review.photos.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {review.photos.map((photo, idx) => (
                        <div key={idx} className="relative h-32 rounded-lg overflow-hidden">
                          <Image
                            src={photo}
                            alt={`${review.name}의 후기 사진 ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between text-sm text-stone-500">
                    <div className="flex items-center gap-4">
                      <span>👍 도움됨 {review.helpful}</span>
                      <span>❤️ {review.likes}</span>
                    </div>
                    <button className="text-sage-600 hover:text-sage-700 font-medium">
                      더보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-sage-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-8">
              당신의 특별한 후기를
              <br />
              <span className="bg-gradient-to-r from-sage-600 to-forest-600 bg-clip-text text-transparent">
                기다리고 있습니다
              </span>
            </h2>
            
            <p className="text-xl text-stone-600 mb-12 leading-relaxed">
              Haven Stay에서의 소중한 경험을 다른 고객들과 함께 나누어보세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/booking"
                className="inline-flex items-center px-12 py-4 bg-sage-600 text-white rounded-xl font-bold text-lg hover:bg-sage-700 transition-colors duration-300"
              >
                지금 예약하기
              </Link>
              
              <Link
                href="/rooms"
                className="inline-flex items-center px-10 py-4 bg-white text-sage-600 rounded-xl font-semibold text-lg border-2 border-sage-200 hover:border-sage-300 transition-colors duration-300"
              >
                객실 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 