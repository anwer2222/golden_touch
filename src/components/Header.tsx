import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b bg-accent-foreground">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center md:justify-between justify-center">
        <Link href="/" className="flex items-center gap-3">
          <Image className="rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-semibold" src="/office_icon.png" alt="" height={50} width={50}/>
          <div>
            <div className="text-lg font-semibold text-[#e3d278]">Golden Touch Interiors</div>
            <div className="text-xs text-secondary">Design that feels like home</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#about" className="text-secondary hover:text-dark">About</Link>
          <Link href="#services" className="text-secondary hover:text-dark">Services</Link>
          <Link href="#gallery" className="text-secondary hover:text-dark">Gallery</Link>
          <Link href="#contact" className="text-secondary hover:text-dark">Contact</Link>
        </nav>
      </div>
    </header>
  )
}