import Image from "next/image";
import { FiChevronLeft } from "react-icons/fi";

export default function Header({ onBack }: { onBack?: () => void }) {
  // التحقق من أن onBack دالة صالحة
  const handleBackClick = () => {
    if (onBack && typeof onBack === 'function') {
      console.log("Back button clicked, calling onBack");
      onBack();
    } else {
      console.log("onBack is not a valid function or undefined");
    }
  };

  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-200">
      {onBack && (
        // <button
        //   className="text-[#0a2540] flex items-center"
        //   onClick={handleBackClick}
        // >
          <FiChevronLeft onClick={handleBackClick} className="h-6 w-6 mr-2 text-black" />
          // رجوع
        // </button>
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

      {!onBack && <div className="w-6"></div>}
    </header>
  );
}