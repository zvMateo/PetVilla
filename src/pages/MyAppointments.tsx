import { useState } from 'react'
import { Calendar, Clock, MapPin, Phone, CheckCircle2, XCircle, ClockIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockServices } from '@/data/mockServices'
import { Appointment } from '@/types'

// Mock appointments
const mockAppointments: Appointment[] = [
  {
    id: 'apt1',
    serviceId: '1',
    serviceName: 'Clínica Veterinaria San Roque',
    providerName: 'Dr. Carlos Méndez',
    date: '2024-02-15',
    time: '10:00',
    petName: 'Max',
    petType: 'perro',
    status: 'confirmada',
    notes: 'Consulta de rutina'
  },
  {
    id: 'apt2',
    serviceId: '2',
    serviceName: 'Peluquería Canina Elegante',
    providerName: 'María González',
    date: '2024-01-25',
    time: '14:00',
    petName: 'Luna',
    petType: 'gato',
    status: 'completada',
    notes: 'Corte de pelo y baño'
  },
  {
    id: 'apt3',
    serviceId: '3',
    serviceName: 'Paseos y Aventuras',
    providerName: 'Javier Ramírez',
    date: '2024-01-20',
    time: '08:00',
    petName: 'Toby',
    petType: 'perro',
    status: 'completada'
  },
  {
    id: 'apt4',
    serviceId: '5',
    serviceName: 'Veterinaria El Refugio',
    providerName: 'Dra. Laura Sánchez',
    date: '2024-01-18',
    time: '15:30',
    petName: 'Bella',
    petType: 'gato',
    status: 'cancelada'
  }
]

export function MyAppointments() {
  const [appointments] = useState<Appointment[]>(mockAppointments)

  const statusConfig: Record<Appointment['status'], { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline', icon: any }> = {
    pendiente: {
      label: 'Pendiente',
      variant: 'outline',
      icon: ClockIcon
    },
    confirmada: {
      label: 'Confirmada',
      variant: 'default',
      icon: CheckCircle2
    },
    completada: {
      label: 'Completada',
      variant: 'secondary',
      icon: CheckCircle2
    },
    cancelada: {
      label: 'Cancelada',
      variant: 'destructive',
      icon: XCircle
    }
  }

  const getServiceById = (serviceId: string) => {
    return mockServices.find(s => s.id === serviceId)
  }

  const pendingAppointments = appointments.filter(apt => apt.status === 'pendiente' || apt.status === 'confirmada')
  const pastAppointments = appointments.filter(apt => apt.status === 'completada' || apt.status === 'cancelada')

  const petTypeLabels: Record<string, string> = {
    perro: 'Perro',
    gato: 'Gato',
    ave: 'Ave',
    roedor: 'Roedor',
    otro: 'Otro'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Mis Reservas</h1>
        <p className="text-muted-foreground text-lg">
          Gestiona tus citas y reservas de servicios para tus mascotas
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">
            Próximas ({pendingAppointments.length})
          </TabsTrigger>
          <TabsTrigger value="past">
            Historial ({pastAppointments.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {pendingAppointments.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {pendingAppointments.map((appointment) => {
                const service = getServiceById(appointment.serviceId)
                const statusInfo = statusConfig[appointment.status]
                const StatusIcon = statusInfo.icon

                return (
                  <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle>{appointment.serviceName}</CardTitle>
                            <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                              <StatusIcon className="h-3 w-3" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <CardDescription>
                            Con {appointment.providerName}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Fecha</p>
                            <p className="font-medium">
                              {new Date(appointment.date).toLocaleDateString('es-ES', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Hora</p>
                            <p className="font-medium">{appointment.time}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Mascota</p>
                          <p className="font-medium">{appointment.petName}</p>
                          <Badge variant="outline" className="mt-1">
                            {petTypeLabels[appointment.petType]}
                          </Badge>
                        </div>
                        {service && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">Ubicación</p>
                              <p className="text-sm font-medium">{service.location.address}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      {appointment.notes && (
                        <div className="mt-4 p-3 bg-muted rounded-md">
                          <p className="text-sm">
                            <span className="font-medium">Notas:</span> {appointment.notes}
                          </p>
                        </div>
                      )}
                      {service?.phone && (
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <a href={`tel:${service.phone}`}>
                              <Phone className="h-4 w-4 mr-2" />
                              Llamar
                            </a>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No hay citas próximas</h3>
              <p className="text-muted-foreground mb-4">
                Cuando reserves una cita, aparecerá aquí
              </p>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastAppointments.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {pastAppointments.map((appointment) => {
                const statusInfo = statusConfig[appointment.status]
                const StatusIcon = statusInfo.icon

                return (
                  <Card key={appointment.id} className={appointment.status === 'cancelada' ? 'opacity-60' : ''}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle>{appointment.serviceName}</CardTitle>
                            <Badge variant={statusInfo.variant} className="flex items-center gap-1">
                              <StatusIcon className="h-3 w-3" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <CardDescription>
                            Con {appointment.providerName}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Fecha</p>
                            <p className="font-medium">
                              {new Date(appointment.date).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Mascota</p>
                          <p className="font-medium">{appointment.petName}</p>
                          <Badge variant="outline" className="mt-1">
                            {petTypeLabels[appointment.petType]}
                          </Badge>
                        </div>
                        {appointment.notes && (
                          <div>
                            <p className="text-sm text-muted-foreground">Notas</p>
                            <p className="text-sm">{appointment.notes}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No hay citas pasadas</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

