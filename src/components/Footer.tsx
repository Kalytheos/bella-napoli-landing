import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-bold text-cream">Bella Napoli</p>
            <p className="text-cream/50 text-sm mt-1">Pizzería Artesanal · Bogotá, Colombia</p>
          </div>

          <div className="flex items-center gap-2 text-cream/60">
            <Phone size={16} />
            <span className="text-sm">+57 300 123 4567</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Bella Napoli Pizzería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
