import { Flame, Leaf, ChefHat, Truck } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Horno de Leña",
    description: "Nuestras pizzas se cocinan en un auténtico horno de leña importado de Nápoles.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Seleccionamos los mejores ingredientes frescos todos los días del mercado local.",
  },
  {
    icon: ChefHat,
    title: "Recetas Italianas",
    description: "Recetas familiares transmitidas por generaciones desde la tradición napolitana.",
  },
  {
    icon: Truck,
    title: "Domicilio Rápido",
    description: "Entrega a domicilio en Bogotá en menos de 45 minutos o es gratis.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-body uppercase tracking-[0.3em] text-sm mb-3">¿Por qué elegirnos?</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
            La Diferencia <span className="italic text-gold">Bella Napoli</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-2xl border border-cream/10 bg-cream/5 hover:bg-cream/10 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">{feature.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
