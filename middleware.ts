import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED = ['es','en']
const DEFAULT_LANG = 'es'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) return

  // If path already has /es or /en, pass-through
  const isLangPrefixed = SUPPORTED.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  if (isLangPrefixed) return

  // Root or legacy routes: redirect to default language
  if (pathname === '/' || pathname.startsWith('/servicios') || pathname.startsWith('/proyectos') || pathname.startsWith('/contacto') || pathname.startsWith('/cotizacion') || pathname.startsWith('/quienes-somos') || pathname.startsWith('/privacidad') || pathname.startsWith('/terminos')) {
    const url = req.nextUrl.clone()
    url.pathname = `/${DEFAULT_LANG}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/((?!_next).*)']
}

