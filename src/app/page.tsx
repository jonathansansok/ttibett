"use client";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiNestjs, SiExpress, SiPrisma, SiPostgresql, SiSass } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandMongodb } from "react-icons/tb";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function LinkedInBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"white" | "black">("white");

  const downloadBanner = async () => {
    const bannerElement = bannerRef.current;
    if (!bannerElement) return;

    const canvas = await html2canvas(bannerElement, { scale: 4 });
    const link = document.createElement("a");
    link.download = `linkedin-banner-${theme}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

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
        className={`relative w-[1470px] h-[367.5px] ${
          theme === "white" ? "bg-white" : "bg-black"
        } flex flex-col items-center justify-center shadow-lg rounded-lg`}
      >
        {/* Left space for profile picture */}
        <div className="absolute left-0 w-[210px] h-full bg-transparent"></div>

        {/* Container for icons and name */}
        <div className="flex flex-col items-end ml-16">
          {/* Icons */}
          <div className="grid grid-cols-6 gap-x-1 gap-y-5 justify-end items-center">
            {/* Frontend Icons */}
            <div className="flex flex-col items-center w-20">
              <FaReact size={50.4} color="#61DAFB" title="React" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>React</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <RiNextjsFill
                size={50.4}
                color={theme === "white" ? "black" : "white"}
                title="Next"
              />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>Next</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <TbBrandTypescript size={50.4} color="#3178C6" title="TypeScript" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>TypeScript</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <RiTailwindCssLine size={50.4} color="#06B6D4" title="Tailwind CSS" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>Tailwind</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <SiSass size={50.4} color="#CC6699" title="Sass" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>Sass</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <SiNestjs size={50.4} color="#E0234E" title="NestJS" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>Nest</p>
            </div>

            {/* Backend Icons */}
            <div className="flex flex-col items-center w-20">
              <SiExpress
                size={50.4}
                color={theme === "white" ? "black" : "white"}
                title="Express"
              />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>Express</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <SiPrisma
                size={50.4}
                color={theme === "white" ? "#2D3748" : "#00C8B3"}
                title="Prisma"
              />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>Prisma</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <GrMysql size={50.4} color="#00758F" title="MySQL" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>MySQL</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <SiPostgresql size={50.4} color="#336791" title="PostgreSQL" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center w-20">
              <TbBrandMongodb size={50.4} color="#47A248" title="MongoDB" />
              <p className={`text-sm mt-1 ${theme === "white" ? "text-black" : "text-white"}`}>MongoDB</p>
            </div>
            <div className="flex flex-col gap-0 items-center -mt-8 w-20">
              <p className="text-4xl font-bold dancing-script" style={{ color: "#3DA6B0" }}>
                J.
              </p>
              <p className="text-4xl font-bold dancing-script -mt-2" style={{ color: "#3DA6B0" }}>
                Sansó
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setTheme("white");
            downloadBanner();
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Descargar Banner (Fondo Blanco)
        </button>
        <button
          onClick={() => {
            setTheme("black");
            downloadBanner();
          }}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Descargar Banner (Fondo Negro)
        </button>
      </div>
    </div>
  );
}