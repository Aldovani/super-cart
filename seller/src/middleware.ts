import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

type JWTPayload = {
  merchantId: string
  iat: number
}

const encodedKey = new TextEncoder().encode('SECRET')

export async function decrypt(session: string | undefined = '') {
  try {
    const payload = await jwtVerify<JWTPayload>(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

const publicRoutes = ['/auth/sign-in', '/auth/register', '/']

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = path.startsWith('/app')
  const isPublicRoute = publicRoutes.includes(path)

  const cookie = cookies().get('super_cart_token')?.value
  const session = await decrypt(cookie)

  if (isProtectedRoute && !session?.payload.merchantId) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.nextUrl))
  }

  if (
    isPublicRoute &&
    session?.payload.merchantId &&
    !req.nextUrl.pathname.startsWith('/app')
  ) {
    return NextResponse.redirect(new URL('/app', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
