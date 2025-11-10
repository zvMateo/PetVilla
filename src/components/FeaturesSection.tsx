import { Shield, Clock, Heart, Star, MapPin, Bell } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Proveedores Verificados",
    description:
      "Todos nuestros servicios están verificados y cuentan con licencias al día",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Encuentra servicios disponibles en cualquier momento del día",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Heart,
    title: "Cuidado con Amor",
    description: "Profesionales que aman a los animales tanto como tú",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Star,
    title: "Calidad Garantizada",
    description: "Reseñas reales de dueños satisfechos con nuestros servicios",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: MapPin,
    title: "Cerca de Ti",
    description:
      "Servicios en toda Villa del Rosario a solo minutos de distancia",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Bell,
    title: "Recordatorios",
    description: "Nunca olvides las vacunas o citas importantes de tu mascota",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="text-gradient">PetVilla</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos la mejor plataforma para conectar con servicios de calidad
            para tu mascota
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                >
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
