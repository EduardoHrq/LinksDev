import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Separator } from "@/components/separator";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLinks",
  description: "Dev links",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body className="bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-200 overflow-hidden animate-show   ">
        <main className="md:w-[400px] min-w-[350px] max-h-lvh mx-auto mt-5 overflow-y-auto px-4 pt-5 pb-10">
          <div className="flex flex-col gap-5 items-center justify-center">
            <img
              src="https://i.imgur.com/qmVWOlh.jpg"
              alt="perfil"
              className="rounded-full w-1/2"
            />
            <h1 className="text-xl font-bold">Eduardo Henrique</h1>
          </div>

          <Separator />

          {children}

          <Separator />

          <div className="flex items-center justify-evenly">
            <Link href={"https://github.com/eduardohrq"} target="_blank" className="relative group">
              <div className="bg-zinc-300 p-3 rounded-full overflow-hidden">
                <i className="ph-fill ph-github-logo text-[50px] text-zinc-900"></i>
              </div>
              <div
                className="absolute px-4 py-2 bg-zinc-950 rounded-xl -bottom-14
            left-1/2 -translate-x-1/2 scale-[.2] origin-top group-hover:scale-100 transition-all 
            duration-300 opacity-0 group-hover:opacity-100"
              >
                <div
                  className="border-x-[15px] border-x-transparent border-b-[15px] border-b-zinc-950
               absolute -top-3 -translate-x-1/2 left-1/2"
                ></div>
                Github
              </div>
            </Link>

            <Link href={"https://linkedin.com/in/eduardohrq"} target="_blank" className="relative group">
              <div className="bg-zinc-300 p-3 rounded-full overflow-hidden">
                <i className="ph-fill ph-linkedin-logo text-[50px] text-blue-700"></i>
              </div>
              <div
                className="absolute px-4 py-2 bg-zinc-950 rounded-xl -bottom-14
            left-1/2 -translate-x-1/2 scale-[.2] origin-top group-hover:scale-100 transition-all 
            duration-300 opacity-0 group-hover:opacity-100"
              >
                <div
                  className="border-x-[15px] border-x-transparent border-b-[15px] border-b-zinc-950
               absolute -top-3 -translate-x-1/2 left-1/2"
                ></div>
                LinkedIn
              </div>
            </Link>

            <Link
              href={
                "https://eduardohrqdev.notion.site/Curriculo-Eduardo-Henrique-Lima-Silva-EduardoHrq-08804bc978c8409b80eec0d8b731a8a5"
              }
              target="_blank"
              className="relative group"
            >
              <div className="bg-zinc-300 p-3 rounded-full overflow-hidden">
                <i className="ph-fill ph-read-cv-logo text-[50px] text-yellow-800"></i>
              </div>
              <div
                className="absolute px-4 py-2 bg-zinc-950 rounded-xl -bottom-14
            left-1/2 -translate-x-1/2 scale-[.2] origin-top group-hover:scale-100 transition-all 
            duration-300 opacity-0 group-hover:opacity-100"
              >
                <div
                  className="border-x-[15px] border-x-transparent border-b-[15px] border-b-zinc-950
               absolute -top-3 -translate-x-1/2 left-1/2"
                ></div>
                Resume
              </div>
            </Link>
          </div>

          <footer className="text-center mt-20 mb-10">
            Feito por <span className="font-bold">EduardoHrq</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
