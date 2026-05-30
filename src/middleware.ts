import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PREVIEW_KEY = 'relais2025'
const COOKIE_NAME = 'preview_mode'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Never intercept these paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname === '/coming-soon' ||
    pathname === '/preview' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check for preview cookie
  const previewCookie = request.cookies.get(COOKIE_NAME)
  if (previewCookie?.value === PREVIEW_KEY) {
    return NextResponse.next()
  }

  // Redirect everything else to coming soon
  return NextResponse.redirect(
    new URL('/coming-soon', request.url),
    { status: 302 }
  )
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
