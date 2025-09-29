import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const BLOCKED = ["/products", "/collections", "/store", "/cart", "/checkout", "/order", "/account"]

export function middleware(req: NextRequest) {
  const p = req.nextUrl.pathname.toLowerCase()

  if (BLOCKED.some((seg) => p.includes(seg))) {
    // countryCode desteği: /de/... gibi ise onu koruyarak ana sayfaya dön
    const parts = p.split("/").filter(Boolean)
    const cc = parts[0] && parts[0].length === 2 ? `/${parts[0]}` : "/"
    const url = req.nextUrl.clone()
    url.pathname = cc
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}