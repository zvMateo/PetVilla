import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Star, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { mockServices } from '@/data/mockServices'
import { ServiceType, PetType } from '@/types'

export function Services() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedServiceType, setSelectedServiceType] = useState<string>('all')
  const [selectedPetType, setSelectedPetType] = useState<string>('all')

  const filteredServices = useMemo(() => {
    return mockServices.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesServiceType = selectedServiceType === 'all' || service.type === selectedServiceType
      const matchesPetType = selectedPetType === 'all' || service.petTypes.includes(selectedPetType as PetType)
      
      return matchesSearch && matchesServiceType && matchesPetType
    })
  }, [searchQuery, selectedServiceType, selectedPetType])

  const serviceTypeLabels: Record<ServiceType | 'all', string> = {
    all: 'Todos los servicios',
    veterinario: 'Veterinarios',
    peluqueria: 'Peluquerías',
    paseador: 'Paseadores',
    guarderia: 'Guarderías',
    adiestramiento: 'Adiestramiento'
  }

  const petTypeLabels: Record<PetType | 'all', string> = {
    all: 'Todos los tipos',
    perro: 'Perros',
    gato: 'Gatos',
    ave: 'Aves',
    roedor: 'Roedores',
    otro: 'Otros'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gradient">Servicios Disponibles</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Encuentra los mejores servicios para tu mascota en Villa del Rosario
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
            <Input
              type="search"
              placeholder="Buscar servicios..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-primary/20 focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <Select value={selectedServiceType} onValueChange={setSelectedServiceType}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Tipo de servicio" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(serviceTypeLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPetType} onValueChange={setSelectedPetType}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Tipo de mascota" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(petTypeLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(selectedServiceType !== 'all' || selectedPetType !== 'all' || searchQuery) && (
            <Button
              variant="outline"
              onClick={() => {
                setSelectedServiceType('all')
                setSelectedPetType('all')
                setSearchQuery('')
              }}
            >
              Limpiar filtros
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          {filteredServices.length} {filteredServices.length === 1 ? 'servicio encontrado' : 'servicios encontrados'}
        </p>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all hover:scale-[1.02] border-primary/10 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {serviceTypeLabels[service.type]}
                  </Badge>
                  <div className="flex items-center gap-1 bg-warning/10 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="text-sm font-medium text-foreground">{service.rating}</span>
                    <span className="text-xs text-muted-foreground">({service.reviewCount})</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{service.location.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.petTypes.map((petType) => (
                      <Badge key={petType} variant="outline" className="text-xs">
                        {petTypeLabels[petType]}
                      </Badge>
                    ))}
                  </div>

                  {service.price && (
                    <p className="text-sm font-medium">
                      Precio: ${service.price.min.toLocaleString()} - ${service.price.max.toLocaleString()} {service.price.currency}
                    </p>
                  )}

                  <Link to={`/servicios/${service.id}`}>
                    <Button className="w-full shadow-primary hover:shadow-primary/50 transition-shadow">
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground text-lg">
            No se encontraron servicios con los filtros seleccionados.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSelectedServiceType('all')
              setSelectedPetType('all')
              setSearchQuery('')
            }}
          >
            Limpiar filtros
          </Button>
        </Card>
      )}
    </div>
  )
}

