"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import Header from "@/components/header"

interface ProjectFormProps {
  onSubmit: () => void
}

export default function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false)
  const [isImplementationDropdownOpen, setIsImplementationDropdownOpen] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState("تكنولوجيا")
  const [goals, setGoals] = useState({
    increaseProfit: false,
    improveMarketing: false,
    expandCustomers: false,
    launchProduct: false,
  })

  const industries = ["سياحة", "تجارة الكترونية", "تعليم", "تكنولوجيا", "صحة"]

  const toggleIndustryDropdown = () => {
    setIsIndustryDropdownOpen(!isIndustryDropdownOpen)
  }

  const toggleImplementationDropdown = () => {
    setIsImplementationDropdownOpen(!isImplementationDropdownOpen)
  }

  const selectIndustry = (industry: string) => {
    setSelectedIndustry(industry)
    setIsIndustryDropdownOpen(false)
  }

  const handleGoalChange = (goal: keyof typeof goals) => {
    setGoals({
      ...goals,
      [goal]: !goals[goal],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="min-h-screen bg-[#fafafb]" dir="rtl">
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-xl px-6 py-8">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#0a2540]">ابدأ بتصميم خطة مشروعك</h1>
          <p className="text-lg text-[#8696ab]">املأ التفاصيل التالية لتحصل على خطة عمل متكاملة تناسب فكرتك</p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Project Name */}
          <div className="space-y-2">
            <label htmlFor="projectName" className="block text-xl text-[#6f757f] text-right">
              اسم المشروع
            </label>
            <input
              type="text"
              id="projectName"
              defaultValue="متجر الكتروني لبيع الملابس الرياضية"
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-right"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label htmlFor="projectType" className="block text-xl text-[#6f757f] text-right">
              نوع المشروع
            </label>
            <div className="relative">
              <div className="flex cursor-pointer items-center justify-between rounded-md border border-[#e2e4e7] bg-white p-3">
                <ChevronDown className="h-5 w-5 text-[#6f757f]" />
                <span>متجر</span>
              </div>
            </div>
          </div>

          {/* Industry */}
          <div className="space-y-2">
            <label htmlFor="industry" className="block text-xl text-[#6f757f] text-right">
              الصناعة
            </label>
            <div className="relative">
              <div
                className="flex cursor-pointer items-center justify-between rounded-md border border-[#e2e4e7] bg-white p-3"
                onClick={toggleIndustryDropdown}
              >
                <ChevronDown className="h-5 w-5 text-[#6f757f]" />
                <div className="flex items-center">
                  <span>{selectedIndustry}</span>
                  <Search className="mr-2 h-5 w-5 text-[#6f757f]" />
                </div>
              </div>

              {isIndustryDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-[#e2e4e7] bg-white shadow-lg">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="cursor-pointer p-3 text-right hover:bg-[#f7f8f9]"
                      onClick={() => selectIndustry(industry)}
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Goals */}
          <div className="space-y-4">
            <label className="block text-xl text-[#6f757f] text-right">الأهداف</label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <label htmlFor="increaseProfit" className="text-[#202227]">
                  زيادة الأرباح
                </label>
                <input
                  type="checkbox"
                  id="increaseProfit"
                  checked={goals.increaseProfit}
                  onChange={() => handleGoalChange("increaseProfit")}
                  className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                />
              </div>
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <label htmlFor="improveMarketing" className="text-[#202227]">
                  تحسين التسويق
                </label>
                <input
                  type="checkbox"
                  id="improveMarketing"
                  checked={goals.improveMarketing}
                  onChange={() => handleGoalChange("improveMarketing")}
                  className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                />
              </div>
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <label htmlFor="expandCustomers" className="text-[#202227]">
                  توسيع قاعدة العملاء
                </label>
                <input
                  type="checkbox"
                  id="expandCustomers"
                  checked={goals.expandCustomers}
                  onChange={() => handleGoalChange("expandCustomers")}
                  className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                />
              </div>
              <div className="flex items-center justify-end space-x-2 space-x-reverse">
                <label htmlFor="launchProduct" className="text-[#202227]">
                  إطلاق منتج جديد
                </label>
                <input
                  type="checkbox"
                  id="launchProduct"
                  checked={goals.launchProduct}
                  onChange={() => handleGoalChange("launchProduct")}
                  className="h-5 w-5 rounded border-[#dce0ff] text-[#2a3ffa]"
                />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-xl text-[#6f757f] text-right">
              الميزانية المتاحة
            </label>
            <input
              type="text"
              id="budget"
              defaultValue="5000 دولار"
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-right"
            />
          </div>

          {/* Implementation Period */}
          <div className="space-y-2">
            <label htmlFor="implementationPeriod" className="block text-xl text-[#6f757f] text-right">
              مدة التنفيذ
            </label>
            <div className="relative">
              <div
                className="flex cursor-pointer items-center justify-between rounded-md border border-[#e2e4e7] bg-white p-3"
                onClick={toggleImplementationDropdown}
              >
                <ChevronDown className="h-5 w-5 text-[#6f757f]" />
                <span>3 أشهر</span>
              </div>

              {isImplementationDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-[#e2e4e7] bg-white shadow-lg">
                  {["شهر واحد", "شهرين", "3 أشهر", "6 أشهر", "سنة"].map((period) => (
                    <div
                      key={period}
                      className="cursor-pointer p-3 text-right hover:bg-[#f7f8f9]"
                      onClick={() => setIsImplementationDropdownOpen(false)}
                    >
                      {period}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Available Resources */}
          <div className="space-y-2">
            <label htmlFor="resources" className="block text-xl text-[#6f757f] text-right">
              الموارد المتاحة
            </label>
            <textarea
              id="resources"
              placeholder="مثال: 3 موظفين بدوام جزئي ، أدوات تصميم ..."
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-right h-32"
            />
          </div>

          {/* Value Proposition */}
          <div className="space-y-2">
            <label htmlFor="valueProposition" className="block text-xl text-[#6f757f] text-right">
              القيمة المقترحة/المشكلة التي يحلها المشروع
            </label>
            <textarea
              id="valueProposition"
              className="w-full rounded-md border border-[#e2e4e7] bg-white p-3 text-right h-32"
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
  )
}

