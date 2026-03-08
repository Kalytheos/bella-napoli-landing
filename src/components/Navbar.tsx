import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Pizzas", href: "#pizzas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Ubicación", href: "#ubicacion" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-black/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" className="font-display text-2xl font-bold text-cream tracking-wide">
          Bella Napoli
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 hover:text-gold transition-colors text-sm font-body uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+573001234567" className="text-cream/80 hover:text-gold transition-colors flex items-center gap-1 text-sm">
            <Phone size={14} /> +57 300 123 4567
          </a>
          <a
            href="#ordenar"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Ordenar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cream">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-black/98 backdrop-blur-md px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-cream/80 hover:text-gold transition-colors font-body uppercase tracking-widest text-sm border-b border-cream/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ordenar"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Ordenar Ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
