export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl animate-bounce">🐾</span>
        </div>
      </div>
    </div>
  );
}

export function FullPageLoader({
  message = "Cargando...",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative mb-8">
        <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-primary"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl animate-bounce">🐾</span>
        </div>
      </div>
      <p className="text-lg text-muted-foreground animate-pulse">{message}</p>
    </div>
  );
}
