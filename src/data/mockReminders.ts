import { Reminder } from '@/types'

export const mockReminders: Reminder[] = [
  {
    id: 'rem1',
    title: 'Vacunación anual',
    description: 'Vacuna anual de refuerzo para Max',
    date: '2024-02-15',
    type: 'vacunacion',
    petName: 'Max',
    completed: false
  },
  {
    id: 'rem2',
    title: 'Desparasitación',
    description: 'Desparasitación mensual para Luna',
    date: '2024-02-01',
    type: 'desparasitacion',
    petName: 'Luna',
    completed: false
  },
  {
    id: 'rem3',
    title: 'Corte de pelo',
    description: 'Cita de peluquería para Toby',
    date: '2024-01-25',
    type: 'peluqueria',
    petName: 'Toby',
    completed: true
  },
  {
    id: 'rem4',
    title: 'Consulta veterinaria',
    description: 'Revisión anual para Bella',
    date: '2024-03-10',
    type: 'veterinario',
    petName: 'Bella',
    completed: false
  }
]

