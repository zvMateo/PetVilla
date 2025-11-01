import { useParams, Link, useNavigate } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, Star, Calendar, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockServices } from '@/data/mockServices'
import { mockReviews } from '@/data/mockReviews'
import { PetType } from '@/types'

export function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const service = mockServices.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Servicio no encontrado</h2>
        <Button onClick={() => navigate('/servicios')}>Volver a servicios</Button>
      </div>
    )
  }

  const reviews = mockReviews[service.id] || []
  const petTypeLabels: Record<PetType, string> = {
    perro: 'Perros',
    gato: 'Gatos',
    ave: 'Aves',
    roedor: 'Roedores',
    otro: 'Otros'
  }

  const serviceTypeLabels: Record<string, string> = {
    veterinario: 'Veterinario',
    peluqueria: 'Peluquería',
    paseador: 'Paseador',
    guarderia: 'Guardería',
    adiestramiento: 'Adiestramiento'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => navigate('/servicios')} className="mb-4">
        ← Volver a servicios
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {serviceTypeLabels[service.type]}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-sm text-muted-foreground">({service.reviewCount} reseñas)</span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-2">{service.name}</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span>{service.location.address}, {service.location.city}</span>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.petTypes.map((petType) => (
                <Badge key={petType} variant="outline" className="text-sm">
                  {petTypeLabels[petType]}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="info" className="w-full">
            <TabsList>
              <TabsTrigger value="info">Información</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas ({reviews.length})</TabsTrigger>
              <TabsTrigger value="availability">Disponibilidad</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Características</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {service.price && (
                <Card>
                  <CardHeader>
                    <CardTitle>Precios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      ${service.price.min.toLocaleString()} - ${service.price.max.toLocaleString()} {service.price.currency}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Los precios pueden variar según el servicio específico
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>
                              {review.userName.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="font-semibold">{review.userName}</p>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(review.date).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                            {review.petType && (
                              <Badge variant="outline" className="mt-2">
                                {petTypeLabels[review.petType]}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    Aún no hay reseñas para este servicio
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="availability">
              <Card>
                <CardHeader>
                  <CardTitle>Horarios de Atención</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Días disponibles</p>
                        <p className="text-muted-foreground">
                          {service.availability.days.join(', ')}
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Horario</p>
                        <p className="text-muted-foreground">
                          {service.availability.hours.start} - {service.availability.hours.end}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {service.provider.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{service.provider.name}</CardTitle>
                  {service.provider.verified && (
                    <Badge variant="default" className="mt-1">
                      Verificado
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {service.provider.bio && (
                <p className="text-sm text-muted-foreground">{service.provider.bio}</p>
              )}
              {service.provider.yearsExperience && (
                <p className="text-sm">
                  <span className="font-medium">Experiencia:</span>{' '}
                  {service.provider.yearsExperience} años
                </p>
              )}

              <Separator />

              <div className="space-y-3">
                {service.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${service.phone}`} className="text-sm hover:text-primary">
                      {service.phone}
                    </a>
                  </div>
                )}
                {service.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${service.email}`} className="text-sm hover:text-primary">
                      {service.email}
                    </a>
                  </div>
                )}
                {service.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary"
                    >
                      Sitio web
                    </a>
                  </div>
                )}
              </div>

              <Link to={`/reservar/${service.id}`}>
                <Button className="w-full">Reservar cita</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

