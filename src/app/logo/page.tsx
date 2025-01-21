"use client";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { TbZodiacAquarius, TbZodiacScorpio } from "react-icons/tb";

export default function LogoPage() {
  const logoRef = useRef<HTMLDivElement>(null);

  const downloadLogo = async () => {
    const logoElement = logoRef.current;
    if (!logoElement) return;

    const canvas = await html2canvas(logoElement, { scale: 4 });
    const link = document.createElement("a");
    link.download = `ttibett-logo.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div
        ref={logoRef}
        className="relative w-[500px] h-[500px] bg-black flex flex-wrap items-center justify-center shadow-lg rounded-lg"
      >
        <div className="text-[5rem] text-teal-400 opacity-70">
          <TbZodiacAquarius />
        </div>
        <div className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          ㄒ
        </div>
        <div className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          ㄒ
        </div>
        <div className="text-[5rem] text-[#9B4DFF] opacity-70">
          <TbZodiacScorpio />
        </div>
      </div>

      <button
        onClick={downloadLogo}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Descargar Logo
      </button>
    </div>
  );
}