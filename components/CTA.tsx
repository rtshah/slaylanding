import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="cta" className="py-16 px-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-playfair">Ready to Revolutionize Your Wardrobe?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of fashion enthusiasts who are already using SlayAI to discover and shop for their favorite styles.
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
          Download SlayAI Now
        </Button>
      </div>
    </section>
  )
}

