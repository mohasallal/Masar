"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Header from "@/components/header";
import { useRouter } from 'next/navigation';

interface Task {
  id: number;
  title: string;
  date: string;
  image: string;
  illustration: string;
  subtitle?: string;
  images?: string[];
  progress?: number;
  status: "new" | "inProgress" | "archive";
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<"new" | "inProgress" | "archive">("new");
  const router = useRouter();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const mappedTasks = storedTasks.map((title: string, index: number) => ({
      id: index + 1,
      title: title,
      date: "MAY 30, 2025",
      image: "/sarah.png",
      illustration: "/img-show.png",
      status: "new",
    }));
    setTasks(mappedTasks);
  }, []);

  const updateTaskStatus = (id: number, status: "new" | "inProgress" | "archive") => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
  };

  const navigateToTaskDetails = (task: Task) => {
    router.push(`/task-details?task=${encodeURIComponent(JSON.stringify(task))}`);
  };

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

        {/* Tasks */}
        <div className="space-y-6">
          {tasks
            .filter(task => task.status === activeTab)
            .map((task) => (
              <div
                key={task.id}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm cursor-pointer"
                onClick={() => navigateToTaskDetails(task)}
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
                <div className="flex justify-around p-4 border-t border-gray-100">
                  {task.status === "new" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // منع انتقال الحدث إلى العنصر الأب
                        updateTaskStatus(task.id, "inProgress");
                      }}
                      className="bg-[#6fc4fc] text-white px-4 py-2 rounded-full text-sm"
                    >
                      قيد التنفيذ
                    </button>
                  )}
                  {task.status === "inProgress" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // منع انتقال الحدث إلى العنصر الأب
                        updateTaskStatus(task.id, "archive");
                      }}
                      className="bg-gray-400 text-white px-4 py-2 rounded-full text-sm"
                    >
                      أرشيف
                    </button>
                  )}
                  {task.status === "inProgress" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // منع انتقال الحدث إلى العنصر الأب
                        updateTaskStatus(task.id, "new");
                      }}
                      className="bg-green-500 text-white px-4 py-2 rounded-full text-sm"
                    >
                      جديد
                    </button>
                  )}
                </div>
                <div className="h-2 bg-[#6ea5ca]"></div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}