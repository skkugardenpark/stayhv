"use client"


import Image from "next/image"
import { Container } from "@/components/layout/container"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "김자연",
      position: "대표이사 & 창립자",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
      description: "20년간 호스피탈리티 업계에서 경험을 쌓은 후, 진정한 휴식의 의미를 추구하며 Haven Stay를 설립했습니다.",
      color: "forest"
    },
    {
      name: "박힐링",
      position: "운영총괄",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      description: "고급 리조트 운영 경험을 바탕으로 최상의 고객 서비스와 시설 관리를 책임지고 있습니다.",
      color: "sunset"
    },
    {
      name: "이평온",
      position: "체험프로그램 디렉터",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
      description: "자연과 함께하는 다양한 체험 프로그램을 기획하고 운영하여 특별한 추억을 만들어드립니다.",
      color: "ocean"
    },
    {
      name: "최웰니스",
      position: "웰니스 전문가",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      description: "요가, 명상, 힐링 프로그램을 통해 고객들의 몸과 마음의 균형을 찾도록 도와드립니다.",
      color: "lavender"
    }
  ]

  const values = [
    {
      icon: "🌿",
      title: "지속가능성",
      subtitle: "Sustainability",
      description: "친환경적인 운영과 지역 생태계 보호를 통해 미래 세대에게 아름다운 자연을 물려주고자 합니다.",
      gradient: "from-forest-400 to-forest-600"
    },
    {
      icon: "💚",
      title: "진정성",
      subtitle: "Authenticity",
      description: "겉치레가 아닌 진심 어린 서비스로 고객 한 분 한 분께 특별한 경험을 선사합니다.",
      gradient: "from-sage-400 to-sage-600"
    },
    {
      icon: "✨",
      title: "혁신",
      subtitle: "Innovation",
      description: "전통적인 휴양의 개념을 넘어 새로운 형태의 휴식과 치유를 제공합니다.",
      gradient: "from-sunset-400 to-sunset-600"
    },
    {
      icon: "🤝",
      title: "공동체",
      subtitle: "Community",
      description: "지역 사회와 함께 성장하며, 모든 이해관계자들과 상생하는 관계를 추구합니다.",
      gradient: "from-ocean-400 to-ocean-600"
    }
  ]

  const milestones = [
    {
      year: "2019",
      title: "꿈의 시작",
      description: "자연 속에서 진정한 휴식을 제공하겠다는 비전으로 Haven Stay 프로젝트가 시작되었습니다.",
      color: "text-forest-600",
      bgColor: "bg-forest-100"
    },
    {
      year: "2020",
      title: "부지 확보",
      description: "강원도 평창의 아름다운 자연환경을 가진 최적의 부지를 확보하여 설계를 시작했습니다.",
      color: "text-sunset-600",
      bgColor: "bg-sunset-100"
    },
    {
      year: "2021",
      title: "친환경 건축",
      description: "자연과 조화를 이루는 친환경 건축 자재를 사용하여 시설 건설을 완료했습니다.",
      color: "text-ocean-600",
      bgColor: "bg-ocean-100"
    },
    {
      year: "2022",
      title: "시범 운영",
      description: "소규모 시범 운영을 통해 서비스를 개선하고 고객 피드백을 반영했습니다.",
      color: "text-lavender-600",
      bgColor: "bg-lavender-100"
    },
    {
      year: "2023",
      title: "정식 오픈",
      description: "Haven Stay가 정식으로 문을 열어 많은 고객들께 사랑받기 시작했습니다.",
      color: "text-rose-600",
      bgColor: "bg-rose-100"
    },
    {
      year: "2024",
      title: "새로운 도약",
      description: "웰니스 프로그램 확장과 지속가능한 관광의 모델로 인정받고 있습니다.",
      color: "text-earth-600",
      bgColor: "bg-earth-100"
    }
  ]

  const awards = [
    {
      year: "2024",
      title: "베스트 에코 리조트 대상",
      organization: "한국관광공사",
      description: "친환경적 운영과 지속가능한 관광 모델로 인정받았습니다."
    },
    {
      year: "2024",
      title: "고객만족도 1위",
      organization: "숙박업계 리서치",
      description: "고객 만족도 98%로 업계 1위를 기록했습니다."
    },
    {
      year: "2023",
      title: "혁신적 웰니스 프로그램상",
      organization: "웰니스 관광협회",
      description: "독창적인 힐링 프로그램으로 수상했습니다."
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Full Screen Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop"
          alt="Haven Stay - 우리의 공간"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
      </div>

      {/* Content - Positioned at bottom left */}
      <div className="relative z-10 min-h-screen flex items-end">
        <div className="section-container pb-16 lg:pb-24">
          <div className="max-w-3xl">
            <div className="space-y-8 text-white animate-fade-in-up">
              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-light leading-tight tracking-wide">
                  <span className="block">'시간이 머무는 곳,</span>
                  <span className="block italic font-script text-sage-200">Haven Stay'</span>
                </h1>
              </div>

              {/* Main Content */}
              <div className="space-y-6 text-lg lg:text-xl font-light leading-relaxed text-white max-w-2xl">
                <p>
                  과거와 현재의 시간이 공존하는 곳에서, 우리는 다른 의미의 순간을 만듭니다.
                  단순한 숙박을 넘어서, 일상의 틈새로 스며드는 시간에 대해 말하고, 
                  수많은 사람들이 머무는 동안 자신이 누구인지 기억하게 하는 곳이 됩니다.
                </p>
                
                <p>
                  3년 전 요셉해 시작한 이 여정에서, 우리는 각자 다른 삶의 속도와 
                  리듬을 지닌 분들이 편안한 숨쉼을 만들며 머무를 수 있도록 합니다.
                  일상에 밀려온 변화와 끝이 없는 바쁨에서 벗어나 그들의 감정을 차있하고,
                  따뜻한 밤과 맑은 하루를 누리게 만듭니다.
                </p>
                
                <p>
                  우리가 말하는 '스테이셔널'은 단순히 공간이 아닌 문화이고, 
                  사람들이 자연과 함께 맞이한 관점에서 어떻게 된건지 매우 모릅니다.
                  'Haven Stay에서는' 모든 시간이 소중한 운정과 조명한 바람의 위로가 됩니다.
                </p>
              </div>

              {/* Bottom Info */}
              <div className="pt-8 border-t border-white/20">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-sm text-white/80 font-medium tracking-wide">
                  <div>
                    <span className="block">위치</span>
                    <span className="text-white">강원도 평창군</span>
                  </div>
                  <div>
                    <span className="block">설립</span>
                    <span className="text-white">2024년</span>
                  </div>
                  <div>
                    <span className="block">컨셉</span>
                    <span className="text-white">More than Stay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}