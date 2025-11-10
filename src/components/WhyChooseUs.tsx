import { CheckCircle2, Shield, Clock, Heart } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Proveedores Verificados',
      description: 'Todos nuestros profesionales están certificados y verificados',
      stat: '100% verificados',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: CheckCircle2,
      title: 'Proceso Simple',
      description: 'Reserva en 3 pasos: Busca, Elige y Confirma',
      stat: '< 2 minutos',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Clock,
      title: 'Recordatorios Automáticos',
      description: 'Nunca olvides las vacunas o citas de tu mascota',
      stat: '24/7 activos',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Heart,
      title: 'Hecho con Amor',
      description: 'Diseñado pensando en ti y en tu mascota',
      stat: '4.8/5 ⭐',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diseñado <span className="text-gradient">para ti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada detalle de PetVilla está pensado para hacer tu vida más fácil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="text-center border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${reason.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <reason.icon className={`h-8 w-8 ${reason.color}`} />
                </div>
                <CardTitle className="text-lg mb-2">{reason.title}</CardTitle>
                <CardDescription className="text-sm mb-4">
                  {reason.description}
                </CardDescription>
                <div className={`text-2xl font-bold ${reason.color}`}>
                  {reason.stat}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* User-Centered Design Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Heart className="h-5 w-5 text-primary fill-primary" />
            <span className="text-sm font-medium">
              Diseñado con metodología centrada en el usuario
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
