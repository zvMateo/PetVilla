export type PetType = 'perro' | 'gato' | 'ave' | 'roedor' | 'otro'
export type ServiceType = 'veterinario' | 'peluqueria' | 'paseador' | 'guarderia' | 'adiestramiento'

export interface Location {
  address: string
  city: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  comment: string
  date: string
  petType?: PetType
}

export interface Service {
  id: string
  name: string
  description: string
  type: ServiceType
  provider: Provider
  petTypes: PetType[]
  location: Location
  rating: number
  reviewCount: number
  price?: {
    min: number
    max: number
    currency: string
  }
  images?: string[]
  availability: {
    days: string[]
    hours: {
      start: string
      end: string
    }
  }
  features: string[]
  phone?: string
  email?: string
  website?: string
}

export interface Provider {
  id: string
  name: string
  avatar?: string
  bio?: string
  verified: boolean
  yearsExperience?: number
}

export interface Appointment {
  id: string
  serviceId: string
  serviceName: string
  providerName: string
  date: string
  time: string
  petName: string
  petType: PetType
  status: 'pendiente' | 'confirmada' | 'completada' | 'cancelada'
  notes?: string
}

export interface Reminder {
  id: string
  title: string
  description: string
  date: string
  type: 'vacunacion' | 'desparasitacion' | 'peluqueria' | 'veterinario' | 'otro'
  petName: string
  completed: boolean
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  phone?: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

