import { AlertTriangle } from "lucide-react"

export function DevelopmentNote() {
  return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mx-auto max-w-4xl mb-16">
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
        <p className="text-yellow-200 text-sm">
          <span className="font-semibold">Nota de desarrollo:</span> Este contenido es de ejemplo. En el Sprint 2 se
          configurará la base de datos con contenido real
        </p>
      </div>
    </div>
  )
}

export { DevelopmentNote as default }
