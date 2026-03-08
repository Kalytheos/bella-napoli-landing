import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaProsciutto from "@/assets/pizza-prosciutto.jpg";
import pizzaQuattro from "@/assets/pizza-quattro.jpg";
import pizzaVegetariana from "@/assets/pizza-vegetariana.jpg";
import pizzaHawaiana from "@/assets/pizza-hawaiana.jpg";

const pizzas = [
  {
    name: "Margherita",
    description: "Mozzarella fresca, salsa de tomate San Marzano y albahaca.",
    price: "$28.000",
    image: pizzaMargherita,
  },
  {
    name: "Pepperoni",
    description: "Pepperoni artesanal, mozzarella y salsa de tomate.",
    price: "$32.000",
    image: pizzaPepperoni,
  },
  {
    name: "Prosciutto & Rúgula",
    description: "Prosciutto di Parma, rúgula fresca y parmesano.",
    price: "$38.000",
    image: pizzaProsciutto,
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesano y fontina.",
    price: "$35.000",
    image: pizzaQuattro,
  },
  {
    name: "Vegetariana",
    description: "Pimientos, champiñones, aceitunas, calabacín y albahaca.",
    price: "$30.000",
    image: pizzaVegetariana,
  },
  {
    name: "Hawaiana",
    description: "Jamón, piña caramelizada y mozzarella derretida.",
    price: "$30.000",
    image: pizzaHawaiana,
  },
];

const FeaturedPizzas = () => {
  return (
    <section id="pizzas" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-3">Nuestras Especialidades</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Pizzas <span className="italic text-primary">Favoritas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <div
              key={pizza.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{pizza.name}</h3>
                  <span className="text-primary font-bold text-lg">{pizza.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{pizza.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPizzas;
