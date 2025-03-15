"use client"

import { ChevronLeft } from "lucide-react"
import Header from "@/components/header"

interface ResultsScreenProps {
  onViewSummary: () => void
}

export default function ResultsScreen({ onViewSummary }: ResultsScreenProps) {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col" dir="rtl">
      <Header />

      {/* Results Content */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#0a2540] mb-4">خطة عملك جاهزة</h1>
            <p className="text-lg text-[#8696ab]">هذه هي خطتك المصممة خصيصًا لتناسب أهدافك ومواردك</p>
          </div>

          {/* Executive Summary Section */}
          <div className="bg-[#0a2540] rounded-lg p-8 mb-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-6">الملخص التنفيذي</h2>
            <p className="mb-8">جهزنا لك وصفًا موجزًا لفكرة مشروعك وأهم أهدافه</p>
            <button
              className="bg-white text-[#0a2540] rounded-full px-6 py-3 font-medium flex items-center mx-auto"
              onClick={onViewSummary}
            >
              <ChevronLeft className="h-5 w-5 ml-1" />
              شاهد الملخص كاملًا
            </button>
          </div>

          {/* Market Analysis Section */}
          <div className="bg-[#0a2540] rounded-lg p-8 mb-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-6">تحليل السوق</h2>
            <p className="mb-8">وصف للسوق المستهدف، احتياجات العملاء، والمنافسين</p>
            <button
              className="bg-white text-[#0a2540] rounded-full px-6 py-3 font-medium flex items-center mx-auto"
              onClick={onViewSummary}
            >
              <ChevronLeft className="h-5 w-5 ml-1" />
              شاهد الملخص كاملًا
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

