import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/gate", "/api/gate", "/_next", "/favicon.ico", "/og-image.jpg", "/photos"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Check for access cookie
  const hasAccess = request.cookies.get("access")?.value === "granted";
  if (!hasAccess) {
    const gateUrl = new URL("/gate", request.url);
    gateUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(gateUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
