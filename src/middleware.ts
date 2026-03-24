import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['tr', 'en']
const defaultLocale = 'tr'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip internal/static paths
  if (
    pathname.startsWith(`/_next/`) ||
    pathname.startsWith(`/api/`) ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if path starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If someone visits /tr or /tr/something, redirect to / or /something (strip /tr)
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const newPath = pathname.replace(`/${defaultLocale}`, '') || '/'
    request.nextUrl.pathname = newPath
    return NextResponse.redirect(request.nextUrl)
  }

  // If path has a non-default locale (e.g. /en/about-us), let it through
  if (pathnameHasLocale) return NextResponse.next()

  // No locale in path → it's Turkish (default). Rewrite internally to /tr/... but keep URL clean.
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
}
