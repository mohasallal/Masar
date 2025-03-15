import Image from "next/image"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-200">
      <div className="w-24">
        <Image src="/placeholder.svg?height=50&width=100" alt="Logo" width={100} height={50} className="h-12 w-24" />
      </div>
      <button className="text-[#0a2540]">
        <div className="space-y-1.5">
          <div className="h-0.5 w-6 bg-[#0a2540]"></div>
          <div className="h-0.5 w-6 bg-[#6fc4fc]"></div>
          <div className="h-0.5 w-6 bg-[#0a2540]"></div>
        </div>
      </button>
    </header>
  )
}

