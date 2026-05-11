import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PREVIEW_KEY = 'relais2025'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Allow all non-home pages freely
  if (pathname !== '/') {
    return NextResponse.next()
  }

  // Check for preview parameter
  const preview = searchParams.get('preview')
  if (preview === PREVIEW_KEY) {
    // Set cookie so user doesn't need param on every page
    const response = NextResponse.next()
    response.cookies.set('preview_mode', PREVIEW_KEY, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 24 hours
    })
    return response
  }

  // Check for preview cookie (already authenticated)
  const previewCookie = request.cookies.get('preview_mode')
  if (previewCookie?.value === PREVIEW_KEY) {
    return NextResponse.next()
  }

  // Redirect to coming soon
  return NextResponse.redirect(new URL('/coming-soon.html', request.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images|videos|coming-soon).*)'],
}
