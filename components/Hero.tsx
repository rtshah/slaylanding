import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse-slow"></div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10 font-playfair">
        <span className="text-gradient">Discover Fashion</span><br />
        <span className="text-foreground">with Incredible Precision</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto relative z-10">
        Scan any outfit and instantly find shopping data.
      </p>
      <a 
        href="https://apps.apple.com/us/app/slayai-clothing-scanner/id6670765846"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10">
          Download Mobile App
        </Button>
      </a>
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
        <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary via-secondary to-accent rounded-full filter blur-3xl opacity-30 animate-float"></div>
      </div>
    </section>
  )
}