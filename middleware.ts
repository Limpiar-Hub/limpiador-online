import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only redirect the initial visit
  if (request.nextUrl.pathname === "/" && request.headers.get("referer") === null) {
    return NextResponse.redirect(new URL("/commerce-spaces", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/",
}