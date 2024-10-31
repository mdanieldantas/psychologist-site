"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoDan from "@/app/public/images/logo-menorpng.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between bg-transparent">
        <div className="flex-1 flex justify-start md:hidden">
          <button onClick={toggleMenu} className="text-2xl mr-4">
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
        <div className="flex-1 flex justify-center md:justify-start md:ml-4">
          <Link href="/" className="block md:inline-block">
            <Image
              src={LogoDan}
              alt="Daniel Dantas Psicólogo"
              width={80}
              height={24}
              className="h-auto w-full md:w-32"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            INÍCIO
          </Link>
          <Link href="/about" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            SOBRE
          </Link>
          <Link href="/services" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            PSICOTERAPIA
          </Link>
          <Link href="/blog" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            BLOG
          </Link>
          <Button variant="outline" className="border-[#583B1F] text-[#583B1F] bg-transparent hover:bg-[#583B1F] hover:text-white">
            MARQUE UMA SESSÃO
          </Button>
        </div>
        <div className="flex-1 md:hidden"></div>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4">
          <Link href="/" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            INÍCIO
          </Link>
          <Link href="/about" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            SOBRE
          </Link>
          <Link href="/services" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            PSICOTERAPIA
          </Link>
          <Link href="/blog" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            BLOG
          </Link>
          <Button variant="outline" className="border-[#583B1F] text-[#583B1F] bg-transparent hover:bg-[#583B1F] hover:text-white">
            MARQUE UMA SESSÃO
          </Button>
        </div>
      )}
    </>
  );
}