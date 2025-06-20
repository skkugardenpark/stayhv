"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const storyElements = [
  {
    id: 1,
    title: "자연과의 조화",
    subtitle: "Harmony with Nature",
    description: "Haven Stay는 자연을 해치지 않고 조화롭게 어우러지는 공간을 추구합니다. 친환경 소재와 지속가능한 디자인으로 자연 그대로의 아름다움을 보존합니다.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
    stats: "100% 친환경 소재"
  },
  {
    id: 2,
    title: "조용한 공간",
    subtitle: "Quiet Sanctuary",
    description: "도시의 소음에서 벗어나 진정한 고요함을 경험할 수 있는 공간입니다. 새소리와 바람소리만이 당신의 휴식을 함께합니다.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop",
    stats: "소음 수준 30dB 이하"
  },
  {
    id: 3,
    title: "마음의 치유",
    subtitle: "Healing for the Soul",
    description: "바쁜 일상에 지친 마음을 달래고 내면의 평화를 찾을 수 있는 공간을 제공합니다. 명상과 요가를 통해 진정한 휴식을 경험하세요.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000&auto=format&fit=crop",
    stats: "월 평균 방문자 만족도 98%"
  }
]

export function Experience() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="section-container">
        {/* Main Story Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand-100 text-sand-700 text-sm font-medium tracking-wide mb-8">
            <span>―</span>
            <span>OUR STORY</span>
            <span>―</span>
          </div>
          
          <h2 className="section-title text-stone-800 mb-8">
            자연 속에서 찾는
            <br />
            진정한 <span className="text-gradient">휴식의 의미</span>
          </h2>
          
          <div className="prose-custom max-w-3xl mx-auto">
            <p className="body-large text-stone-600 leading-relaxed mb-6">
              Haven Stay는 단순한 숙박을 넘어서는 특별한 경험을 제공합니다.
              자연과 하나가 되어 몸과 마음의 진정한 치유를 경험할 수 있는 공간입니다.
            </p>
            <p className="text-stone-500 leading-relaxed">
              2024년, 우리는 현대인들이 잃어버린 '쉼'의 가치를 되찾아주고자 하는 마음으로 시작되었습니다.
              좋은 자재, 좋은 공간에 대한 신념으로 건강하고 아름다운 휴식 공간을 만들어갑니다.
            </p>
          </div>
        </motion.div>

        {/* Story Elements */}
        <div className="space-y-32">
          {storyElements.map((element, index) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-soft-xl"
                >
                  <Image
                    src={element.image}
                    alt={element.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent"></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-stone-800">{element.stats}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-sage-600 font-medium tracking-wide text-sm mb-2">
                    {element.subtitle}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-display font-semibold text-stone-800 mb-6 leading-tight">
                    {element.title}
                  </h3>
                  <p className="body-large text-stone-600 leading-relaxed">
                    {element.description}
                  </p>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-0.5 bg-gradient-to-r from-sage-400 to-sand-300"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold text-stone-800 mb-8">
              "더 나은 휴식, 더 깊은 치유를 위하여"
            </h3>
            <p className="body-large text-stone-600 leading-relaxed max-w-2xl mx-auto">
              Haven Stay는 매일 더 좋은 공간, 더 나은 서비스를 위해 노력합니다.
              당신의 소중한 시간이 진정한 의미를 가질 수 있도록 함께하겠습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 