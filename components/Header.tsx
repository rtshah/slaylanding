import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          SlayAI
        </Link>
      </div>
    </header>
  )
}