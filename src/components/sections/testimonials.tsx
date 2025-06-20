"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content: "Haven Stay에서의 3일간은 정말 특별했습니다. 도시의 소음에서 벗어나 자연의 소리만 들으며 진정한 휴식을 취할 수 있었어요. 특히 Forest Suite의 자쿠지에서 바라본 숲의 풍경은 잊을 수 없는 추억이 되었습니다.",
    author: "이민지",
    role: "마케팅 디렉터",
    location: "서울",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b743?q=80&w=2000&auto=format&fit=crop",
    rating: 5,
    room: "Forest Suite"
  },
  {
    id: 2,
    content: "아이들과 함께한 가족 여행이었는데, 정말 완벽했어요. 아이들은 자연 속에서 마음껏 뛰어놀고, 저희 부부는 오랜만에 여유로운 시간을 가질 수 있었습니다. 직원분들의 세심한 배려도 인상적이었어요.",
    author: "박지현",
    role: "학부모",
    location: "수원",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2000&auto=format&fit=crop",
    rating: 5,
    room: "Garden View"
  },
  {
    id: 3,
    content: "혼자만의 시간이 필요해서 찾은 Haven Stay. Minimalist Retreat에서의 3박 4일은 저에게 새로운 영감을 주었습니다. 명상과 독서, 그리고 자연과의 교감을 통해 마음의 평화를 되찾을 수 있었어요.",
    author: "김태호",
    role: "작가",
    location: "부산",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
    rating: 5,
    room: "Minimalist Retreat"
  }
]

const stats = [
  { label: "만족도", value: "98%", description: "고객 만족도" },
  { label: "재방문률", value: "85%", description: "고객 재방문률" },
  { label: "추천도", value: "96%", description: "지인 추천 의향" },
  { label: "평점", value: "4.9", description: "평균 리뷰 점수" },
]

export function Testimonials() {
  return (
    <section className="section-padding bg-sand-50">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium tracking-wide mb-8">
            <span>―</span>
            <span>GUEST STORIES</span>
            <span>―</span>
          </div>
          
          <h2 className="section-title text-stone-800 mb-6">
            소중한 고객들의
            <br />
            <span className="text-gradient">특별한 이야기</span>
          </h2>
          
          <p className="body-large text-stone-600 max-w-2xl mx-auto">
            Haven Stay에서 경험한 진정한 휴식과 치유의 순간들을 
            <br />
            실제 고객들의 생생한 목소리로 들어보세요.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
                <div className="text-3xl lg:text-4xl font-display font-bold text-sage-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-stone-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg hover-lift transition-all duration-500">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-sage-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Content */}
                <blockquote className="text-stone-600 leading-relaxed mb-8 text-sm lg:text-base">
                  "{testimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-sage-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover object-center"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-800 text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-stone-500">
                      {testimonial.role} · {testimonial.location}
                    </div>
                    <div className="text-xs text-sage-600 font-medium mt-1">
                      {testimonial.room} 이용
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-stone-800 mb-4">
              당신도 특별한 이야기의 주인공이 되어보세요
            </h3>
            <p className="body-large text-stone-600 mb-8">
              Haven Stay에서 경험할 수 있는 진정한 휴식과 치유를 직접 만나보세요.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/reviews"
                className="inline-flex items-center px-8 py-4 bg-sage-500 text-white rounded-xl font-semibold text-lg hover:bg-sage-600 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
              >
                더 많은 후기 보기
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 