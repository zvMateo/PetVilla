import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, AuthState } from '@/types'

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string, phone?: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = 'petvilla_auth'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY)
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, _password: string) => {
    setIsLoading(true)
    try {
      // Simulación de llamada API
      await new Promise((resolve) => setTimeout(resolve, 800))
      
      // En producción, aquí harías una llamada real a tu API
      // Por ahora, simulamos un login exitoso
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0], // Usar parte del email como nombre por defecto
        phone: '+57 300 123 4567',
        createdAt: new Date().toISOString()
      }

      setUser(mockUser)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser))
    } catch (error) {
      throw new Error('Credenciales inválidas')
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, _password: string, phone?: string) => {
    setIsLoading(true)
    try {
      // Simulación de llamada API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // En producción, aquí harías una llamada real a tu API
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name,
        phone,
        createdAt: new Date().toISOString()
      }

      setUser(newUser)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
    } catch (error) {
      throw new Error('Error al registrar usuario')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}

