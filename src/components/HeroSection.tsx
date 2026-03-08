import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPizza}
          alt="Pizza artesanal saliendo de un horno de leña"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/60 to-warm-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-gold font-body uppercase tracking-[0.3em] text-sm mb-4">
          Pizzería Artesanal en Bogotá
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
          Pizza Auténtica al{" "}
          <span className="italic text-gold">Horno de Leña</span>
        </h1>
        <p className="text-cream/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Masa artesanal, ingredientes frescos y el sabor tradicional italiano que solo Bella Napoli puede ofrecer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ordenar"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-all hover:scale-105"
          >
            Ordenar en Línea
          </a>
          <a
            href="#menu"
            className="border-2 border-cream/50 text-cream px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-cream/10 transition-all hover:scale-105"
          >
            Ver Menú
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
