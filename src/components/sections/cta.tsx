"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function CTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          alt="Haven Stay - 당신의 특별한 휴식이 시작됩니다"
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-stone-800/50 to-stone-700/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {/* Main Message */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-lg font-medium tracking-wide"
            >
              <span>당신만의 특별한 시간을 위해</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-text text-white leading-none"
            >
              지금 바로
              <br />
              <span className="bg-gradient-to-r from-sage-300 to-sand-200 bg-clip-text text-transparent">
                예약하세요
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl font-light leading-relaxed text-white/90 max-w-3xl mx-auto"
            >
              더 이상 미루지 마세요. 당신이 찾던 진정한 휴식이 Haven Stay에서 시작됩니다.
              <br />
              <span className="text-lg text-white/70">
                자연 속에서 경험하는 완벽한 하루를 만나보세요.
              </span>
            </motion.p>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                href="/booking"
                className="inline-flex items-center px-12 py-5 bg-sage-500 text-white rounded-2xl font-bold text-xl hover:bg-sage-600 transition-all duration-500 shadow-2xl hover:shadow-sage-500/30 group-hover:shadow-3xl"
              >
                <span>지금 예약하기</span>
                <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/rooms"
                className="inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300"
              >
                객실 둘러보기
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-16 space-y-4"
          >
            <p className="text-white/60 text-sm tracking-wide">
              문의가 있으시거나 특별한 요청사항이 있으시면 언제든 연락주세요
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
              <a 
                href="tel:031-000-0000" 
                className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                031-000-0000
              </a>
              <span className="hidden sm:block text-white/40">|</span>
              <a 
                href="mailto:info@havenstay.co.kr" 
                className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@havenstay.co.kr
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 3 }}
          className="absolute top-1/4 left-1/6 w-3 h-3 bg-white rounded-full animate-float"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 3 }}
          className="absolute top-3/4 right-1/5 w-2 h-2 bg-white rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.1, duration: 3 }}
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  )
} 