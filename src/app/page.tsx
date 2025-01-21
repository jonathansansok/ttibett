"use client";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { TbZodiacAquarius, TbZodiacScorpio } from "react-icons/tb";
import Link from "next/link";

export default function TTIBETTBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  const downloadBanner = async (format: string, scale: number = 4) => {
    const bannerElement = bannerRef.current;
    if (!bannerElement) return;

    const canvas = await html2canvas(bannerElement, { scale });
    const link = document.createElement("a");
    link.download = `ttibett-banner.${format}`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

        .montserrat {
          font-family: "Montserrat", serif;
        }

        .dancing-script {
          font-family: "Dancing Script", serif;
          font-weight: 700;
        }
      `}</style>

      <div
        ref={bannerRef}
        className="relative w-[1470px] h-[367.5px] bg-black flex flex-col items-center justify-center shadow-lg rounded-lg"
      >
        {/* Left space for profile picture */}
        <div className="absolute left-0 w-[210px] h-full bg-transparent"></div>

        {/* TTIBETT Name Design */}
        <div className="flex flex-col items-center z-10">
          <p
            className="text-6xl font-bold montserrat tracking-wide"
            style={{ color: "#F4A261" }}
          >
            ㄒㄒ丨乃乇ㄒㄒ
          </p>
        </div>

        {/* Zodiac Icons below TTIBETT */}
        <div className="flex flex-row items-center gap-4 mt-2">
          <div className="text-[5rem] text-teal-400 opacity-70">
            <TbZodiacAquarius />
          </div>
          <div className="text-[5rem] text-[#9B4DFF] opacity-70">
            <TbZodiacScorpio />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => downloadBanner('png')}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Descargar Banner
        </button>
        <Link href="/logo" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          Ver y Descargar Logo 1:1
        </Link>
      </div>
    </div>
  );
}