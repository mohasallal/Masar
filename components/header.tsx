import Image from "next/image";

export default function Header({ onBack }: { onBack?: () => void }) {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-200">
      {onBack && (
        <button
          className="text-[#0a2540] flex items-center"
          onClick={onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          رجوع
        </button>
      )}
      <div className="w-24 mx-auto">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="h-12 w-12 min-h-12 object-contain"
        />
      </div>
      {/* إذا لم يكن هناك زر رجوع، نترك مساحة فارغة */}
      {!onBack && <div className="w-6"></div>}
    </header>
  );
}