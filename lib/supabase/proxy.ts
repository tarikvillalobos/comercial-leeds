import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

const protectedRoutes = ["/category", "/sub-category", "/platform"]

function isProtectedRoute(pathname: string) {
  return protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
}

function copyAuthState(source: NextResponse, target: NextResponse) {
  source.cookies.getAll().forEach((cookie) => target.cookies.set(cookie))

  for (const header of ["cache-control", "expires", "pragma"]) {
    const value = source.headers.get(header)
    if (value) target.headers.set(header, value)
  }

  return target
