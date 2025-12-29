import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl

  // Apenas proteger /noticias
  if (!pathname.startsWith('/noticias')) {
    return NextResponse.next()
  }

  const accessCookie = request.cookies.get('news_access')?.value
  const password = searchParams.get('password')

  // Se já tiver cookie válido, deixa passar
  if (accessCookie === 'pro') {
    return NextResponse.next()
  }

  // Se password correto, grava cookie e redireciona limpo
  if (password === 'pro') {
    const response = NextResponse.redirect(new URL('/noticias', request.url))

    response.cookies.set('news_access', 'pro', {
      httpOnly: true,
      path: '/',
    })

    return response
  }

  // Caso contrário, bloqueia
  return new NextResponse('Acesso restrito', { status: 401 })
}

export const config = {
  matcher: ['/noticias/:path*'],
}
