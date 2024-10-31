import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="w-32">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daniel-logo-sem-fundo-9oZ1b75ioxIk7AcO6zZlh3CCY02w5o.png"
            alt="Daniel Dantas Psicólogo"
            width={150}
            height={50}
            className="h-auto w-full"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            INÍCIO
          </Link>
          <Link href="/pages/about" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            SOBRE
          </Link>
          <Link href="/pages/services" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            PSICOTERAPIA
          </Link>
          <Link href="/pages/blog" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            BLOG
          </Link>
          <Button variant="outline" className="border-[#583B1F] text-[#583B1F] hover:bg-[#583B1F] hover:text-white">
            MARQUE UMA SESSÃO
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl mr-7">
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4">
          <Link href="/" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            INÍCIO
          </Link>
          <Link href="/pages/about" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            SOBRE
          </Link>
          <Link href="/pages/services" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            PSICOTERAPIA
          </Link>
          <Link href="/pages/blog" className="text-[#583B1F] hover:text-[#583B1F]/80 font-serif">
            BLOG
          </Link>
          <Button variant="outline" className="border-[#583B1F] text-[#583B1F] hover:bg-[#583B1F] hover:text-white">
            MARQUE UMA SESSÃO
          </Button>
        </div>
      )}
    </>
  );
}