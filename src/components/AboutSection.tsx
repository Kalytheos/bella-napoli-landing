import chefImage from "@/assets/chef.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={chefImage}
              alt="Chef de Bella Napoli"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg hidden md:block">
              <p className="font-display text-3xl font-bold">+15</p>
              <p className="text-sm font-body uppercase tracking-wider">Años de Tradición</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-3">Nuestra Historia</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Una Familia, una <span className="italic text-primary">Pasión</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bella Napoli nació del sueño de la familia Rossi de traer el auténtico sabor de Nápoles a las calles de Bogotá. Desde 2010, hemos perfeccionado cada receta con la misma dedicación con la que nuestros abuelos horneaban en Italia.
              </p>
              <p>
                Cada pizza que sale de nuestro horno de leña cuenta una historia: la de ingredientes cuidadosamente seleccionados, masa fermentada por 48 horas y el amor por la cocina italiana que nos impulsa cada día.
              </p>
              <p>
                Hoy, somos el destino favorito de los bogotanos que buscan una experiencia culinaria italiana genuina, en un ambiente cálido y acogedor que te transporta directamente al corazón de Italia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
