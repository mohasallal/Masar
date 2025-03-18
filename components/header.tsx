import Image from "next/image"

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-80 p-6 border-b  border-gray-200 sm:gap-96">
      <button className="text-[#0a2540]">
        <div className="space-y-1.5">
          <div className="h-0.5 w-6 bg-[#0a2540]"></div>
          <div className="h-0.5 w-6 bg-[#6fc4fc]"></div>
          <div className="h-0.5 w-6 bg-[#0a2540]"></div>
        </div>
      </button>
      <div className="w-24">
        <Image src="/Logo.png" alt="Logo" width={48} height={48} className="h-12 w-12 min-h-12 object-contain" />
      </div>
    </header>
  )
}

