'use client'

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from "@/components/ui/navbar"

export default function Services() {
  return (
    <div className="min-h-screen bg-[#EAE6E1]">
      {/* Navigation */}

      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-48 mb-12">
            <div className="absolute right-1/2 transform translate-x-16">
              <div className="w-40 h-40 rounded-full bg-[#8BA888] overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Therapy session"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-16">
              <div className="w-40 h-40 rounded-full bg-[#E8A87C] overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Meditation"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-[#583B1F]">
              EMDR & Somatic Therapy
            </h1>
            <p className="text-[#583B1F] text-xl">Individual sessions for adults</p>
            <Button variant="outline" className="border-[#583B1F] text-[#583B1F] hover:bg-[#583B1F] hover:text-white">
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#583B1F]">
              The sense of worry has been worse lately.
            </h2>
            <p className="text-[#583B1F]">
              You're either constantly on edge or you're numbed out. The exhaustion of holding it all together has become too much and you can't understand why the things that used to work aren't helping anymore.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#583B1F]">
              Learn how to access your mind + body's natural capacity to release and heal.
            </h2>
            <p className="text-[#583B1F]">
              Through EMDR (Eye Movement Desensitization & Reprocessing), a research-based approach, we'll work together to address your distress. Mind-body practices often work more quickly than talk therapy alone. Healing and recovery from painful memories and negative beliefs is possible - and I want to show you how. I look forward to guiding you through the process of clearing out and releasing the charge of these experiences.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-[#583B1F] text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">How does it work?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl font-serif">1</div>
              <p>First, we work through a preparation process where you'll learn grounding techniques that can be used in moments of distress. We'll also identify the specific focus of your experience that you're finding the most challenging.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-serif">2</div>
              <p>As we move forward, we'll focus on decreasing the intensity of these experiences by gently bringing them to mind and using bilateral stimulation. Body-based techniques like tapping or eye movements help reprocess and reorganize the memory.</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-serif">3</div>
              <p>We'll then collaborate on the integration of your future life vision with more helpful and positive beliefs. It's not magic - but it might feel like it. It'll be one of your body's most potent tools for healing and you can become your own healer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif text-[#583B1F] mb-8">FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              "Do you accept insurance?",
              "How long do sessions last?",
              "How often do we meet?",
              "What can your clients tell me?",
              "What's EMDR?",
              "What's your cancellation policy?",
              "How do we get started?",
              "What if it doesn't feel like a fit?"
            ].map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#583B1F] font-serif">{question}</AccordionTrigger>
                <AccordionContent className="text-[#583B1F]">
                  Contact us to learn more about this specific question.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Get Started */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#583B1F]">Get Started</h2>
          <p className="text-[#583B1F]">
            Interested in learning more? I'd love to hear from you! The first step is to request a free 15-minute consultation.
          </p>
          <Button variant="outline" className="border-[#583B1F] text-[#583B1F] hover:bg-[#583B1F] hover:text-white">
            LET'S CHAT
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#583B1F] text-white py-12">
        <div className="container mx-auto px-4 text-center space-y-8">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            width={100}
            height={40}
            className="mx-auto h-auto"
          />
          <p className="max-w-2xl mx-auto text-sm">
            providing virtual therapy across California & Oregon
          </p>
          <p className="max-w-3xl mx-auto text-xs">
            residing on the traditional and ancestral homelands of the Cowlitz, Clackamas, Cayuse, Umatilla, Walla Walla, and 
            Multnomah People as well as the Confederated Tribes of the Siletz and the Confederated Tribes of the Grande Ronde.
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#583B1F]">
            BOOK A SESSION
          </Button>
          <p className="text-sm">contact@example.com | (555) 123-4567</p>
        </div>
      </footer>
    </div>
  )
}