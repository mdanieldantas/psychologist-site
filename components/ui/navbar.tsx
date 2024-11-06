"use client";


import Link from "next/link";
import Image from "next/image";
import LogoDan from "@/app/public/images/logo-menorpng.png";

export default function Navbar() {



  return (
    <>
        <header className="absolute top-0  left-0 right-0 z-10 ">
        <nav className="container mx-auto px-4 py-6 ">
          <div className="flex items-center justify-between mt-[2%] mb-[8%] mx-[4%]">
            <Link href="/" className="w-[15%]">
              <Image
                src={LogoDan}
                alt="Daniel Dantas Psicólogo"
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm text-[#735B43] hover:text-[#171616]">
                Inicio
              </Link>
              <Link href="/about" className="text-sm text-[#735B43] hover:text-[#171616]">
                Sobre
              </Link>
              <Link href="/services" className="text-sm text-[#735B43] hover:text-[#171616]">
                Psicoterapia
              </Link>
              <Link href="/blog" className="text-sm text-[#735B43] hover:text-[#171616]">
                Blog
              </Link>
              <button className="rounded-none border border-[#735B43] px-8 py-2 text-sm text-[#735B43] hover:bg-[#735B43] hover:text-[#EAE6E1]">
                Book a Call
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}