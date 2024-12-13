'use client'

import { useRef, useEffect } from 'react'

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section id="demo" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">See SlayAI in Action</h2>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <video 
            ref={videoRef}
            className="w-full h-auto"
            loop
            muted
            playsInline
          >
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SlayAI-ZbDWiEVB3poK7Am3gMJvwdcFUbsJ61.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

