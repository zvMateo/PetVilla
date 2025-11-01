import { Service, PetType } from '@/types'

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Clínica Veterinaria San Roque',
    description: 'Atención veterinaria completa las 24 horas. Consultas, cirugías, vacunaciones y emergencias.',
    type: 'veterinario',
    provider: {
      id: 'p1',
      name: 'Dr. Carlos Méndez',
      verified: true,
      yearsExperience: 15,
      bio: 'Especialista en animales pequeños con más de 15 años de experiencia.'
    },
    petTypes: ['perro', 'gato', 'ave', 'roedor'],
    location: {
      address: 'Calle Principal 123',
      city: 'Villa del Rosario',
      coordinates: { lat: 7.8340, lng: -72.4739 }
    },
    rating: 4.8,
    reviewCount: 127,
    price: {
      min: 25000,
      max: 150000,
      currency: '$'
    },
    availability: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      hours: {
        start: '08:00',
        end: '18:00'
      }
    },
    features: ['Emergencias 24h', 'Cirugías', 'Radiografías', 'Laboratorio'],
    phone: '+57 300 123 4567',
    email: 'contacto@sanroque.com'
  },
  {
    id: '2',
    name: 'Peluquería Canina Elegante',
    description: 'Servicios de estética y peluquería profesional para perros y gatos. Baños, cortes de pelo y uñas.',
    type: 'peluqueria',
    provider: {
      id: 'p2',
      name: 'María González',
      verified: true,
      yearsExperience: 8
    },
    petTypes: ['perro', 'gato'],
    location: {
      address: 'Avenida del Parque 45',
      city: 'Villa del Rosario',
      coordinates: { lat: 7.8350, lng: -72.4749 }
    },
    rating: 4.6,
    reviewCount: 89,
    price: {
      min: 30000,
      max: 80000,
      currency: '$'
    },
    availability: {
      days: ['Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      hours: {
        start: '09:00',
        end: '17:00'
      }
    },
    features: ['Baños', 'Cortes de pelo', 'Corte de uñas', 'Cepillado dental'],
    phone: '+57 310 987 6543'
  },
  {
    id: '3',
    name: 'Paseos y Aventuras',
    description: 'Servicio de paseo personalizado para perros. Ejercicio, socialización y diversión garantizada.',
    type: 'paseador',
    provider: {
      id: 'p3',
      name: 'Javier Ramírez',
      verified: true,
      yearsExperience: 5
    },
    petTypes: ['perro'],
    location: {
      address: 'Barrio Centro',
      city: 'Villa del Rosario'
    },
    rating: 4.9,
    reviewCount: 156,
    price: {
      min: 15000,
      max: 35000,
      currency: '$'
    },
    availability: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      hours: {
        start: '06:00',
        end: '20:00'
      }
    },
    features: ['Paseos grupales', 'Paseos individuales', 'Parques', 'Entrenamiento básico'],
    phone: '+57 315 456 7890'
  },
  {
    id: '4',
    name: 'Guardería Mascotas Felices',
    description: 'Cuidado diurno para tu mascota mientras trabajas. Espacios seguros, juego y atención personalizada.',
    type: 'guarderia',
    provider: {
      id: 'p4',
      name: 'Ana Martínez',
      verified: true,
      yearsExperience: 10
    },
    petTypes: ['perro', 'gato'],
    location: {
      address: 'Calle Los Rosales 78',
      city: 'Villa del Rosario'
    },
    rating: 4.7,
    reviewCount: 203,
    price: {
      min: 20000,
      max: 50000,
      currency: '$'
    },
    availability: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      hours: {
        start: '07:00',
        end: '19:00'
      }
    },
    features: ['Espacios seguros', 'Alimentación', 'Juego supervisado', 'Cámaras en vivo'],
    phone: '+57 320 111 2233'
  },
  {
    id: '5',
    name: 'Veterinaria El Refugio',
    description: 'Atención veterinaria especializada en perros y gatos. Consultas, vacunaciones y desparasitaciones.',
    type: 'veterinario',
    provider: {
      id: 'p5',
      name: 'Dra. Laura Sánchez',
      verified: true,
      yearsExperience: 12
    },
    petTypes: ['perro', 'gato'],
    location: {
      address: 'Carrera 10 # 25-30',
      city: 'Villa del Rosario'
    },
    rating: 4.5,
    reviewCount: 94,
    price: {
      min: 30000,
      max: 120000,
      currency: '$'
    },
    availability: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
      hours: {
        start: '08:30',
        end: '17:30'
      }
    },
    features: ['Consultas', 'Vacunaciones', 'Desparasitaciones', 'Esterilizaciones'],
    phone: '+57 301 555 1234'
  },
  {
    id: '6',
    name: 'Academia Canina Villa',
    description: 'Adiestramiento y educación canina. Obediencia básica, avanzada y corrección de conductas.',
    type: 'adiestramiento',
    provider: {
      id: 'p6',
      name: 'Roberto Vargas',
      verified: true,
      yearsExperience: 7
    },
    petTypes: ['perro'],
    location: {
      address: 'Finca La Esperanza, Vía Principal',
      city: 'Villa del Rosario'
    },
    rating: 4.8,
    reviewCount: 112,
    price: {
      min: 40000,
      max: 100000,
      currency: '$'
    },
    availability: {
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      hours: {
        start: '08:00',
        end: '18:00'
      }
    },
    features: ['Obediencia básica', 'Obediencia avanzada', 'Corrección de conductas', 'Clases grupales'],
    phone: '+57 312 777 8888'
  }
]

