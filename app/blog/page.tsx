'use client'


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/ui/navbar"

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#EAE6E1]">
      {/* Navigation */}
      <Navbar />

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-12">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#583B1F]">Understanding Trauma and Its Impact on Mental Health</h2>
                <p className="text-[#583B1F]">
                  In this comprehensive guide, we explore the various types of trauma, their effects on mental health, and strategies for healing and growth.
                </p>
                <Button className="bg-[#583B1F] text-white hover:bg-[#583B1F]/90">
                  Read More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <Card key={post} className="bg-white">
              <CardContent className="p-4">
                <Image
                  src="/placeholder.svg"
                  alt={`Blog post ${post}`}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif text-[#583B1F] mb-2">The Importance of Self-Care in Daily Life</h3>
                <p className="text-[#583B1F] text-sm mb-4">
                  Discover practical tips and strategies for incorporating self-care into your daily routine to improve overall well-being.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#583B1F] text-[#583B1F] hover:bg-[#583B1F] hover:text-white">
                  Read Article
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories and Search */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif text-[#583B1F] mb-4">Categories</h2>
            <div className="space-y-2">
              {['Mental Health', 'Relationships', 'Personal Growth', 'Mindfulness', 'Therapy Techniques'].map((category) => (
                <Button key={category} variant="outline" className="mr-2 mb-2 border-[#583B1F] text-[#583B1F] hover:bg-[#583B1F] hover:text-white">
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-[#583B1F] mb-4">Search Articles</h2>
            <div className="flex">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="border-[#583B1F] text-[#583B1F]"
              />
              <Button className="ml-2 bg-[#583B1F] text-white hover:bg-[#583B1F]/90">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 py-24 bg-[#583B1F]/10 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#583B1F] mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-[#583B1F] mb-6">
            Stay updated with our latest articles, tips, and resources for mental health and personal growth.
          </p>
          <div className="flex">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="border-[#583B1F] text-[#583B1F]"
            />
            <Button className="ml-2 bg-[#583B1F] text-white hover:bg-[#583B1F]/90">
              Subscribe
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
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#583B1F]">
            BOOK A SESSION
          </Button>
          <p className="text-sm">contact@example.com | (555) 123-4567</p>
        </div>
      </footer>
    </div>
  )
}