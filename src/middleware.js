import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const url = request.nextUrl.pathname;
  if (url === "/") {
    const token = request.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }
  if (url === "/sign-in") {
    const token = request.cookies.get("token");
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (url === "/sign-up/confirm-user") {
    const email = request.cookies.get("email");
    if (!email) {
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
  }
  if (url === "/recovery-password/confirm") {
    const confirm = request.cookies.get("confirm");
    if (!confirm) {
      return NextResponse.redirect(new URL("/recovery-password", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/sign-up/confirm-user",
    "/recovery-password/confirm",
    "/sign-in",
  ],
};
