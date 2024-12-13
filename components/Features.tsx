import { Camera, Zap, Globe } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: "Instant Scanning",
    description: "Capture any outfit with your camera for immediate identification."
  },
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "We can find you shopping data in seconds."
  },
  {
    icon: Globe,
    title: "Global Fashion Database",
    description: "Find the hottest new brands."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-secondary/10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">Redefining Fashion Discovery</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

