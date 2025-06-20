"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"

const rooms = [
  { id: 1, name: "Forest Suite", price: 180000, type: "Suite" },
  { id: 2, name: "Garden View", price: 150000, type: "Deluxe" },
  { id: 3, name: "Minimalist Retreat", price: 120000, type: "Standard" },
  { id: 4, name: "Nature's Embrace", price: 200000, type: "Premium" },
  { id: 5, name: "Cozy Corner", price: 110000, type: "Standard" },
  { id: 6, name: "Skylight Sanctuary", price: 170000, type: "Deluxe" },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState<null | typeof rooms[0]>(null)
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    name: "",
    email: "",
    phone: "",
    requests: ""
  })

  const calculateNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0
    const checkIn = new Date(bookingData.checkIn)
    const checkOut = new Date(bookingData.checkOut)
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const getTotalPrice = () => {
    if (!selectedRoom) return 0
    return selectedRoom.price * calculateNights()
  }

  const handleInputChange = (field: string, value: string | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // 실제 예약 처리 로직
    alert("예약이 완료되었습니다! 확인 이메일을 발송해드렸습니다.")
  }

  return (
    <div className="min-h-screen bg-sand-50">
      <Container>
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-700 mb-4">
              예약하기
            </h1>
            <p className="text-lg text-gray-600">
              편안한 휴식을 위한 완벽한 공간을 예약해보세요
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNum
                        ? "bg-olive-400 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {stepNum}
                  </div>
                  <span
                    className={`ml-2 text-sm ${
                      step >= stepNum ? "text-olive-600" : "text-gray-500"
                    }`}
                  >
                    {stepNum === 1 && "날짜 선택"}
                    {stepNum === 2 && "객실 선택"}
                    {stepNum === 3 && "정보 입력"}
                  </span>
                  {stepNum < 3 && (
                    <div className="w-16 h-px bg-gray-300 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Date Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>날짜 및 인원 선택</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            체크인
                          </label>
                          <Input
                            type="date"
                            value={bookingData.checkIn}
                            onChange={(e) => handleInputChange("checkIn", e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            체크아웃
                          </label>
                          <Input
                            type="date"
                            value={bookingData.checkOut}
                            onChange={(e) => handleInputChange("checkOut", e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          인원
                        </label>
                        <select
                          className="w-full p-2 border border-sand-200 rounded-md"
                          value={bookingData.guests}
                          onChange={(e) => handleInputChange("guests", parseInt(e.target.value))}
                        >
                          {[1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num}명</option>
                          ))}
                        </select>
                      </div>
                      <Button
                        onClick={() => setStep(2)}
                        disabled={!bookingData.checkIn || !bookingData.checkOut}
                        className="w-full"
                      >
                        다음 단계
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Room Selection */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>객실 선택</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {rooms.map((room) => (
                          <div
                            key={room.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              selectedRoom?.id === room.id
                                ? "border-olive-400 bg-olive-50"
                                : "border-sand-200 hover:border-sand-300"
                            }`}
                            onClick={() => setSelectedRoom(room)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-serif text-lg font-semibold text-gray-700">
                                  {room.name}
                                </h3>
                                <p className="text-sm text-gray-500">{room.type}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-olive-600">
                                  {room.price.toLocaleString()}원
                                </p>
                                <p className="text-sm text-gray-500">/ 박</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-6">
                        <Button variant="outline" onClick={() => setStep(1)}>
                          이전
                        </Button>
                        <Button
                          onClick={() => setStep(3)}
                          disabled={!selectedRoom}
                          className="flex-1"
                        >
                          다음 단계
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: Guest Information */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>예약자 정보</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이름
                        </label>
                        <Input
                          value={bookingData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="성함을 입력해주세요"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이메일
                        </label>
                        <Input
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="이메일 주소를 입력해주세요"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          전화번호
                        </label>
                        <Input
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="전화번호를 입력해주세요"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          특별 요청사항
                        </label>
                        <textarea
                          className="w-full p-3 border border-sand-200 rounded-md h-24"
                          value={bookingData.requests}
                          onChange={(e) => handleInputChange("requests", e.target.value)}
                          placeholder="특별히 요청하실 사항이 있으시면 입력해주세요"
                        />
                      </div>
                      <div className="flex space-x-4">
                        <Button variant="outline" onClick={() => setStep(2)}>
                          이전
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                          className="flex-1"
                        >
                          예약 완료
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>예약 요약</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {step >= 1 && bookingData.checkIn && bookingData.checkOut && (
                      <div>
                        <p className="text-sm text-gray-600">체크인</p>
                        <p className="font-medium">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600 mt-2">체크아웃</p>
                        <p className="font-medium">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600 mt-2">인원</p>
                        <p className="font-medium">{bookingData.guests}명</p>
                        <p className="text-sm text-gray-600 mt-2">숙박일수</p>
                        <p className="font-medium">{calculateNights()}박</p>
                      </div>
                    )}
                    
                    {step >= 2 && selectedRoom && (
                      <div className="border-t border-sand-200 pt-4">
                        <p className="text-sm text-gray-600">선택한 객실</p>
                        <p className="font-medium">{selectedRoom.name}</p>
                        <p className="text-sm text-gray-500">{selectedRoom.type}</p>
                        <p className="text-sm text-gray-600 mt-2">1박 요금</p>
                        <p className="font-medium">{selectedRoom.price.toLocaleString()}원</p>
                      </div>
                    )}
                    
                    {step >= 2 && selectedRoom && calculateNights() > 0 && (
                      <div className="border-t border-sand-200 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg">총 요금</span>
                          <span className="font-semibold text-lg text-olive-600">
                            {getTotalPrice().toLocaleString()}원
                          </span>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
} 