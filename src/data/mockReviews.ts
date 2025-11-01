import { Review } from '@/types'

export const mockReviews: Record<string, Review[]> = {
  '1': [
    {
      id: 'r1',
      userId: 'u1',
      userName: 'Carlos Pérez',
      rating: 5,
      comment: 'Excelente atención. El Dr. Méndez es muy profesional y cariñoso con las mascotas. Mi perro se sintió muy cómodo.',
      date: '2024-01-15',
      petType: 'perro'
    },
    {
      id: 'r2',
      userId: 'u2',
      userName: 'María López',
      rating: 5,
      comment: 'Llevé a mi gato en emergencia y lo atendieron inmediatamente. Muy agradecida con el servicio.',
      date: '2024-01-10',
      petType: 'gato'
    },
    {
      id: 'r3',
      userId: 'u3',
      userName: 'Juan Rodríguez',
      rating: 4,
      comment: 'Buena atención y precios razonables. El único detalle es que a veces hay mucha espera.',
      date: '2024-01-05',
      petType: 'perro'
    }
  ],
  '2': [
    {
      id: 'r4',
      userId: 'u4',
      userName: 'Ana Martínez',
      rating: 5,
      comment: 'María es increíble con los perros. Mi mascota siempre sale hermoso y muy feliz.',
      date: '2024-01-12',
      petType: 'perro'
    },
    {
      id: 'r5',
      userId: 'u5',
      userName: 'Pedro García',
      rating: 4,
      comment: 'Buen servicio de peluquería. Recomendado.',
      date: '2024-01-08',
      petType: 'perro'
    }
  ],
  '3': [
    {
      id: 'r6',
      userId: 'u6',
      userName: 'Laura Sánchez',
      rating: 5,
      comment: 'Javier es excelente paseador. Mi perro lo adora y siempre llega muy contento y cansado.',
      date: '2024-01-14',
      petType: 'perro'
    },
    {
      id: 'r7',
      userId: 'u7',
      userName: 'Roberto Vargas',
      rating: 5,
      comment: 'Confiable y profesional. Muy recomendado para paseos.',
      date: '2024-01-11',
      petType: 'perro'
    }
  ]
}

