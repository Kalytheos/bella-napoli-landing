import { UtensilsCrossed } from "lucide-react";

const categories = [
  {
    name: "Pizzas",
    items: [
      { name: "Margherita", price: "$28.000" },
      { name: "Pepperoni", price: "$32.000" },
      { name: "Quattro Formaggi", price: "$35.000" },
      { name: "Prosciutto & Rúgula", price: "$38.000" },
    ],
  },
  {
    name: "Pastas",
    items: [
      { name: "Spaghetti Bolognese", price: "$26.000" },
      { name: "Fettuccine Alfredo", price: "$28.000" },
      { name: "Lasagna Clásica", price: "$30.000" },
      { name: "Penne all'Arrabbiata", price: "$24.000" },
    ],
  },
  {
    name: "Ensaladas",
    items: [
      { name: "Ensalada Caprese", price: "$18.000" },
      { name: "Ensalada César", price: "$20.000" },
      { name: "Ensalada Mediterránea", price: "$22.000" },
    ],
  },
  {
    name: "Bebidas",
    items: [
      { name: "Limonada Natural", price: "$8.000" },
      { name: "Jugo de Fruta", price: "$10.000" },
      { name: "Agua con Gas", price: "$6.000" },
      { name: "Cerveza Artesanal", price: "$14.000" },
    ],
  },
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-warm-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-body uppercase tracking-[0.3em] text-sm mb-3">Lo Que Ofrecemos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">
            Nuestro <span className="italic text-gold">Menú</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-display text-2xl font-bold text-gold mb-6 flex items-center gap-3">
                <UtensilsCrossed size={20} />
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b border-cream/10 pb-3">
                    <span className="text-cream/80 font-body">{item.name}</span>
                    <span className="text-gold font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-block border-2 border-gold text-gold px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wider hover:bg-gold/10 transition-colors"
          >
            Ver Menú Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
