"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const featuredRooms = [
  {
    id: 1,
    name: "Forest Suite",
    description: "숲을 바라보는 프리미엄 스위트룸",
    details: "킹사이즈 침대, 전용 테라스, 자쿠지",
    price: "350,000원",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
    tag: "PREMIUM",
    features: ["숲 전망", "자쿠지", "테라스"]
  },
  {
    id: 2,
    name: "Garden View",
    description: "정원이 보이는 아늑한 객실",
    details: "퀸사이즈 침대, 정원 뷰, 독서 공간",
    price: "280,000원",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
    tag: "POPULAR",
    features: ["정원 뷰", "독서 공간", "친환경"]
  },
  {
    id: 3,
    name: "Minimalist Retreat",
    description: "미니멀한 디자인의 휴식 공간",
    details: "더블침대, 미니멀 인테리어, 명상 공간",
    price: "220,000원",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop",
    tag: "NEW",
    features: ["미니멀", "명상 공간", "조용함"]
  }
]

export function FeaturedRooms() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium tracking-wide mb-6">
            <span>―</span>
            <span>OUR SPACES</span>
            <span>―</span>
          </div>
          
          <h2 className="section-title text-stone-800 mb-6">
            자연과 함께하는
            <br />
            특별한 공간들
          </h2>
          
          <p className="body-large text-stone-600 max-w-2xl mx-auto">
            각기 다른 매력을 가진 객실에서 당신만의 완벽한 휴식을 찾아보세요.
            <br />
            모든 공간은 자연과의 조화를 고려하여 디자인되었습니다.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card overflow-hidden hover-lift bg-white">
                {/* Image Container */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                      room.tag === 'PREMIUM' ? 'bg-sage-600 text-white' :
                      room.tag === 'POPULAR' ? 'bg-nude-500 text-white' :
                      'bg-stone-600 text-white'
                    }`}>
                      {room.tag}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-stone-800">{room.price}</span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-stone-800 mb-2 group-hover:text-sage-600 transition-colors duration-300">
                      {room.name}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-3">
                      {room.description}
                    </p>
                    <p className="text-sm text-stone-500">
                      {room.details}
                    </p>
                  </div>

                  {/* Features */}
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

                  {/* Action */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={`/rooms/${room.id}`}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-stone-800 text-white rounded-lg font-medium hover:bg-stone-900 transition-all duration-300 group-hover:bg-sage-600"
                    >
                      자세히 보기
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/rooms"
              className="inline-flex items-center px-8 py-4 bg-sage-500 text-white rounded-xl font-semibold text-lg hover:bg-sage-600 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
            >
              모든 객실 보기
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 