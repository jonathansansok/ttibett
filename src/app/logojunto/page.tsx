"use client";

import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LogoJuntoPage() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const colorfulLogoRef = useRef<HTMLDivElement | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [colorfulLogoUrl, setColorfulLogoUrl] = useState<string | null>(null);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const generateLogo = async (
      ref: React.RefObject<HTMLDivElement | null>,
      setUrl: (url: string) => void
    ) => {
      const logoElement = ref.current;
      if (!logoElement) return;

      console.log("Generating logo for", logoElement);

      // Espera a que las fuentes se carguen correctamente antes de la captura
      await document.fonts.ready;
      console.log("Fonts loaded");

      const canvas = await html2canvas(logoElement, {
        scale: 4,
        useCORS: true,
      });
      console.log("Canvas created");

      const url = canvas.toDataURL();
      console.log("Canvas data URL:", url);

      setUrl(url);
    };

    const renderLogos = async () => {
      await generateLogo(logoRef, setLogoUrl);
      await generateLogo(colorfulLogoRef, setColorfulLogoUrl);
      setIsRendered(true);
    };

    renderLogos();
  }, []);

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
  };

  const logoChars = ["ㄒ", "ㄒ", "丨", "乃", "乇", "ㄒ", "ㄒ"];
  const colorfulLogoChars = ["乇", "ㄒ", "ㄒ", "丨", "乃"];

  const getColor = (index: number) => {
    const colors = [
      "rgba(0, 255, 157, 0.5)",
      "rgba(0, 255, 127, 0.5)",
      "rgba(0, 255, 255, 0.5)",
      "rgba(255, 0, 0, 0.5)",
      "rgba(247, 134, 41, 0.8)",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
        .montserrat {
          font-family: "Montserrat", serif;
        }
        .hidden {
          display: none;
        }
      `}</style>

      <button
        onClick={() => router.back()}
        className="self-start text-white bg-orange-500 p-2 rounded hover:bg-orange-600 transition"
      >
        Volver
      </button>

      {/* Contenedor padre para los dos logos */}
      <div className="flex flex-col gap-8">
        {/* Logo Original */}
        <div
          ref={logoRef}
          className={`relative w-[500px] h-[500px] flex items-center justify-center bg-black shadow-lg overflow-hidden ${
            isRendered ? "hidden" : ""
          }`}
        >
          {logoChars.map((char, index) => (
            <div
              key={index}
              className="absolute w-full h-full text-[25rem] font-bold montserrat flex items-center justify-center"
              style={{
                color: "#f78629",
                top: "20%",
                transform: "translateY(-50%)",
              }}
            >
              {char}
            </div>
          ))}
        </div>

        {logoUrl && (
          <>
            <Image
              src={logoUrl}
              alt="Logo"
              width={500}
              height={500}
              className="object-contain"
            />
            <button
              onClick={() => downloadImage(logoUrl, "logo.png")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Descargar Logo
            </button>
          </>
        )}

        {/* Logo Colorido */}
        <div
          ref={colorfulLogoRef}
          className={`relative w-[500px] h-[500px] flex items justify-center bg-black shadow-lg overflow-hidden ${
            isRendered ? "hidden" : ""
          }`}
        >
          {colorfulLogoChars.map((char, index) => (
            <div
              key={index}
              className="absolute w-full h-full text-[24rem] font-bold montserrat flex items-center justify-center"
              style={{
                color: getColor(index),
                top: "20%",
                transform: "translateY(-50%)",
              }}
            >
              {char}
            </div>
          ))}
        </div>

        {colorfulLogoUrl && (
          <>
            <Image
              src={colorfulLogoUrl}
              alt="Colorful Logo"
              width={500}
              height={500}
              className="object-contain"
            />
            <button
              onClick={() =>
                downloadImage(colorfulLogoUrl, "colorful-logo.png")
              }
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Descargar Logo Colorido
            </button>
          </>
        )}
      </div>
    </div>
  );
}