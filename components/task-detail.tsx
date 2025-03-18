"use client"

import Image from "next/image"
import Header from "@/components/header"

interface TaskDetailProps {
  onBack: () => void
  taskId?: number
}

export default function TaskDetail({ onBack, taskId = 1 }: TaskDetailProps) {
  // This would normally fetch task data based on taskId
  // For now we'll hardcode the data to match the image

  return (
    <div className="min-h-screen bg-[#fafafb]" dir="rtl">
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-xl px-6 py-8">
        {/* Back Button */}
        <button onClick={onBack} className="mb-6 flex items-center text-[#6d798e]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          العودة للوحة المهام
        </button>

        {/* Task Image */}
        <div className="mb-6">
          <Image
            src="/img-show.png"
            alt="Task Illustration"
            width={600}
            height={300}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        {/* Task Title */}
        <h1 className="mb-6 text-center text-2xl font-bold text-[#0a2540]">إنشاء عرض تقديمي للمستثمرين</h1>

        {/* Priority */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center">
            <div className="ml-2 h-5 w-5 rounded-full bg-[#d94c4c]"></div>
            <span className="text-[#8696ab] font-medium">الأولوية: عالية</span>
          </div>
        </div>

        {/* Task Details */}
        <div className="space-y-6">
          {/* Responsible Person */}
          <div className="space-y-2">
            <label className="block text-lg text-[#8696ab] text-right">المسؤول عن اتمام المهمة</label>
            <div className="rounded-md border border-[#e2e4e7] text-gray-600 bg-white p-3 text-right">سارة ياسر</div>
          </div>

          {/* Expected Delivery Date */}
          <div className="space-y-2">
            <label className="block text-lg text-[#8696ab] text-right">تاريخ التسليم المتوقع</label>
            <div className="rounded-md border border-[#e2e4e7] text-gray-600 bg-white p-3 text-right">March 30, 2025</div>
          </div>

          {/* Completion Percentage */}
          <div className="space-y-2">
            <label className="block text-lg text-[#8696ab] text-right">نسبة الإنجاز</label>
            <div className="rounded-md border border-[#e2e4e7] bg-white p-3">
              <div className="h-4 w-full rounded-full bg-gray-200">
                <div className="h-full w-[40%] rounded-full bg-[#6fc4fc]"></div>
              </div>
            </div>
          </div>

          {/* Task Details */}
          <div className="space-y-2">
            <label className="block text-lg text-[#8696ab] text-right">تفاصيل المهمة</label>
            <div className="rounded-md border border-[#e2e4e7] bg-white p-4 text-right text-[#172b4d] leading-relaxed">
              <p>
                إعداد عرض تقديمي احترافي لجذب المستثمرين، يتضمن معلومات عن المشروع، السوق المستهدف، ونموذج العمل،
                بالإضافة إلى التوقعات المالية والخطط المستقبلية.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

