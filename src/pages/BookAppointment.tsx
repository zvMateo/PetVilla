import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { mockServices } from '@/data/mockServices'
import { PetType } from '@/types'

export function BookAppointment() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const service = mockServices.find((s) => s.id === id)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const [formData, setFormData] = useState({
    petName: '',
    petType: '' as PetType | '',
    ownerName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  })

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Servicio no encontrado</h2>
        <Button onClick={() => navigate('/servicios')}>Volver a servicios</Button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular reserva
    setShowSuccessDialog(true)
  }

  const handleCloseDialog = () => {
    setShowSuccessDialog(false)
    navigate('/mis-reservas')
  }

  // Generar horarios disponibles (ejemplo simplificado)
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" onClick={() => navigate(`/servicios/${service.id}`)} className="mb-4">
        ← Volver
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Reservar cita</CardTitle>
              <CardDescription>
                Completa el formulario para agendar tu cita en {service.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="petName">Nombre de la mascota *</Label>
                    <Input
                      id="petName"
                      required
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      placeholder="Ej: Max, Luna..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="petType">Tipo de mascota *</Label>
                    <Select
                      value={formData.petType}
                      onValueChange={(value) => setFormData({ ...formData, petType: value as PetType })}
                      required
                    >
                      <SelectTrigger id="petType">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="perro">Perro</SelectItem>
                        <SelectItem value="gato">Gato</SelectItem>
                        <SelectItem value="ave">Ave</SelectItem>
                        <SelectItem value="roedor">Roedor</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Nombre del dueño *</Label>
                    <Input
                      id="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Hora *</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                      required
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Seleccionar hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notas adicionales (opcional)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Información adicional que quieras compartir..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Confirmar reserva
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Resumen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Servicio</p>
                <p className="font-medium">{service.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Proveedor</p>
                <p className="font-medium">{service.provider.name}</p>
              </div>
              {service.price && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Precio estimado</p>
                  <p className="font-medium">
                    ${service.price.min.toLocaleString()} - ${service.price.max.toLocaleString()} {service.price.currency}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
                <p className="text-sm">{service.location.address}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¡Reserva confirmada!</DialogTitle>
            <DialogDescription>
              Tu cita ha sido agendada exitosamente. Recibirás un correo de confirmación.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Mascota:</span> {formData.petName}
              </p>
              <p className="text-sm">
                <span className="font-medium">Fecha:</span>{' '}
                {new Date(formData.date).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-sm">
                <span className="font-medium">Hora:</span> {formData.time}
              </p>
            </div>
            <Button onClick={handleCloseDialog} className="w-full">
              Ver mis reservas
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

