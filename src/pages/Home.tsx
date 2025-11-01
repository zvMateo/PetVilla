import { Link, useNavigate } from 'react-router-dom'
import { Search, MapPin, Calendar, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockServices } from '@/data/mockServices'

export function Home() {
  const navigate = useNavigate()
  const featuredServices = mockServices.slice(0, 3)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/servicios')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Encuentra los mejores servicios</span>
            <br />
            <span className="text-foreground">para tu mascota</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conectamos a los dueños de mascotas con veterinarios, peluquerías y paseadores confiables en Villa del Rosario
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
              <Input 
                type="search" 
                placeholder="Buscar servicios..." 
                className="pl-10 border-primary/20 focus:border-primary focus:ring-primary"
              />
            </div>
            <Button type="submit" className="px-6 shadow-primary hover:shadow-primary/50 transition-shadow">
              Buscar
            </Button>
          </div>
        </form>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-primary/10">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Ubicación</CardTitle>
            <CardDescription>
              Encuentra servicios cerca de ti con nuestro mapa interactivo
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-secondary/20 hover:border-secondary/40 transition-colors hover:shadow-accent/10">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-secondary" />
            </div>
            <CardTitle>Reservas Fáciles</CardTitle>
            <CardDescription>
              Agenda citas de manera rápida y sencilla
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-accent/20 hover:border-accent/40 transition-colors hover:shadow-accent/10">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <Star className="h-6 w-6 text-accent fill-accent" />
            </div>
            <CardTitle>Reseñas Confiables</CardTitle>
            <CardDescription>
              Lee opiniones de otros dueños de mascotas
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Featured Services */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Servicios Destacados</h3>
          <Link to="/servicios">
            <Button variant="ghost">
              Ver todos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all hover:scale-[1.02] border-primary/10 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {service.type === 'veterinario' ? 'Veterinario' :
                     service.type === 'peluqueria' ? 'Peluquería' :
                     service.type === 'paseador' ? 'Paseador' :
                     service.type === 'guarderia' ? 'Guardería' : 'Adiestramiento'}
                  </Badge>
                  <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="text-sm font-medium text-foreground">{service.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>{service.location.address}</span>
                </div>
                <Link to={`/servicios/${service.id}`}>
                  <Button className="w-full shadow-primary hover:shadow-primary/50 transition-shadow">
                    Ver detalles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section>
        <h3 className="text-2xl font-bold mb-6">Servicios Populares</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors hover:shadow-primary/10 group">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🐾</span>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">Veterinarios</CardTitle>
              <CardDescription>
                Atención médica profesional para tu mascota
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/servicios?veterinario">
                <Button variant="outline" className="w-full border-primary/20 hover:border-primary hover:bg-primary/5">
                  Ver Veterinarios
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors hover:shadow-accent/10 group">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                <span className="text-2xl">✂️</span>
              </div>
              <CardTitle className="group-hover:text-secondary transition-colors">Peluquería</CardTitle>
              <CardDescription>
                Cuidado y estética para tu mascota
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/servicios?peluqueria">
                <Button variant="outline" className="w-full border-secondary/20 hover:border-secondary hover:bg-secondary/5">
                  Ver Peluquerías
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-accent/20 hover:border-accent/40 transition-colors hover:shadow-accent/10 group">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <span className="text-2xl">🏃</span>
              </div>
              <CardTitle className="group-hover:text-accent transition-colors">Paseadores</CardTitle>
              <CardDescription>
                Ejercicio y diversión para tu mascota
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/servicios?paseador">
                <Button variant="outline" className="w-full border-accent/20 hover:border-accent hover:bg-accent/5">
                  Ver Paseadores
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
