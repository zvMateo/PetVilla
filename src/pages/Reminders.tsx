import { useState } from 'react'
import { Bell, Calendar, CheckCircle2, Circle, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { mockReminders } from '@/data/mockReminders'
import { Reminder } from '@/types'

export function Reminders() {
  const [reminders, setReminders] = useState<Reminder[]>(mockReminders)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [newReminder, setNewReminder] = useState({
    title: '',
    description: '',
    date: '',
    type: 'otro' as Reminder['type'],
    petName: ''
  })

  const handleToggleComplete = (id: string) => {
    setReminders(reminders.map(rem =>
      rem.id === id ? { ...rem, completed: !rem.completed } : rem
    ))
  }

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault()
    const reminder: Reminder = {
      id: `rem${Date.now()}`,
      ...newReminder,
      completed: false
    }
    setReminders([...reminders, reminder])
    setNewReminder({
      title: '',
      description: '',
      date: '',
      type: 'otro',
      petName: ''
    })
    setIsDialogOpen(false)
  }

  const typeLabels: Record<Reminder['type'], string> = {
    vacunacion: 'Vacunación',
    desparasitacion: 'Desparasitación',
    peluqueria: 'Peluquería',
    veterinario: 'Veterinario',
    otro: 'Otro'
  }

  const typeColors: Record<Reminder['type'], string> = {
    vacunacion: 'bg-blue-100 text-blue-800',
    desparasitacion: 'bg-green-100 text-green-800',
    peluqueria: 'bg-purple-100 text-purple-800',
    veterinario: 'bg-red-100 text-red-800',
    otro: 'bg-gray-100 text-gray-800'
  }

  const pendingReminders = reminders.filter(r => !r.completed)
  const completedReminders = reminders.filter(r => r.completed)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Recordatorios</h1>
          <p className="text-muted-foreground text-lg">
            Mantén un registro de los cuidados y citas de tus mascotas
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo recordatorio
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear recordatorio</DialogTitle>
              <DialogDescription>
                Agrega un nuevo recordatorio para el cuidado de tu mascota
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddReminder} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  required
                  value={newReminder.title}
                  onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                  placeholder="Ej: Vacunación anual"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="petName">Nombre de la mascota *</Label>
                <Input
                  id="petName"
                  required
                  value={newReminder.petName}
                  onChange={(e) => setNewReminder({ ...newReminder, petName: e.target.value })}
                  placeholder="Ej: Max"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Tipo *</Label>
                <Select
                  value={newReminder.type}
                  onValueChange={(value) => setNewReminder({ ...newReminder, type: value as Reminder['type'] })}
                >
                  <SelectTrigger id="type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(typeLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Fecha *</Label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={newReminder.date}
                  onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  value={newReminder.description}
                  onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
                  placeholder="Notas adicionales..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full">Crear recordatorio</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Pending Reminders */}
      {pendingReminders.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Pendientes ({pendingReminders.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingReminders.map((reminder) => (
              <Card key={reminder.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={typeColors[reminder.type]}>
                          {typeLabels[reminder.type]}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{reminder.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Para: {reminder.petName}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleComplete(reminder.id)}
                      className="flex-shrink-0"
                    >
                      <Circle className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(reminder.date).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    {reminder.description && (
                      <p className="text-sm text-muted-foreground">{reminder.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Completed Reminders */}
      {completedReminders.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Completados ({completedReminders.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedReminders.map((reminder) => (
              <Card key={reminder.id} className="opacity-60">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={typeColors[reminder.type]}>
                          {typeLabels[reminder.type]}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg line-through">{reminder.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Para: {reminder.petName}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleComplete(reminder.id)}
                      className="flex-shrink-0"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(reminder.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {reminders.length === 0 && (
        <Card className="p-12 text-center">
          <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No hay recordatorios</h3>
          <p className="text-muted-foreground mb-4">
            Crea tu primer recordatorio para mantenerte al día con los cuidados de tus mascotas
          </p>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Crear recordatorio
          </Button>
        </Card>
      )}
    </div>
  )
}

