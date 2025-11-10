import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <div className="text-6xl mb-4">🐾</div>
          <h2 className="text-3xl font-bold mb-2">
            ¡Ups! Página no encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            Parece que tu mascota se perdió en el camino. Esta página no existe
            o fue movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Volver al inicio
            </Button>
          </Link>
          <Link to="/servicios">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Search className="mr-2 h-5 w-5" />
              Buscar servicios
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
