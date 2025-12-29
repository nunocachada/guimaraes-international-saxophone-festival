import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.headers.get('authorization')

  // Se quiseres poder desligar isto via env
  const isAuthDisabled = process.env.AUTH_DISABLED === 'true'
  if (isAuthDisabled) return NextResponse.next()

  if (auth?.startsWith('Basic ')) {
    const base64 = auth.slice(6)

    // Edge-safe: Buffer nem sempre existe no middleware
    const decoded =
      typeof atob === 'function'
        ? atob(base64)
        : Buffer.from(base64, 'base64').toString('utf-8')

    const [, pwd = ''] = decoded.split(':') // ignoramos o username
    if (pwd === 'pro') return NextResponse.next()
  }

  // Força o popup do browser
  return new NextResponse('Acesso restrito', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="noticias", charset="UTF-8"',
    },
  })
}

export const config = {
  matcher: ['/noticias/:path*'],
}
