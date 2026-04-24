"use client"

import { useState } from "react"
import { Mail, Phone, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:zachariaalex1998@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>zachariaalex1998@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+917356126270"
                  className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+91 73561 26270</span>
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
              <h3 className="font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-zinc-500 text-sm">
                I typically respond within 24 hours. For urgent inquiries, please call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
