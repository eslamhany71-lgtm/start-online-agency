import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en"; // الإنجليزي هو الأساس دايماً

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // استثناء ملفات الصور والـ API من التوجيه
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // لو الرابط فيه لغة أصلاً (en أو ar)، سيبه يكمل عادي
  if (pathnameHasLocale) return;

  // لو الرابط مفيهوش لغة، وجهه دايماً للإنجليزي
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};