'use client'
import Link from 'next/link'
import './globals.css'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrimeReactProvider>
      <html lang="pt-br">
        <body className='min-h-[900px] h-screen flex flex-col'>
          <nav className='px-10 py-4 flex justify-between items-center'>
            <Link href="/"><h1 className='font-bold text-3xl'>Rafael&apos;s <span className='text-purple-500'>Portfolio</span></h1></Link>
            <div className='flex gap-3'>
              <Link href="/habilidades" className='hover:underline hover:text-purple-500 duration-300'>Skills</Link>
              <Link href="/projetos" className='hover:underline hover:text-purple-500 duration-300'>Projects</Link>
              <Link href="/contato" className='hover:underline hover:text-purple-500 duration-300'>Contact</Link>
            </div>
          </nav>
          <div className='h-full'>
            {children}
          </div>
        </body>
      </html>
    </PrimeReactProvider>
  )
}
