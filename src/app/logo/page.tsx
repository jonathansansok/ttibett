"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import { TbZodiacAquarius, TbZodiacScorpio } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function LogoPage() {
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lettersRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const downloadLogo = async (index: number, format: string) => {
    const logoElement = logoRefs.current[index];
    if (!logoElement) return;

    await document.fonts.ready; // Espera a que las fuentes se carguen

    const canvas = await html2canvas(logoElement, { scale: 4, useCORS: true });
    const link = document.createElement("a");
    link.download = `ttibett-logo-${index}.${format}`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadLetters = async (format: string) => {
    const lettersElement = lettersRef.current;
    if (!lettersElement) return;

    await document.fonts.ready; // Espera a que las fuentes se carguen

    const canvas = await html2canvas(lettersElement, { scale: 4, useCORS: true });
    const link = document.createElement("a");
    link.download = `ttibett-letters.${format}`;
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
          logoRefs.current[index] = el;
        }}
        className={`relative w-[500px] h-[500px] grid grid-cols-2 grid-rows-2 items-center justify-center shadow-lg rounded-lg ${
          isWhiteBackground ? "bg-white" : "bg-black"
        } ${isInvertedColors ? "invert" : ""}`}
      >
        <div className={`text-[9rem] mt-16 ${isInvertedColors ? 'text-black' : 'text-teal-400'} opacity-70 flex items-center justify-center`}>
          <TbZodiacAquarius />
        </div>
        <div
          className="text-6xl font-bold montserrat tracking-wide flex items-center justify-center"
          style={{ color: isInvertedColors ? "#000" : "#F4A261" }}
        >
          ㄒ
        </div>
        <div
          className="text-6xl font-bold montserrat tracking-wide flex items-center justify-center"
          style={{ color: isInvertedColors ? "#000" : "#F4A261" }}
        >
          乃
        </div>
        <div className={`text-[9rem] mt-16 ${isInvertedColors ? 'text-black' : 'text-[#9B4DFF]'} opacity-70 flex items-center justify-center`}>
          <TbZodiacScorpio />
        </div>
      </div>
      <button
        onClick={() => downloadLogo(index, "png")}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition"
      >
        Descargar Variante {index + 1}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
        .montserrat {
          font-family: "Montserrat", serif;
        }
      `}</style>

      <button
        onClick={() => router.back()}
        className="self-start text-white bg-orange-500 p-2 rounded hover:bg-orange-600 transition"
      >
        Volver
      </button>

      {renderVariant(false, false, 0)}
      {renderVariant(false, true, 1)}
      {renderVariant(true, false, 2)}
      {renderVariant(true, true, 3)}

      <div ref={lettersRef} className="flex flex-col items-center mt-8 bg-black p-2">
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          ㄒ
        </p>
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          ㄒ
        </p>
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          丨
        </p>
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          乃
        </p>
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          乇
        </p>
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          ㄒ
        </p>
        <p className="text-6xl font-bold montserrat tracking-wide" style={{ color: "#F4A261" }}>
          ㄒ
        </p>
      </div>
      <button
        onClick={() => downloadLetters("png")}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition mt-4"
      >
        Descargar Letras
      </button>
    </div>
  );
}