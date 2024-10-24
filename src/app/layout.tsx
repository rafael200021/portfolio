"use client";
import Link from "next/link";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useEffect, useState } from "react";
import Toggle from "./components/Toggle";
import LinkMenu from "./components/LinkMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tema, setTema] = useState("dark");

  useEffect(() => {
    const temaAtual = localStorage.getItem("tema");
    if (temaAtual) {
      setTema(temaAtual);
      document.documentElement.classList.add(temaAtual);
    } else {
      setTema("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const modificarTema = () => {
    const novoTema = tema === "light" ? "dark" : "light";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(novoTema);
  };

  return (
    <PrimeReactProvider>
      <html lang="pt-br">
        <body className="h-screen min-h-screen flex flex-col bg-white dark:bg-neutral-900">
          <nav className="px-10 py-4 flex justify-between items-center dark:bg-neutral-900">
            <Link href="/">
              <h1 className="font-bold text-neutral-900 dark:text-white text-3xl">
                Rafael&apos;s <span className="text-purple-500">Portfolio</span>
              </h1>
            </Link>
            <div className="flex flex-wrap gap-3">
              <Toggle value={tema === "dark"} setValue={modificarTema} />
              <LinkMenu rota="/habilidades">Skills</LinkMenu>
              <LinkMenu rota="/projetos">Projects</LinkMenu>
              <LinkMenu rota="/contato">Contact</LinkMenu>
            </div>
          </nav>
          <div className="h-full">{children}</div>
        </body>
      </html>
    </PrimeReactProvider>
  );
}
