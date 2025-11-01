import { Routes, Route, Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { BookAppointment } from './pages/BookAppointment'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Reminders } from './pages/Reminders'
import { MyAppointments } from './pages/MyAppointments'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './contexts/AuthContext'

function PublicRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }
  
  return <>{children}</>
}

function App() {
  return (
    <Routes>
      {/* Rutas públicas sin layout */}
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />
      
      {/* Rutas con layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:id" element={<ServiceDetail />} />
        
        {/* Rutas protegidas */}
        <Route path="/reservar/:id" element={
          <ProtectedRoute>
            <BookAppointment />
          </ProtectedRoute>
        } />
        <Route path="/recordatorios" element={
          <ProtectedRoute>
            <Reminders />
          </ProtectedRoute>
        } />
        <Route path="/mis-reservas" element={
          <ProtectedRoute>
            <MyAppointments />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  )
}

export default App
