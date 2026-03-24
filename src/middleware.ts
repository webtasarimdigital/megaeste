import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['tr', 'en']
let defaultLocale = 'tr'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith(`/_next/`) ||
    pathname.startsWith(`/api/`) ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
}
