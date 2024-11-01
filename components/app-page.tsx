'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import { Card, CardContent } from "@/components/ui/card"

import logoDan from "@/app/public/images/logo-menorpng.png"
import HeaderImg from "@/app/public/images/imagem-sofá.jpg"
import mulherNotIgm from "@/app/public/images/pessoaComNotebook.jpg"
import terapeutaImg from "@/app/public/images/terapeuta-sobre.jpg"
import mulherLivre from "@/app/public/images/soa-familiarolhando-por-cima-do-ombro.jpg"
import amigasAbracadasIgm from "@/app/public/images/amigas-abraçadas.jpg"

export function Page() {
  return (
    <div className="min-h-screen bg-[#EAE6E1]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <Image
          src={HeaderImg}
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-[90vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4">
          <h4 className="text-[#583B1F] font-serif mb-4">TRAUMA RESPONSIVE</h4>
          <h1 className="text-[#583B1F] font-serif text-5xl max-w-3xl mb-8">
            Somatic therapy & EMDR for anxiety, stress, overwhelm and multiracial identity
          </h1>
          <h4 className="text-[#583B1F] font-serif border-b border-[#583B1F] pb-8 mb-8 max-w-xl">
            EM FORTALEZA OU || ATENDIMENTO ONLINE
          </h4>
          <Button className="bg-[#583B1F] text-white hover:bg-[#583B1F]/90 w-fit">
            MARQUE UMA SESSÃO
          </Button>
        </div>
      </section>

      {/* Familiar Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#583B1F] border-t border-[#583B1F] pt-4">
              Isso te soa familiar?
            </h2>
            <div className="space-y-4 text-[#583B1F]">
              <p>You've tried therapy before but it fell short in some way.</p>
              <p>Your work and personal life run at full speed. You work in a demanding environment.</p>
              <p>You want to break unhelpful family patterns and shift the story of your lineage.</p>
              <p>People-pleasing has been a survival tool. It's seemed easier to focus on others.</p>
            </div>
          </div>
          <Image
            src={mulherLivre}
            alt="Therapy session"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Help Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <Image
            src={terapeutaImg}
            alt="Professional photo"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[#583B1F]">Posso lhe ajudar</h2>
            <div className="space-y-4 text-[#583B1F] border-t border-b border-[#583B1F] py-8">
              <p>Hi, I'm a therapist based in Fortaleza providing therapy across Brazil.</p>
              <p>I help people who are experiencing high levels of stress, trauma, or anxiety begin to experience relief.</p>
              <p>Whether you're seeking individual or group therapy - <strong>you're in the right place.</strong></p>
            </div>
          </div>
        </div>
      </section>


{/* I can help with */}
<section className="container mx-auto px-4 py-24">
  <div className="grid md:grid-cols-2 gap-12">

    <div>
      <h2 className="text-[#583B1F] font-serif text-5xl pb-2">
        I can help with
      </h2>
      <hr className="border-[#583B1F] w-3/4 mb-4" />
    </div>

    <div className="space-y-12  mt-12" >
      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="space-y-2">
          <p className="text-[#583B1F]">01</p>
          <h3 className="text-[#583B1F] font-serif text-2xl">Chronic stress</h3>
          <p className="text-[#583B1F]">When stress becomes constant our mind, body, and spirit can wear down.</p>
        </CardContent>
      </Card>

      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="space-y-2">
          <p className="text-[#583B1F]">02</p>
          <h3 className="text-[#583B1F] font-serif text-2xl">Anxiety</h3>
          <p className="text-[#583B1F]">Anxiety is a sense of dread and constant worry.</p>
        </CardContent>
      </Card>
      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="space-y-2">
          <p className="text-[#583B1F]">03</p>
          <h3 className="text-[#583B1F] font-serif text-2xl">Trauma</h3>
          <p className="text-[#583B1F]">The experience of 'too much too fast' can trigger protection systems.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* Services and About Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <Image
              src={mulherNotIgm}
              alt="Services"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <Button className="absolute bottom-4 left-4 bg-[#583B1F] text-white hover:bg-[#583B1F]/90">
              SERVIÇOS
            </Button>
          </div>
          <div className="relative">
            <Image
              src={amigasAbracadasIgm}
              alt="About"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <Button className="absolute bottom-4 left-4 bg-[#583B1F] text-white hover:bg-[#583B1F]/90">
              SOBRE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#583B1F] text-white py-12">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="flex items-center justify-center gap-8">
            <Link href="/pages/services" className="underline font-serif">SERVIÇOS</Link>
            <Image
              src={logoDan}
              alt="Logo"
              width={100}
              height={40}
              className="h-auto invert"
            />
            <Link href="/pages/about" className="underline font-serif">SOBRE</Link>
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-2xl">Fornecendo terapia virtual e presencial</h2>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#583B1F]">
              MARQUE UMA SESSÃO
            </Button>
            <p className="font-serif">contato@example.com</p>
            <p className="font-serif">WhatsApp: (85) 99999-9999</p>
            <p className="text-sm font-serif">Criado por Daniel Dantas© 2023 - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}