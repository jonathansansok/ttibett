"use client";

import { useRef, RefObject } from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

export default function LogoJuntoPage() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const colorfulLogoRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const downloadLogo = async (
    ref: RefObject<HTMLDivElement | null>,
    format: string,
    filename: string
  ) => {
    const logoElement = ref.current;
    if (!logoElement) return;

    await document.fonts.ready; // Espera a que las fuentes se carguen

    const canvas = await html2canvas(logoElement, { scale: 4, useCORS: true });
    const link = document.createElement("a");
    link.download = `${filename}.${format}`;
    link.href = canvas.toDataURL();
    link.click();
  };

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

      <div
        ref={logoRef}
        className="relative w-[500px] h-[500px] flex items-center justify-center bg-black shadow-lg rounded-lg"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          ㄒ
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          ㄒ
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          丨
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          乃
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          乇
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          ㄒ
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[25rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "#f78629",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          ㄒ
        </div>
      </div>

      <button
        onClick={() => downloadLogo(logoRef, "png", "ttibett-logo-junto")}
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition mt-4"
      >
        Descargar Logo
      </button>

      <div
        ref={colorfulLogoRef}
        className="relative w-[500px] h-[500px] flex items-center justify-center bg-black shadow-lg rounded-lg mt-8"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="absolute w-[100%] h-[100%] text-[24rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "rgba(0, 255, 157, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          乇
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[24rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "rgba(0, 255, 127, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          ㄒ
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[24rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "rgba(0, 255, 255, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          ㄒ
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[24rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "rgba(255, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          丨
        </div>
        <div
          className="absolute w-[100%] h-[100%] text-[24rem] font-bold montserrat tracking-wide flex items-center justify-center"
          style={{
            color: "rgba(247, 134, 41, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "1",
            marginTop: "-30px", // Aplica el margen superior negativo
          }}
        >
          乃
        </div>
      </div>

      <button
        onClick={() =>
          downloadLogo(colorfulLogoRef, "png", "ttibett-logo-colorful")
        }
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100 transition mt-4"
      >
        Descargar Logo Colorido
      </button>
    </div>
  );
}
