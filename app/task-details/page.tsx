"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import Header from "@/components/header";

const TaskDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const task = JSON.parse(decodeURIComponent(searchParams.get('task') || '{}'));

  if (!task) {
    return <p>مهمة غير صالحة.</p>;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white text-black" dir="rtl">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
        <div className="text-center">
          <Image
            src={task.illustration || "/placeholder.svg"}
            alt={task.title}
            width={400}
            height={200}
            className="h-auto w-full rounded-lg object-cover mb-4"
          />
          <h1 className="text-2xl font-bold text-[#0a2540] mb-4">{task.title}</h1>
          <div className="mb-4">
            <span className="font-semibold">الأولوية: </span>
            <span className="text-red-500">عالية</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">المسؤول عن إتمام المهمة: </span>
            <span>{task.image === "/sarah.png" ? "سارة بامبر" : "غير محدد"}</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">تاريخ التسليم المتوقع: </span>
            <span>{task.date}</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">نسبة الإنجاز: </span>
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${task.progress || 0}%` }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-semibold">تفاصيل المهمة: </span>
            <p className="text-gray-700">
              إعداد عرض تقديمي احترافي لجذب المستثمرين، يتضمن معلومات عن المشروع، السوق المستهدفة، ونموذج العمل. بالإضافة إلى التوقعات المالية والخطط المستقبلية.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskDetails;