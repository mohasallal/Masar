"use client";

import { ChevronLeft } from "lucide-react";
import Header from "@/components/header";

interface ResultsScreenProps {
  onViewSummary: () => void;
}

export default function ResultsScreen({ onViewSummary }: ResultsScreenProps) {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col" dir="rtl">
      <Header />

      {/* Results Content */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#0a2540] mb-4">
              خطة عملك جاهزة
            </h1>
            <p className="text-xl text-[#8696ab]">
              هذه هي خطتك المصممة خصيصًا لتناسب أهدافك ومواردك
            </p>
          </div>

          {/* Executive Summary Section */}
          <div className="bg-[#0a2540] rounded-xl p-8 mb-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">الملخص التنفيذي</h2>
            <p className="mb-8 text-xl  flex flex-wrap w-full flex-col">
              {" "}
              <span> جهزنا لك وصفًا موجزًا لفكرة </span>
              <span>مشروعك وأهم أهدافه</span>{" "}
            </p>
            <button
              className="bg-white text-[#0a2540] rounded-full text-xl px-14 py-3 font-medium flex items-center mx-auto"
              onClick={onViewSummary}
            >
              <ChevronLeft className="h-5 w-5  ml-1" />
              شاهد الملخص كاملًا
            </button>
          </div>

          {/* Market Analysis Section */}
          <div className="bg-[#0a2540] rounded-xl p-8 mb-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">تحليل السوق</h2>
            {/* <p className="mb-8">
            </p> */}
            <p className="mb-8 text-xl  flex flex-wrap w-full flex-col">
              {" "}
              <span>  وصف للسوق المستهدف , احتياجات</span>
              <span> العملاء، والمنافسين
              </span>{" "}
            </p>
            <button
              className="bg-white text-[#0a2540] rounded-full text-xl px-14 py-3 font-medium flex items-center mx-auto"
              onClick={onViewSummary}
            >
              <ChevronLeft className="h-5 w-5 ml-1" />
              شاهد الملخص كاملًا
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
