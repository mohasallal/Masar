import Header from "@/components/header"

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col" dir="rtl">
      <Header />

      {/* Loading Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold text-[#0a2540] mb-4">جارِ تجهيز خطتك...</h1>
          <p className="text-xl text-[#8696ab] mb-16">نقوم بتحليل بيانات مشروعك لإنشاء خطة عمل متكاملة تناسب احتياجك</p>

          {/* Loading Animation */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-3 gap-4">
              <div className="w-10 h-10 rounded-full bg-[#6fc4fc] animate-pulse"></div>
              <div className="w-10 h-10 rounded-full bg-[#0a2540] animate-pulse delay-100"></div>
              <div className="w-10 h-10 rounded-full bg-[#6fc4fc] animate-pulse delay-200"></div>
              <div className="w-10 h-10 rounded-full bg-[#0a2540] animate-pulse delay-300"></div>
              <div className="w-10 h-10 rounded-full bg-[#6fc4fc] animate-pulse delay-400"></div>
              <div className="w-10 h-10 rounded-full bg-[#0a2540] animate-pulse delay-500"></div>
              <div className="w-10 h-10 rounded-full bg-[#6fc4fc] animate-pulse delay-600"></div>
              <div className="w-10 h-10 rounded-full bg-[#0a2540] animate-pulse delay-700"></div>
            </div>
          </div>

          <p className="text-2xl font-medium text-[#0a2540]">
            تحلَ بالصبر...الإبداع يستغرق بعض الوقت!
            <br />
            نحن نصنع لك شيئًا مميزًا...
          </p>
        </div>
      </main>
    </div>
  )
}

