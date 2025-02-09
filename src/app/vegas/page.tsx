"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function Vegas() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const downloadImage = async () => {
    if (!imageRef.current) return;

    await document.fonts.ready; // Espera a que las fuentes se carguen

    const canvas = await html2canvas(imageRef.current, { scale: 4, useCORS: true });
    const link = document.createElement("a");
    link.download = "vegas-image.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Imagen de Vegas</h1>
      <div className="relative" ref={imageRef}>
        <Image
          src="/foto.jpg"
          alt="Foto"
          width={1470} // Ajusta el ancho según el tamaño real de la imagen
          height={367.5} // Ajusta la altura según el tamaño real de la imagen
          className="shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between">
          <div className="flex flex-col items-center z-10 mt-4">
            <p
              className="text-[8.25rem] font-bold montserrat tracking-wide"
              style={{ color: "#F4A261" }}
            >
              <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
              <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
              <span className="text-[7.2rem]">丨乃乇</span>
              <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
              <span style={{ WebkitTextStroke: "6px #F4A261" }}>ㄒ</span>
            </p>
          </div>
          <div className="flex flex-col items-center z-10 mb-4">
            <p
              className="text-[5.1875rem] font-bold montserrat tracking-wide mb-4"
              style={{ color: "#F4A261" }}
            >
              Noche de verano - Waves version
            </p>
          </div>
        </div>
      </div>
      <button onClick={downloadImage} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition mt-4">
        Descargar Imagen
      </button>
    </div>
  );
}