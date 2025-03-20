"use client";

import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import LoadingScreen from "@/components/loading-screen";
import { useRouter } from 'next/navigation';
import Header from "./header";
import { IoIosArrowDropleftCircle } from "react-icons/io";

interface PlanDisplayProps {
  onViewSummary   ?: () => void;
}

const PlanDisplay: React.FC<PlanDisplayProps> = ({ onViewSummary }) => {
  const [planData, setPlanData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPlan = async () => {
      if (!process.env.NEXT_PUBLIC_API_KEY) {
        console.error("API_KEY is not set");
        setError("API_KEY غير مضبوطة.");
        setLoading(false);
        return;
      }

      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `
You are an expert marketing and business strategy consultant. Based on the following user input:
- **Business type**: متجر إلكتروني
- **Industry**: تكنولوجيا
- **Goals**: {"increaseProfit":true,"improveMarketing":false,"expandCustomers":true,"launchProduct":false}
- **Budget**: 5000 دولار
- **Duration**: 3 أشهر
- **Resources**: 3 موظفين بدوام جزئي ، أدوات تصميم
- **Value proposition**: حلول برمجية متقدمة

Generate a structured business and marketing plan in JSON format:
{
  "businessPlan": {
    "steps": [
      { "step": 1, "title": "تحديد السوق المستهدف", "tasks": ["تحليل المنافسين", "تحديد احتياجات العملاء"] },
      { "step": 2, "title": "تطوير المنتج", "tasks": ["تصميم واجهة المستخدم", "برمجة التطبيق"] }
    ]
  },
  "marketingPlan": {
    "steps": [
      { "step": 1, "title": "إطلاق حملة تسويق رقمي", "tasks": ["إنشاء إعلانات على وسائل التواصل الاجتماعي", "تحسين محركات البحث"] },
      { "step": 2, "title": "بناء شراكات", "tasks": ["التواصل مع المؤثرين", "التعاون مع الشركات الأخرى"] }
    ]
  }
}
`;

      try {
        const response = await model.generateContent(prompt);
        let text = response.response.text();

        text = text.replace(/```json\n/g, '');
        text = text.replace(/```/g, '');

        setPlanData(JSON.parse(text));
        setLoading(false);
      } catch (error) {
        console.error("Error generating plan:", error);
        setError("حدث خطأ أثناء جلب الخطة.");
        setLoading(false);
      }
    };

    fetchPlan();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const navigateToPlanDetails = (planType: string) => {
    localStorage.setItem('planData', JSON.stringify(planData));
    router.push(`/plan-details?type=${planType}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      {/* Header */}
    <Header/>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-[#0a2540] text-center mb-4">خطة عملك جاهزة</h1>
        <p className="text-[#b4b4b4] text-center mb-12 text-lg">
          هذه هي خطتك المصممة خصيصًا لتناسب أهدافك ومواردك
        </p>

        {/* Business Plan Card */}
        {planData && planData.businessPlan && (
          <div className="bg-[#0a2540] rounded-3xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">خطة العمل</h2>
            <button
              onClick={() => navigateToPlanDetails('business')}
              className="bg-white text-black px-6 py-3 rounded-2xl text-xl flex font-bold items-center gap-2 mx-auto"
            >
              عرض التفاصيل
              <IoIosArrowDropleftCircle  className="text-3xl"/>
              
            </button>
          </div>
        )}

        {/* Marketing Plan Card */}
        {planData && planData.marketingPlan && (
          <div className="bg-[#0a2540] rounded-3xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">خطة التسويق</h2>
            <button
              onClick={() => navigateToPlanDetails('marketing')}
              className="bg-white text-black px-6 py-3 rounded-2xl text-xl flex font-bold items-center gap-2  mx-auto"
            >
              عرض التفاصيل
              <IoIosArrowDropleftCircle  className="text-3xl"/>

            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlanDisplay;