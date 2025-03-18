"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import Header from "@/components/header"

interface DashboardProps {
  onTaskClick: (taskId: number) => void
}

export default function Dashboard({ onTaskClick }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<"new" | "inProgress" | "archive">("new")

  const newTasks = [
    {
      id: 1,
      title: "إنشاء عرض تقديمي للمستثمرين",
      date: "MARCH 30, 2025",
      image: "/sarah.png",
      illustration: "/img-show.png",
    },
    {
      id: 2,
      title: "اقتراح نموذج تسعير",
      date: "MAY 30, 2025",
      image: "/omar.png",
      illustration: "/img-cash.png",
    },
    {
      id: 3,
      title: "إطلاق الحملة الإعلانية الأولى",
      date: "MAY 30, 2025",
      image: "/montaser.png",
      illustration: "/img-mik.png",
    },
  ]

  const inProgressTasks = [
    {
      id: 1,
      title: "تصميم نموذج أولي للمنتج",
      subtitle: "إنشاء Wireframe باستخدام أدوات التصميم",
      date: "JULY 29, 2025",
      images: ["/montaser.png", "/mohammad.png"],
      progress: 70,
    },
    {
      id: 2,
      title: "إطلاق الحملة الإعلانية الأولى",
      subtitle: "نشر أول حملة تسويقية على وسائل التواصل الاجتماعي",
      date: "JULY 29, 2025",
      images: ["/mohammad.png", "/omar.png"],
      progress: 50,
    },
  ]

  const archivedTasks = [
    {
      id: 1,
      title: "إغلاق الحملة الإعلانية الثانية",
      date: "JANUARY 20, 2025",
      image: "/sarah.png",
      illustration: "/img-show.png",
    },
    {
      id: 2,
      title: "إعداد تقرير الأداء",
      date: "FEBRUARY 15, 2025",
      image: "/omar.png",
      illustration: "/img-cash.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafb]" dir="rtl">
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-xl px-6 py-8">
        {/* Tabs */}
        <div className="mb-8 flex items-center gap-10 justify-center space-x-6 space-x-reverse">
          <button
            className={`pb-2 text-lg font-medium ${activeTab === "new" ? "border-b-2 border-[#6fc4fc] text-[#0a2540]" : "text-[#6d798e]"}`}
            onClick={() => setActiveTab("new")}
          >
            المهام الجديدة
          </button>
          <button
            className={`pb-2 text-lg font-medium ${activeTab === "inProgress" ? "border-b-2 border-[#6fc4fc] text-[#0a2540]" : "text-[#6d798e]"}`}
            onClick={() => setActiveTab("inProgress")}
          >
            قيد التنفيذ
          </button>
          <button
            className={`pb-2 text-lg font-medium ${activeTab === "archive" ? "border-b-2 border-[#6fc4fc] text-[#0a2540]" : "text-[#6d798e]"}`}
            onClick={() => setActiveTab("archive")}
          >
            أرشيف
          </button>
        </div>

        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#0a2540]">
            {activeTab === "new" ? "لوحة كانبان الخاصة بك" : activeTab === "inProgress" ? "قيد التنفيذ" : "الأرشيف"}
          </h1>
          {activeTab === "new" && <p className="text-[#6d798e] text-xl">المهام الجديدة</p>}
        </div>

        {/* New Tasks */}
        {activeTab === "new" && (
          <div className="space-y-6">
            {newTasks.map((task) => (
              <div
                key={task.id}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm cursor-pointer transition-transform hover:scale-[1.01]"
                onClick={() => onTaskClick(task.id)}
              >
                <div className="p-4">
                  <div className="mb-4">
                    <Image
                      src={task.illustration || "/placeholder.svg"}
                      alt={task.title}
                      width={400}
                      height={200}
                      className="h-auto w-full rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-center text-lg font-medium text-[#0a2540]">{task.title}</h3>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={task.image || "/placeholder.svg"}
                        alt="User"
                        width={24}
                        height={24}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6d798e]">
                      <span>{task.date}</span>
                      <Calendar className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-[#6ea5ca]"></div>
              </div>
            ))}
          </div>
        )}

        {/* In Progress Tasks */}
        {activeTab === "inProgress" && (
          <div className="space-y-10">
            {inProgressTasks.map((task) => (
              <div key={task.id} className="space-y-3 cursor-pointer" onClick={() => onTaskClick(task.id)}>
                <h3 className="text-2xl font-medium text-[#0a2540] text-center">{task.title}</h3>
                <p className="text-center text-[#6d798e]">{task.subtitle}</p>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex -space-x-2 space-x-reverse">
                    {task.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img || "/placeholder.svg"}
                        alt="User"
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6d798e]">
                    <span>{task.date}</span>
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>

                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#6fc4fc] to-[#0a2540]"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Archived Tasks */}
        {activeTab === "archive" && (
          <div className="space-y-6">
            {archivedTasks.map((task) => (
              <div
                key={task.id}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm cursor-pointer transition-transform hover:scale-[1.01]"
                onClick={() => onTaskClick(task.id)}
              >
                <div className="p-4">
                  <div className="mb-4">
                    <Image
                      src={task.illustration || "/placeholder.svg"}
                      alt={task.title}
                      width={400}
                      height={200}
                      className="h-auto w-full rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-center text-lg font-medium text-[#0a2540]">{task.title}</h3>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={task.image || "/placeholder.svg"}
                        alt="User"
                        width={24}
                        height={24}
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6d798e]">
                      <span>{task.date}</span>
                      <Calendar className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-[#6ea5ca]"></div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
