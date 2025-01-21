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

  const renderVariant = (
    isWhiteBackground: boolean,
    isInvertedColors: boolean,
    index: number
  ) => (
    <div key={index} className="flex flex-col items-center gap-4 p-4">
      <div
        ref={(el) => {
          bannerRefs.current[index] = el;
        }}
        className={`relative w-[1470px] h-[367.5px] flex flex-col items-center justify-center shadow-lg rounded-lg ${
          isWhiteBackground ? "bg-white" : "bg-black"
        } ${isInvertedColors ? "invert" : ""}`}
      >
        <div className="flex flex-col items-center z-10">
          <p
            className="text-6xl font-bold montserrat tracking-wide"
            style={{ color: isInvertedColors ? "#000" : "#F4A261" }}
          >
            ㄒㄒ丨乃乇ㄒㄒ
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 mt-2">
          <div className={`text-[5rem] ${isInvertedColors ? 'text-black' : 'text-teal-400'} opacity-70`}>
            <TbZodiacAquarius />
          </div>
          <div className={`text-[5rem] ${isInvertedColors ? 'text-black' : 'text-[#9B4DFF]'} opacity-70`}>
            <TbZodiacScorpio />
          </div>
        </div>
      </div>
      <button
        onClick={() => downloadBanner(index, "png")}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition"
      >
        Descargar Variante {index + 1}
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

      {renderVariant(false, false, 0)}
      {renderVariant(false, true, 1)}
      {renderVariant(true, false, 2)}
      {renderVariant(true, true, 3)}

      <Link href="/logo" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mt-4">
        Ver y Descargar Logo 1:1
      </Link>
      <Link href="/logojunto" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mt-4">
        Ver Logo Junto
      </Link>
    </div>
  );
}