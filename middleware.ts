import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })

  // If not logged in
  if (!token) return NextResponse.redirect(new URL('/login', req.url))

  // If accessing admin route and not admin
  if (req.nextUrl.pathname.startsWith('/admin') && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }

  return NextResponse.next()
}

// Only match these routes
export const config = {
  matcher: ['/admin/:path*'],
}
