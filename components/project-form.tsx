"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Header from "@/components/header";

interface ProjectFormProps {
  onSubmit: () => void;
}

export default function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [selectedIndustry, setSelectedIndustry] = useState("تكنولوجيا");
  const [goals, setGoals] = useState({
    increaseProfit: false,
    improveMarketing: false,
    expandCustomers: false,
    launchProduct: false,
  });

  const industries = ["سياحة", "تجارة الكترونية", "تعليم", "تكنولوجيا", "صحة"];

  const selectIndustry = (industry: string) => {
    setSelectedIndustry(industry);
  };

  const handleGoalChange = (goal: keyof typeof goals) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [goal]: !prevGoals[goal],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const [selectedPeriod, setSelectedPeriod] = useState("3 أشهر");

  return (
    <div className="min-h-screen bg-[#fafafb]" dir="rtl">
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-xl px-6 py-8">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#0a2540]">
            ابدأ بتصميم خطة مشروعك
          </h1>
          <p className="text-xl text-[#8696ab]">
            املأ التفاصيل التالية لتحصل على خطة عمل متكاملة تناسب فكرتك
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Project Name */}
          <div className="space-y-2">
            <label
              htmlFor="projectName"
              className="block text-xl text-[#6f757f] text-right"
            >
              اسم المشروع
            </label>
            <input
              type="text"
              id="projectName"
              placeholder="متجر الكتروني لبيع الملابس الرياضية"
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-gray-500 text-right"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label
              htmlFor="projectType"
              className="block text-xl text-[#6f757f] text-right"
            >
              نوع المشروع
            </label>
            <div className="relative">
              <select
                id="projectType"
                className="block px-2 w-full rounded-md border border-[#e2e4e7] text-gray-400 bg-white p-3 text-right"
              >
                <option value="">اختر نوع المشروع</option>
                <option value=" متجر إلكتروني">متجر إلكتروني</option>
                <option value="منتج رقمي">منتج رقمي</option>
                <option value="خدمات إلكترونية">خدمات إلكترونية</option>
                <option value="خدمات تعليمية">خدمات تعليمية</option>
                <option value="مشروع إبداعي">مشروع إبداعي</option>
                <option value="منصة تقنية">منصة تقنية</option>
                <option value="مشروع تجاري"> مشروع تجاري</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="industry"
              className="block text-xl text-[#6f757f] text-right"
            >
              الصناعة
            </label>
            <div className="relative">
              <select
                id="industry"
                className="block w-full rounded-md border text-gray-400 border-[#e2e4e7] bg-white p-3 text-right"
                value={selectedIndustry}
                onChange={(e) => selectIndustry(e.target.value)}
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Goals */}
          <div className="space-y-4">
            <label className="block text-xl text-[#6f757f] text-right">
              الأهداف
            </label>
            <div className="flex flex-col  gap-4 ml-30">
              <div className="flex items-center justify-evenly gap-10">
                <div className="flex items-center justify-end gap-2">
                  <input
                    type="checkbox"
                    id="increaseProfit"
                    checked={goals.increaseProfit}
                    onChange={() => handleGoalChange("increaseProfit")}
                    className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                  />
                  <label htmlFor="increaseProfit" className="text-[#202227]">
                    زيادة الأرباح
                  </label>
                </div>
                <div className="flex items-center justify-end gap-2 ">
                  <input
                    type="checkbox"
                    id="improveMarketing"
                    checked={goals.improveMarketing}
                    onChange={() => handleGoalChange("improveMarketing")}
                    className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                  />
                  <label htmlFor="improveMarketing" className="text-[#202227]">
                    تحسين التسويق
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-evenly gap-2">
                {" "}
                <div className="flex items-center justify-end gap-2 mr-1">
                  <input
                    type="checkbox"
                    id="expandCustomers"
                    checked={goals.expandCustomers}
                    onChange={() => handleGoalChange("expandCustomers")}
                    className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                  />
                  <label htmlFor="expandCustomers" className="text-[#202227]">
                    توسيع قاعدة العملاء
                  </label>
                </div>
                <div className="flex items-center justify-end gap-2 mr-2">
                  <input
                    type="checkbox"
                    id="launchProduct"
                    checked={goals.launchProduct}
                    onChange={() => handleGoalChange("launchProduct")}
                    className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                  />
                  <label htmlFor="launchProduct" className="text-[#202227]">
                    إطلاق منتج جديد
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="block text-xl text-[#6f757f] text-right"
            >
              الميزانية المتاحة
            </label>
            <input
              type="text"
              id="budget"
              defaultValue="5000 دولار"
              className="w-full rounded-md border text-gray-400 border-[#e2e4e7] bg-white p-3 text-right"
            />
          </div>

          {/* Implementation Period */}
          <div className="space-y-2">
            <label
              htmlFor="implementationPeriod"
              className="block text-xl text-[#6f757f] text-right"
            >
              مدة التنفيذ
            </label>
            <div className="relative">
              <select
                id="implementationPeriod"
                className="block w-full rounded-md border text-gray-400 border-[#e2e4e7] bg-white p-3 text-right"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                {["شهر واحد", "شهرين", "3 أشهر", "6 أشهر", "سنة"].map(
                  (period) => (
                    <option key={period} value={period}>
                      {period}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          {/* Available Resources */}
          <div className="space-y-2">
            <label
              htmlFor="resources"
              className="block text-xl text-[#6f757f] text-right"
            >
              الموارد المتاحة
            </label>
            <textarea
              id="resources"
              placeholder="مثال: 3 موظفين بدوام جزئي ، أدوات تصميم ..."
              className="w-full rounded-md border border-[#e2e4e7] text-gray-600 bg-white p-3 min-h-36 max-h-36 text-right h-32"
            />
          </div>

          {/* Value Proposition */}
          <div className="space-y-2">
            <label
              htmlFor="valueProposition"
              className="block text-xl text-[#6f757f] text-right"
            >
              القيمة المقترحة/المشكلة التي يحلها المشروع
            </label>
            <textarea
              id="valueProposition"
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-gray-500 min-h-36 max-h-36 text-right h-32"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-white px-8 py-3 text-lg font-medium text-[#0a2540] shadow-lg transition-all hover:shadow-xl"
            >
              أنشئ خطتي الآن
            </button>
          </div>

          {/* AI Message */}
          <p className="text-center text-sm text-[#8696ab] mt-4">
            سيتم تجهيز خطتك خلال لحظات باستخدام الذكاء الاصطناعي
          </p>
        </form>
      </main>
    </div>
  );
}
