  "use client";

  import React from "react";
  import { useSearchParams } from 'next/navigation';
  import { ChevronLeft } from 'lucide-react';
  import { useRouter } from 'next/navigation';
  import Header from "@/components/header";
  import { IoIosArrowDropleftCircle } from "react-icons/io";

  const PlanDetails = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const planType = searchParams.get('type');
    const planData = JSON.parse(localStorage.getItem('planData') || '{}');
    const plan = planType === 'business' ? planData.businessPlan : planData.marketingPlan;
  console.log(plan);
    if (!plan) {
      return <p>خطة غير صالحة.</p>;
    }

    const handleBack = () => {
      router.back();
    };

    const navigateToDashboard = (tasks: string[]) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      router.push('/dashboard'); // الانتقال إلى لوحة المهام
    };

    return (
      <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      <Header />
        <main className="flex-1 px-4 py-8 max-w-3xl mx-auto w-full">
          <h1 className="text-4xl font-bold text-[#0a2540] text-center mb-4">
            {planType === 'business' ? 'تفاصيل خطة العمل' : 'تفاصيل خطة التسويق'}
          </h1>

          {plan.steps.map((step: any) => (
            <div key={step.step} className="bg-[#0a2540] rounded-3xl p-8 mb-8 text-center text-white">
              <h3 className="text-2xl font-semibold mb-2">{`الخطوة ${step.step}`}</h3>
              <p className="text-lg mb-2">{` ${step.title}`}</p>

              <button
                onClick={() => navigateToDashboard(step.tasks)}
                className="bg-white text-[#0a2540] px-6 py-3 text-xl flex rounded-2xl font-bold items-center gap-2  mx-auto mt-4"
              >
              شاهد الملخص كاملًا
                <IoIosArrowDropleftCircle  className="text-3xl"/>
              </button>
            </div>
          ))}
        </main>
      </div>
    );
  };

  export default PlanDetails;