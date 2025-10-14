import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ko'],
  defaultLocale: 'ko'
})

export const config = {
  matcher: ['/', '/(ko|en)/:path*']
}