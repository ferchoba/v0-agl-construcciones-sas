'use client'

import * as React from 'react'

// Fallback ThemeProvider sin dependencias externas.
// Si en el futuro se instala 'next-themes', se puede restaurar la implementación anterior.
export interface ThemeProviderProps {
  children: React.ReactNode
  // props opcionales ignorados por ahora para compatibilidad de llamadas
  [key: string]: any
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>
}
