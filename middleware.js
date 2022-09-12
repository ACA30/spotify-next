import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  // token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const { pathname } = req.nextUrl

  console.log(pathname)

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next()
  }

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: "/",
}
