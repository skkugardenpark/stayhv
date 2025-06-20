"use client"

import { useState } from "react"

import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Container } from "@/components/layout/container"
import Image from "next/image"
import Link from "next/link"

const faqs = [
  {
    question: "체크인/체크아웃 시간은 어떻게 되나요?",
    answer: "체크인은 오후 3시부터, 체크아웃은 오전 11시까지입니다. 이른 체크인이나 늦은 체크아웃이 필요하시면 미리 연락주시기 바랍니다."
  },
  {
    question: "주차 공간이 있나요?",
    answer: "네, 모든 객실에 무료 주차 공간을 제공하고 있습니다. 넓은 주차장이 마련되어 있어 편리하게 이용하실 수 있습니다."
  },
  {
    question: "취소 정책은 어떻게 되나요?",
    answer: "체크인 3일 전까지는 무료 취소가 가능합니다. 3일 이내 취소 시에는 첫날 숙박비의 50%가 취소 수수료로 부과됩니다."
  },
  {
    question: "펜션 내 시설은 어떤 것들이 있나요?",
    answer: "각 객실에는 개별 테라스, 미니 냉장고, 커피머신이 구비되어 있습니다. 공용 시설로는 정원, 독서 공간, 요가 데크가 있습니다."
  },
  {
    question: "애완동물 동반이 가능한가요?",
    answer: "죄송하지만 현재 애완동물 동반은 불가능합니다. 다른 투숙객의 편안한 휴식을 위해 양해 부탁드립니다."
  },
  {
    question: "주변에 어떤 즐길거리가 있나요?",
    answer: "인근에 아름다운 산책로와 계곡이 있어 자연을 만끽하실 수 있습니다. 또한 차로 10분 거리에 전통 찻집과 수공예 체험장이 있습니다."
  },
  {
    question: "식사는 제공되나요?",
    answer: "아침 식사(유료)를 사전 예약으로 이용하실 수 있습니다. 신선한 유기농 재료로 만든 건강한 조식을 제공해드립니다."
  },
  {
    question: "Wi-Fi는 이용 가능한가요?",
    answer: "네, 모든 객실과 공용 공간에서 무료 Wi-Fi를 이용하실 수 있습니다. 다만 진정한 휴식을 위해 디지털 디톡스를 권해드립니다."
  },
  {
    question: "단체 예약이나 특별 이벤트가 가능한가요?",
    answer: "소규모 단체 예약과 특별 이벤트는 사전 문의를 통해 조율 가능합니다. 최대 20명까지 수용 가능하며, 맞춤형 서비스를 제공해드립니다."
  },
  {
    question: "우천 시에도 즐길 수 있는 활동이 있나요?",
    answer: "실내 독서 공간과 명상실이 마련되어 있어 비가 와도 편안한 시간을 보내실 수 있습니다. 또한 각 객실의 창가에서 비 내리는 풍경을 감상하시는 것도 특별한 경험입니다."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqCategories = [
    {
      id: "booking",
      title: "예약 및 결제",
      icon: "📅",
      color: "ocean",
      questions: [
        {
          question: "예약은 어떻게 하나요?",
          answer: "Haven Stay 웹사이트를 통해 온라인으로 예약하실 수 있습니다. 원하시는 날짜와 객실을 선택한 후, 결제를 완료하시면 예약이 확정됩니다. 전화 예약도 가능하며, 운영시간은 오전 9시부터 오후 6시까지입니다."
        },
        {
          question: "예약 취소 및 변경이 가능한가요?",
          answer: "체크인 날짜 3일 전까지 무료 취소가 가능합니다. 2일 전부터는 첫날 숙박비의 50%가 취소 수수료로 부과되며, 당일 취소는 환불이 불가합니다. 예약 변경은 가능한 객실이 있을 경우 체크인 1일 전까지 가능합니다."
        },
        {
          question: "어떤 결제 방법을 이용할 수 있나요?",
          answer: "신용카드(비자, 마스터카드, JCB), 체크카드, 계좌이체, 무통장입금을 지원합니다. 온라인 결제 시 SSL 보안 시스템을 통해 안전하게 처리되며, 결제 후 즉시 예약 확인서가 이메일로 발송됩니다."
        },
        {
          question: "단체 예약 할인이 있나요?",
          answer: "10명 이상 단체 예약 시 10% 할인이 적용됩니다. 20명 이상의 경우 15% 할인 혜택을 받으실 수 있으며, 별도의 단체 프로그램도 제공됩니다. 단체 예약은 전화 문의를 통해 상담받으시기 바랍니다."
        }
      ]
    },
    {
      id: "checkin",
      title: "체크인 & 체크아웃",
      icon: "🏨",
      color: "forest",
      questions: [
        {
          question: "체크인/체크아웃 시간은 언제인가요?",
          answer: "체크인 시간은 오후 3시부터이며, 체크아웃은 오전 11시까지입니다. 조기 체크인이나 늦은 체크아웃을 원하시는 경우 사전에 문의해 주시면 가능 여부를 확인해 드립니다. 추가 요금이 발생할 수 있습니다."
        },
        {
          question: "신분증이 꼭 필요한가요?",
          answer: "체크인 시 예약자 본인의 신분증(주민등록증, 운전면허증, 여권 등)이 반드시 필요합니다. 미성년자의 경우 보호자 동반 시에만 체크인이 가능하며, 법정대리인 동의서가 필요할 수 있습니다."
        },
        {
          question: "짐 보관 서비스가 있나요?",
          answer: "체크인 전이나 체크아웃 후에도 무료로 짐을 보관해 드립니다. 프런트 데스크에 맡겨주시면 안전하게 보관되며, 운영시간 내에 언제든 찾아가실 수 있습니다."
        },
        {
          question: "반려동물과 함께 투숙할 수 있나요?",
          answer: "죄송하지만 Haven Stay는 반려동물과 함께 투숙하실 수 없습니다. 다른 고객들의 편안한 휴식을 위한 정책이오니 양해 부탁드립니다. 인근에 반려동물 전문 호텔을 안내해 드릴 수 있습니다."
        }
      ]
    },
    {
      id: "facilities",
      title: "시설 및 서비스",
      icon: "🛎️",
      color: "sunset",
      questions: [
        {
          question: "WiFi는 무료인가요?",
          answer: "모든 객실과 공용 공간에서 고속 WiFi를 무료로 제공합니다. 접속 정보는 체크인 시 안내해 드리며, 24시간 안정적인 인터넷 서비스를 이용하실 수 있습니다."
        },
        {
          question: "주차장이 있나요?",
          answer: "무료 주차장을 운영하고 있으며, 총 50대 주차가 가능합니다. 성수기에는 주차 공간이 부족할 수 있으니 미리 문의해 주시기 바랍니다. 전기차 충전시설도 3대 설치되어 있습니다."
        },
        {
          question: "스파 시설은 언제 이용할 수 있나요?",
          answer: "스파 시설은 오전 8시부터 오후 10시까지 운영됩니다. 프라이빗 스파는 사전 예약이 필수이며, 공용 사우나는 별도 예약 없이 이용 가능합니다. 월요일은 정기 휴관일입니다."
        },
        {
          question: "조식은 포함되어 있나요?",
          answer: "객실 요금에 조식이 포함된 패키지와 포함되지 않은 패키지가 있습니다. 조식은 오전 7시부터 10시까지 레스토랑에서 제공되며, 현지 유기농 식재료로 만든 건강한 메뉴를 선보입니다."
        }
      ]
    },
    {
      id: "activities",
      title: "액티비티 & 프로그램",
      icon: "🧘‍♀️",
      color: "lavender",
      questions: [
        {
          question: "체험 프로그램은 별도 예약이 필요한가요?",
          answer: "모든 체험 프로그램은 사전 예약이 필요합니다. 프런트 데스크나 전화를 통해 예약하실 수 있으며, 일부 인기 프로그램은 조기 마감될 수 있으니 일찍 예약해 주시기 바랍니다."
        },
        {
          question: "요가 프로그램에 초보자도 참여할 수 있나요?",
          answer: "모든 수준의 참가자를 환영합니다. 초급, 중급, 고급 클래스로 나누어 운영하며, 처음 참여하시는 분들도 전문 강사의 세심한 지도를 받으실 수 있습니다. 요가 매트와 소품은 모두 제공됩니다."
        },
        {
          question: "날씨가 나쁘면 야외 프로그램은 어떻게 되나요?",
          answer: "안전을 위해 기상 상황에 따라 야외 프로그램이 취소될 수 있습니다. 이 경우 실내 대체 프로그램을 제공하거나 100% 환불해 드립니다. 날씨로 인한 변경사항은 사전에 안내해 드립니다."
        },
        {
          question: "프로그램 참가비용은 별도인가요?",
          answer: "객실 투숙객에게는 대부분의 기본 프로그램이 무료로 제공됩니다. 일부 프리미엄 프로그램(개인 마사지, 요리 클래스 등)은 별도 비용이 발생하며, 자세한 요금표는 체크인 시 안내해 드립니다."
        }
      ]
    },
    {
      id: "location",
      title: "위치 & 교통",
      icon: "📍",
      color: "sage",
      questions: [
        {
          question: "서울에서 어떻게 오나요?",
          answer: "서울에서 자차로 약 2시간 30분 소요됩니다. KTX 진부(평창)역에서 택시로 20분 거리이며, 셔틀버스 서비스도 제공합니다(사전 예약 필수). 고속버스 터미널에서도 픽업 서비스가 가능합니다."
        },
        {
          question: "대중교통으로 접근이 가능한가요?",
          answer: "진부(평창)역에서 시내버스를 이용하시거나 택시(약 20분)를 이용하실 수 있습니다. 사전 요청 시 역에서 Haven Stay까지 셔틀 서비스를 제공해 드립니다(편도 15,000원)."
        },
        {
          question: "근처에 편의점이나 마트가 있나요?",
          answer: "Haven Stay에서 차로 10분 거리에 편의점과 소규모 마트가 있습니다. 필수품은 숙소 내 매점에서도 구매 가능하며, 미리 필요한 물품이 있으시면 직원에게 요청해 주시면 도움을 드립니다."
        },
        {
          question: "근처 관광지는 어디가 있나요?",
          answer: "오대산 국립공원(30분), 평창 올림픽파크(15분), 월정사(25분), 대관령 양떼목장(20분) 등이 인근에 있습니다. 관광지 입장권 할인이나 투어 프로그램도 문의해 주시면 안내해 드립니다."
        }
      ]
    },
    {
      id: "general",
      title: "기타 문의",
      icon: "💡",
      color: "rose",
      questions: [
        {
          question: "특별한 기념일 서비스가 있나요?",
          answer: "생일, 기념일, 허니문 등 특별한 날을 위한 서비스를 제공합니다. 케이크, 꽃 장식, 샴페인 서비스 등을 준비해 드리며, 예약 시 미리 알려주시면 특별한 추억을 만들어 드립니다."
        },
        {
          question: "장애인 편의시설이 있나요?",
          answer: "휠체어 이용객을 위한 경사로, 전용 화장실, 승강기 등의 편의시설을 갖추고 있습니다. 특별한 도움이 필요하신 경우 사전에 알려주시면 최선을 다해 도움을 드리겠습니다."
        },
        {
          question: "아이와 함께 가도 괜찮나요?",
          answer: "Family Cabin에는 키즈존이 마련되어 있으며, 아이들을 위한 다양한 프로그램도 운영합니다. 유아용 침대, 의자 등의 물품도 무료로 대여 가능하니 사전에 요청해 주시기 바랍니다."
        },
        {
          question: "흡연이 가능한가요?",
          answer: "Haven Stay는 전 구역 금연입니다. 흡연을 원하실 경우 야외 지정 흡연구역을 이용해 주시기 바랍니다. 객실 내 흡연 시 청소비(20만원)가 부과될 수 있습니다."
        }
      ]
    }
  ]

  const contactMethods = [
    {
      title: "전화 문의",
      icon: "📞",
      info: "033-123-4567",
      description: "운영시간: 09:00 - 18:00",
      color: "ocean"
    },
    {
      title: "이메일 문의",
      icon: "📧",
      info: "info@havenstay.co.kr",
      description: "24시간 내 답변 드립니다",
      color: "forest"
    },
    {
      title: "실시간 채팅",
      icon: "💬",
      info: "웹사이트 우하단",
      description: "즉시 상담 가능",
      color: "sunset"
    },
    {
      title: "카카오톡",
      icon: "💛",
      info: "@HavenStay",
      description: "편리한 모바일 상담",
      color: "lavender"
    }
  ]

  const helpfulTips = [
    {
      title: "체크인 전 준비사항",
      tips: [
        "신분증 지참 필수",
        "예약 확인서 준비",
        "특별 요청사항 사전 연락",
        "교통편 미리 확인"
      ],
      icon: "✅",
      color: "forest"
    },
    {
      title: "짐 싸기 팁",
      tips: [
        "편안한 운동복 (요가/트레킹용)",
        "선크림 및 모자",
        "개인 세면용품 (친환경 제품 권장)",
        "카메라 (아름다운 풍경 촬영)"
      ],
      icon: "🎒",
      color: "ocean"
    },
    {
      title: "추천 일정",
      tips: [
        "1일차: 체크인 후 스파 이용",
        "2일차: 일출 요가 + 숲속 트레킹",
        "3일차: 전통 차 체험 + 명상",
        "항상: 자연과 함께하는 시간"
      ],
      icon: "📋",
      color: "sunset"
    }
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="Haven Stay - 자주 묻는 질문"
            fill
            className="object-cover object-center scale-105 animate-parallax"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-lavender-900/80 via-ocean-800/70 to-sage-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 section-container text-center text-white">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-lg text-xl font-medium tracking-wider shadow-2xl animate-glow">
              <span className="text-lavender-300">❓</span>
              <span className="font-display">FAQ</span>
              <span className="text-lavender-300">❓</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white leading-none animate-reveal">
              <span className="block animate-slide-in-left">궁금한 모든 것</span>
              <span className="block bg-gradient-to-r from-lavender-300 via-ocean-200 to-sage-300 bg-clip-text text-transparent animate-shimmer bg-300% bg-[length:200%_100%]">
                해결해드려요
              </span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/95 tracking-wide font-display animate-slide-in-right" style={{animationDelay: '0.3s'}}>
              Haven Stay 이용에 관한
              <br />
              <span className="text-lavender-200">모든 궁금증을 풀어드립니다</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-lavender-300 mb-2 animate-bounce-gentle">6</div>
                <div className="text-sm text-white/70 tracking-wide">카테고리</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-ocean-300 mb-2 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>24</div>
                <div className="text-sm text-white/70 tracking-wide">자주 묻는 질문</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-sage-300 mb-2 animate-bounce-gentle" style={{animationDelay: '1s'}}>24/7</div>
                <div className="text-sm text-white/70 tracking-wide">고객 지원</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-sunset-300 mb-2 animate-bounce-gentle" style={{animationDelay: '1.5s'}}>즉시</div>
                <div className="text-sm text-white/70 tracking-wide">답변</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section className="section-padding bg-gradient-to-br from-cream-50 via-sand-50 to-nude-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-lavender-100 text-lavender-700 text-lg font-medium tracking-wider mb-8">
                <span>―</span>
                <span className="font-display">FAQ CATEGORIES</span>
                <span>―</span>
              </div>
              
              <h2 className="section-title text-stone-800 mb-8">
                카테고리별로 찾는
                <br />
                <span className="bg-gradient-to-r from-lavender-600 to-ocean-600 bg-clip-text text-transparent">
                  자주 묻는 질문
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {faqCategories.map((category, index) => (
                <div key={category.id} className="group animate-zoom-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`card p-6 lg:p-8 hover:shadow-glow-${category.color} transition-all duration-500 hover:-translate-y-2 bg-white text-center cursor-pointer`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                      category.color === 'ocean' ? 'from-ocean-400 to-ocean-600' :
                      category.color === 'forest' ? 'from-forest-400 to-forest-600' :
                      category.color === 'sunset' ? 'from-sunset-400 to-sunset-600' :
                      category.color === 'lavender' ? 'from-lavender-400 to-lavender-600' :
                      category.color === 'sage' ? 'from-sage-400 to-sage-600' :
                      'from-rose-400 to-rose-600'
                    } flex items-center justify-center text-2xl shadow-soft group-hover:scale-110 transition-transform duration-300 animate-pulse-color`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-stone-800 mb-2">
                      {category.title}
                    </h3>
                    
                    <p className="text-stone-600 text-sm">
                      {category.questions.length}개의 질문
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-forest-50 to-earth-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.id} className="animate-fade-in-up" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    category.color === 'ocean' ? 'from-ocean-400 to-ocean-600' :
                    category.color === 'forest' ? 'from-forest-400 to-forest-600' :
                    category.color === 'sunset' ? 'from-sunset-400 to-sunset-600' :
                    category.color === 'lavender' ? 'from-lavender-400 to-lavender-600' :
                    category.color === 'sage' ? 'from-sage-400 to-sage-600' :
                    'from-rose-400 to-rose-600'
                  } flex items-center justify-center text-xl shadow-soft`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-stone-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group animate-slide-in-left" style={{animationDelay: `${faqIndex * 0.1}s`}}>
                      <summary className="card p-6 cursor-pointer hover:shadow-soft-xl transition-all duration-300 bg-white list-none">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-stone-800 pr-4">
                            {faq.question}
                          </h4>
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                            category.color === 'ocean' ? 'from-ocean-400 to-ocean-600' :
                            category.color === 'forest' ? 'from-forest-400 to-forest-600' :
                            category.color === 'sunset' ? 'from-sunset-400 to-sunset-600' :
                            category.color === 'lavender' ? 'from-lavender-400 to-lavender-600' :
                            category.color === 'sage' ? 'from-sage-400 to-sage-600' :
                            'from-rose-400 to-rose-600'
                          } flex items-center justify-center text-white font-bold text-lg shadow-soft group-open:rotate-45 transition-transform duration-300`}>
                            +
                          </div>
                        </div>
                      </summary>
                      <div className="card mt-2 p-6 bg-white/50 backdrop-blur-sm">
                        <p className="text-stone-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-to-br from-ocean-50 via-lavender-50 to-rose-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ocean-100 text-ocean-700 text-lg font-medium tracking-wider mb-8">
                <span>―</span>
                <span className="font-display">CONTACT US</span>
                <span>―</span>
              </div>
              
              <h2 className="section-title text-stone-800 mb-8">
                답을 찾지 못하셨나요?
                <br />
                <span className="bg-gradient-to-r from-ocean-600 to-lavender-600 bg-clip-text text-transparent">
                  언제든 문의해주세요
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="group animate-flip" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`card p-6 lg:p-8 hover:shadow-glow-${method.color} transition-all duration-500 hover:-translate-y-2 bg-white text-center cursor-pointer`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                      method.color === 'ocean' ? 'from-ocean-400 to-ocean-600' :
                      method.color === 'forest' ? 'from-forest-400 to-forest-600' :
                      method.color === 'sunset' ? 'from-sunset-400 to-sunset-600' :
                      'from-lavender-400 to-lavender-600'
                    } flex items-center justify-center text-2xl shadow-soft group-hover:scale-110 transition-transform duration-300 animate-heart-beat`}>
                      {method.icon}
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-stone-800 mb-2">
                      {method.title}
                    </h3>
                    
                    <p className="text-lg font-semibold text-stone-700 mb-1">
                      {method.info}
                    </p>
                    
                    <p className="text-stone-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Tips */}
      <section className="section-padding bg-gradient-to-br from-earth-50 via-nude-50 to-sand-50">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-earth-100 text-earth-700 text-lg font-medium tracking-wider mb-8">
                <span>―</span>
                <span className="font-display">HELPFUL TIPS</span>
                <span>―</span>
              </div>
              
              <h2 className="section-title text-stone-800 mb-8">
                더 나은 경험을 위한
                <br />
                <span className="bg-gradient-to-r from-earth-600 to-sunset-600 bg-clip-text text-transparent">
                  유용한 팁들
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {helpfulTips.map((tip, index) => (
                <div key={index} className="group animate-rotate-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="card p-8 hover:shadow-soft-xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${
                      tip.color === 'forest' ? 'from-forest-400 to-forest-600' :
                      tip.color === 'ocean' ? 'from-ocean-400 to-ocean-600' :
                      'from-sunset-400 to-sunset-600'
                    } flex items-center justify-center text-2xl shadow-soft group-hover:scale-110 transition-transform duration-300 animate-swing`}>
                      {tip.icon}
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-stone-800 mb-6">
                      {tip.title}
                    </h3>
                    
                    <div className="space-y-3">
                      {tip.tips.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-sage-500 text-lg mt-0.5">✓</span>
                          <span className="text-stone-600 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
            alt="Haven Stay에서 특별한 경험을"
            fill
            className="object-cover object-center scale-105 animate-parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-lavender-900/80 via-ocean-800/70 to-sage-900/80"></div>
        </div>

        <div className="relative z-10 section-container text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-none">
              모든 준비가
              <br />
              <span className="bg-gradient-to-r from-lavender-300 to-ocean-300 bg-clip-text text-transparent animate-shimmer bg-300% bg-[length:200%_100%]">
                완료되었습니다
              </span>
            </h2>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
              이제 Haven Stay에서 특별한 휴식을 경험해보세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                href="/booking"
                className="group relative inline-flex items-center px-12 py-5 bg-lavender-600 text-white rounded-2xl font-bold text-xl hover:bg-lavender-700 transition-all duration-500 shadow-2xl hover:shadow-glow-lavender hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-lavender-500 to-ocean-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-3">
                  지금 예약하기
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-4 bg-white/15 backdrop-blur-lg text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl"
              >
                더 궁금한 점이 있나요?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 