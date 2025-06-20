export const metadata = {
  title: "Haven Stay - 조용한 하루가 필요할 때",
  description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.",
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Haven Stay</h1>
        <p className="text-lg text-stone-600 mb-8">조용한 하루가 필요할 때</p>
        <div className="space-x-4">
          <a
            href="/rooms"
            className="inline-block px-6 py-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors"
          >
            객실 보기
          </a>
          <a
            href="/about"
            className="inline-block px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
          >
            소개
          </a>
        </div>
      </div>
    </div>
  )
}
