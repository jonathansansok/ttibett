"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import { TbZodiacAquarius, TbZodiacScorpio } from "react-icons/tb";
import Link from "next/link";

export default function TTIBETTBanner() {
  const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const downloadBanner = async (index: number, format: string) => {
    const bannerElement = bannerRefs.current[index];
    if (!bannerElement) return;

    await document.fonts.ready; // Espera a que las fuentes se carguen

    const canvas = await html2canvas(bannerElement, { scale: 4, useCORS: true });
    const link = document.createElement("a");
    link.download = `ttibett-banner-${index}.${format}`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const renderFirstBanner = () => (
    <div className="flex flex-col items-center gap-4 p-4">
      <div
        ref={(el) => {
          bannerRefs.current[0] = el;
        }}
        className="relative w-[1470px] h-[367.5px] flex flex-col items-center justify-center shadow-lg bg-black"
        style={{ paddingBottom: "150px" }}
      >
        <div className="flex flex-col items-center z-10">
          <p
            className="text-[11rem] font-bold montserrat tracking-wide"
            style={{ color: "#F4A261" }}
          >
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            <span>丨乃乇</span>
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>

          </p>
        </div>
      </div>
      <button
        onClick={() => downloadBanner(0, "png")}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition"
      >
        Descargar Banner TTIBETT
      </button>
    </div>
  );

  const renderSecondBanner = () => (
    <div className="flex flex-col items-center gap-4 p-4">
      <div
        ref={(el) => {
          bannerRefs.current[1] = el;
        }}
        className="relative w-[1470px] h-[367.5px] flex flex-col items-center justify-center shadow-lg bg-white"
        style={{ paddingBottom: "80px" }}
      >
        <div className="flex flex-col items-center z-10">
          <p
            className="text-[9rem] font-bold montserrat tracking-wide"
            style={{ color: "#F4A261" }}
          >
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            <span>丨乃乇</span>
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 mt-2">
          <div className="text-[6.25rem] text-teal-400 opacity-70">
            <TbZodiacAquarius />
          </div>
          <div className="text-[6.25rem] text-[#9B4DFF] opacity-70">
            <TbZodiacScorpio />
          </div>
        </div>
      </div>
      <button
        onClick={() => downloadBanner(1, "png")}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition"
      >
        Descargar Banner TTIBETT con Signos
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
        .montserrat {
          font-family: "Montserrat", serif;
        }
      `}</style>

      {renderFirstBanner()} {/* Primer banner sin signos zodiacales */}
      {renderSecondBanner()} {/* Segundo banner con signos zodiacales */}

      <Link href="/logo" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mt-4">
        Ver y Descargar Logo 1:1
      </Link>
      <Link href="/logojunto" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mt-4">
        Ver Logo Junto
      </Link>
    </div>
  );
}