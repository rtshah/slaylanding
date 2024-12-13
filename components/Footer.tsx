import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-gradient">
            SlayAI
          </Link>
          <p className="mt-2 text-sm text-foreground/60">
            © 2023 SlayAI. All rights reserved.
          </p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}

