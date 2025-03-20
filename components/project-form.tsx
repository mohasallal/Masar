"use client";

import type React from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import LoadingScreen from "@/components/loading-screen"; // Import LoadingScreen component

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
  const [selectedPeriod, setSelectedPeriod] = useState("3 أشهر");
  const industries = ["اختر نوع الصناعة","سياحة", "تجارة الكترونية", "تعليم", "تكنولوجيا", "صحة"];

  const [, setProjectName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [budget, setBudget] = useState("5000 دولار");
  const [resources, setResources] = useState("");
  const [valueProposition, setValueProposition] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const selectIndustry = (industry: string) => {
    setSelectedIndustry(industry);
  };

  const handleGoalChange = (goal: keyof typeof goals) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [goal]: !prevGoals[goal],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    // Run Gemini API call
    const runGemini = async () => {
      if (!process.env.NEXT_PUBLIC_API_KEY) {
        console.error("API_KEY is not set");
        return;
      }

      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `
        أنت مستشار خبير في التسويق واستراتيجيات الأعمال. بناءً على المدخلات التالية من المستخدم:
        - **نوع العمل**: ${businessType}
        - **الصناعة**: ${selectedIndustry}
        - **الأهداف**: ${JSON.stringify(goals)}
        - **الميزانية**: ${budget}
        - **المدة الزمنية**: ${selectedPeriod}
        - **الموارد المتاحة**: ${resources}
        - **القيمة المقترحة/المشكلة التي يحلها المشروع**: ${valueProposition}
        
        قم بإنشاء خطة عمل وتسويق منظمة بتنسيق JSON:
        {
          "businessPlan": {
            "steps": [
              { "step": 1, "title": "الخطوة الأولى", "tasks": ["المهمة 1", "المهمة 2"] },
              ...
            ]
          },
          "marketingPlan": {
            "steps": [
              { "step": 1, "title": "الخطوة التسويقية الأولى", "tasks": ["المهمة 1", "المهمة 2"] },
              ...
            ]
          }
        }
      `;

      try {
        const response = await model.generateContent(prompt);
        const text = response.response.text();
        console.log("Generated Plan:", text);
      } catch (error) {
        console.error("Error generating plan:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    await runGemini(); // Execute the Gemini API call
    onSubmit(); // Call the onSubmit prop (if needed)
  };

  if (isLoading) {
    return <LoadingScreen />; // Show loading screen
  }

  return (
    <div className="min-h-screen flex bg-[#fafafb]" dir="rtl">
      {/* Left Side: Logo and Background */}
      <div className=" hidden md:flex w-1/2 bg-[#0a2540] text-white  flex-col items-center justify-center fixed top-0 left-0 h-screen">
  <div className="w-102 ">
    <div className="relative h-120 w-120 ">
      <img src="/MasarLogo.png" alt="logo" className="h-120 w-120" />
    </div>
  </div>
</div>
      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 p-8">
        <main className="mx-auto max-w-xl">
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
                className="block text-xl text-[#6f757f] font-bold text-right"
              >
                اسم المشروع
              </label>
              <input
                type="text"
                id="projectName"
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="متجر الكتروني لبيع الملابس الرياضية"
                className="w-full rounded-md border border-[#e2e4e7]  bg-white p-3 text-black text-right"
                required
              />
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label
                htmlFor="projectType"
                className="block text-xl text-[#6f757f] font-bold text-right"
              >
                نوع المشروع
              </label>
              <div className="relative">
                <select
                  id="projectType"
                  className="block px-2 w-full rounded-md border  border-[#e2e4e7] text-black bg-white p-3 text-right"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  required
                >
                  <option value="">اختر نوع المشروع</option>
                  <option value="متجر إلكتروني">متجر إلكتروني</option>
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
                className="block text-xl text-[#6f757f] font-bold text-right"
              >
                الصناعة
              </label>
              <div className="relative">
                <select
                id="industry"
                className="block w-full rounded-md border text-black border-[#e2e4e7] bg-white p-3 text-right"
                value={selectedIndustry}
                required
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
    <label className="block text-xl font-bold text-[#6f757f] text-right">
      الأهداف
    </label>
    <div className="flex flex-col gap-4 ml-30">
      <div className="flex items-center justify-evenly gap-10">
        <div className="flex items-center justify-end gap-2">
          <input
            type="checkbox"
            id="increaseProfit"
            checked={goals.increaseProfit}
            onChange={() => {
              handleGoalChange("increaseProfit");
            }}
            className="h-5 w-5 rounded border-[#dce0ff] text-[#0a2540] checked:bg-[#0a2540] checked:border-[#0a2540] hover:border-[#0a2540] focus:border-[#0a2540]" // إضافة hover و focus
            required
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
            className="h-5 w-5 rounded border-[#dce0ff] text-[#0a2540] checked:bg-[#0a2540] checked:border-[#0a2540] hover:border-[#0a2540] focus:border-[#0a2540]" // إضافة hover و focus
          />
          <label htmlFor="improveMarketing" className="text-[#202227]">
            تحسين التسويق
          </label>
        </div>
      </div>
      <div className="flex items-center justify-evenly gap-2">
        <div className="flex items-center justify-end gap-2 mr-1">
          <input
            type="checkbox"
            id="expandCustomers"
            checked={goals.expandCustomers}
            onChange={() => handleGoalChange("expandCustomers")}
            className="h-5 w-5 rounded border-[#dce0ff] text-[#0a2540] checked:bg-[#0a2540] checked:border-[#0a2540] hover:border-[#0a2540] focus:border-[#0a2540]" // إضافة hover و focus
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
            className="h-5 w-5 rounded border-[#dce0ff] text-[#0a2540] checked:bg-[#0a2540] checked:border-[#0a2540] hover:border-[#0a2540] focus:border-[#0a2540]" // إضافة hover و focus
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
              className="block text-xl font-bold text-[#6f757f] text-right"
            >
              الميزانية المتاحة
            </label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-md border text-black border-[#e2e4e7] bg-white p-3 text-right"
              required
            />
          </div>

          {/* Implementation Period */}
          <div className="space-y-2">
            <label
              htmlFor="implementationPeriod"
              className="block font-bold text-xl text-[#6f757f] text-right"
            >
              مدة التنفيذ
            </label>
            <div className="relative">
              <select
                id="implementationPeriod"
                className="block w-full rounded-md border text-black border-[#e2e4e7] bg-white p-3 text-right "
                value={selectedPeriod}
                required
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                {["شهر واحد", "شهرين", "3 أشهر", "6 أشهر", "سنة"].map(
                  (period) => (
                    <option key={period} value={period} className="">
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
              className="block text-xl font-bold text-[#6f757f] text-right"
            >
              الموارد المتاحة
            </label>
            <textarea
              id="resources"
              placeholder="مثال: 3 موظفين بدوام جزئي ، أدوات تصميم ..."
              value={resources}
              onChange={(e) => setResources(e.target.value)}
              className="w-full rounded-md border border-[#e2e4e7] text-black bg-white p-3 min-h-36 max-h-36 text-right h-32"
            />
          </div>

          {/* Value Proposition */}
          <div className="space-y-2">
            <label
              htmlFor="valueProposition"
              className="block text-xl font-bold text-[#6f757f] text-right"
            >
              القيمة المقترحة/المشكلة التي يحلها المشروع
            </label>
            <textarea
              id="valueProposition"
              value={valueProposition}
              onChange={(e) => setValueProposition(e.target.value)}
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-black min-h-36 max-h-36 text-right h-32"
            />
          </div>

          {/* Submit Button */}
           <div className="mt-10 flex justify-center">
        <button
          type="submit"
          className="rounded-full font-bold bg-white px-8 py-3 text-lg text-[#0a2540] shadow-lg transition-all hover:shadow-xl"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "جاري التحميل..." : "أنشئ خطتي الآن"}
        </button>
      </div>

          {/* AI Message */}
          <p className="text-center font-bold text-sm text-[#8696ab] mt-4">
            سيتم تجهيز خطتك خلال لحظات باستخدام الذكاء الاصطناعي
          </p>
        </form>
      </main>
    </div>
    </div>
  );
}
