import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiNestjs, SiExpress, SiPrisma, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandMongodb } from "react-icons/tb";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Icon Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6">
          <div className="flex flex-col items-center">
            <FaReact size={40} color="#61DAFB" title="React" />
            <p className="text-xs mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <RiNextjsFill size={40} color="black" title="Next.js" />
            <p className="text-xs mt-2">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandTypescript size={40} color="#3178C6" title="TypeScript" />
            <p className="text-xs mt-2">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssLine size={40} color="#06B6D4" title="Tailwind CSS" />
            <p className="text-xs mt-2">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNestjs size={40} color="#E0234E" title="NestJS" />
            <p className="text-xs mt-2">NestJS</p>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress size={40} color="black" title="Express" />
            <p className="text-xs mt-2">Express</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPrisma size={40} color="#2D3748" title="Prisma" />
            <p className="text-xs mt-2">Prisma</p>
          </div>
          <div className="flex flex-col items-center">
            <GrMysql size={40} color="#00758F" title="MySQL" />
            <p className="text-xs mt-2">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql size={40} color="#336791" title="PostgreSQL" />
            <p className="text-xs mt-2">PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <TbBrandMongodb size={40} color="#47A248" title="MongoDB" />
            <p className="text-xs mt-2">MongoDB</p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
