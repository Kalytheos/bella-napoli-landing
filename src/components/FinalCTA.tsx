const FinalCTA = () => {
  return (
    <section id="ordenar" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, hsl(40 70% 50% / 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(0 65% 38% / 0.3) 0%, transparent 50%)"
        }} />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          ¿Se Te Antoja una Pizza <span className="italic">Esta Noche?</span>
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Haz tu pedido ahora y disfruta de la mejor pizza artesanal de Bogotá en la comodidad de tu hogar.
        </p>
        <a
          href="#"
          className="inline-block bg-cream text-warm-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-gold transition-colors hover:scale-105 transform"
        >
          Ordenar Ahora
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
