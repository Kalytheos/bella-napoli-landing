import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carolina Mejía",
    rating: 5,
    text: "¡La mejor pizza de Bogotá sin duda! La Margherita es espectacular, se nota que usan ingredientes de primera calidad. El ambiente es súper acogedor.",
  },
  {
    name: "Andrés Gutiérrez",
    rating: 5,
    text: "Pedimos domicilio y llegó en 30 minutos, caliente y perfecta. La Prosciutto & Rúgula es una obra de arte. Repetimos cada semana.",
  },
  {
    name: "Valentina Ospina",
    rating: 5,
    text: "Celebramos nuestro aniversario aquí y fue una experiencia increíble. El chef es encantador y la Quattro Formaggi es adictiva. ¡Volveremos!",
  },
];

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-3">Testimonios</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Lo Que Dicen Nuestros <span className="italic text-primary">Clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card p-8 rounded-2xl shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="font-display font-bold text-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
