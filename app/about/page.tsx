import Navbar from "@/components/ui/navbar" 
import Image from "next/image" 
import { Button } from "@/components/ui/button"

import terapeutaImg from "@/app/public/images/terapeuta-sobre.jpg"

export default function About() {
  return (
    <div className="min-h-screen bg-[#EAE6E1]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}

      <section className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-6">
    <h1 className="text-4xl md:text-5xl font-serif text-[#583B1F]">
      MEET CESHAUN HANKINS, LCSW
    </h1>
    <p className="text-[#583B1F]">EMDR therapist in Portland, Oregon</p>
    <Button variant="outline" className="border-[#583B1F] text-[#583B1F] bg-transparent hover:bg-[#583B1F] hover:text-white">
      LET'S CONNECT
    </Button>
  </div>
  <div className="relative">
    <Image
      src={terapeutaImg}
      alt="Professional headshot"
      width={500}  // Ajuste a largura para 150
      height={400} // Ajuste a altura para 200
      className="w h-auto rounded-lg"
    />
  </div>
</section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl space-y-6 text-[#583B1F]">
          <p>
            You deserve to experience connection, compassion and ease. I'm so glad you're here.
          </p>
          <p>
            My approach is informed by over 12 years of work in the fields of mental health and social work. With that, I remain critical of the oppressive origins of modern Western mental health and continue to work to decolonize my practice.
          </p>
          <p>
            I'm Black, biracial, a mother of all gender and queer, a partner, an oldest sister, daughter and friend. I'm originally from Southern California but gratefully enjoy the rain and seasons of Oregon.
          </p>
          <p>
            My career has been multi-faceted (as life thread through it all has been social justice, service, and creativity). I was even a director of a cosmetology and esthetics school for a year! My hobbies include reading, cooking, travel e being a more gardener. I am wholeheartedly dedicated to my own relational practices.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-serif text-[#583B1F] mb-12">My values</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#583B1F]">01</h3>
            <h4 className="text-2xl font-serif text-[#583B1F]">Connection</h4>
            <p className="text-[#583B1F]">
              People need other people to survive and thrive. We're wired for connection whether we acknowledge it or not. Our deepest hurts come from connection ruptures with others and being witnessed. Community is a source of healing for all, especially those from marginalized communities.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif text-[#583B1F]">02</h3>
            <h4 className="text-2xl font-serif text-[#583B1F]">Liberation</h4>
            <p className="text-[#583B1F]">
              I center my work and life in a way where freedom is not static. Although I am still part of a system that perpetuates harm in many ways, I actively work to be self-reflective and dedicated to my practice. I am informed and inspired by a lineage of others.
            </p>
          </div>
          <div className="space-y-4">
            <h className="text-xl font-serif text-[#583B1F]">03</h>
            <h4 className="text-2xl font-serif text-[#583B1F]">Ease</h4>
            <p className="text-[#583B1F]">
              I carry a personal value of living an easeful life. This isn't easy coming from someone who has worked since age 15. I believe that we're not here on Earth to work and produce but to be alive and experience joy and ease that life can also offer.
            </p>
          </div>
        </div>
      </section>

      {/* Work With Me Section */}
      <section className="container mx-auto px-4 py-24 bg-[#583B1F]/10">
        <h2 className="text-center text-2xl font-serif text-[#583B1F] mb-12">WORK WITH ME</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-serif text-[#583B1F]">Therapy</h3>
            <p className="text-[#583B1F]">
              Individual therapy provides a collaborative opportunity to be seen and seen. You'll be supported with exploratory conversation, the learning of new skills founded in research and ancestral knowledge.
            </p>
            <Button variant="outline" className="border-[#583B1F] text-[#583B1F] bg-transparent hover:bg-[#583B1F] hover:text-white">
              LEARN MORE
            </Button>
          </div>
          <div className="text-center space-y-4">
            <h3 className="text-xl font-serif text-[#583B1F]">Community</h3>
            <p className="text-[#583B1F]">
              Growth and healing aren't solitary work. Stay tuned for opportunities to engage in communal support and knowledge sharing.
            </p>
            <Button variant="outline" className="border-[#583B1F] text-[#583B1F] bg-transparent hover:bg-[#583B1F] hover:text-white">
              COMING SOON
            </Button>
          </div>
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
          <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-[#583B1F]">
            BOOK A SESSION
          </Button>
          <p className="text-sm">ceshaun@psychotherapyhealth.com | 971-342-0403</p>
        </div>
      </footer>
      
    </div>
  );
}