import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-3">Encuéntranos</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Nuestra <span className="italic text-primary">Ubicación</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">Calle 85 #15-25, Zona G<br />Bogotá, Colombia</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Horario</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Lunes a Jueves: 12:00 PM – 10:00 PM</p>
                  <p>Viernes y Sábado: 12:00 PM – 11:00 PM</p>
                  <p>Domingo: 12:00 PM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <PhoneIcon size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">Teléfono</h3>
                <p className="text-muted-foreground">+57 300 123 4567</p>
                <p className="text-muted-foreground">+57 (1) 456 7890</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6!2d-74.05!3d4.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDAnMTIuMCJOIDc0wrAwMycwMC4wIlc!5e0!3m2!1ses!2sco!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Bella Napoli Pizzería"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
