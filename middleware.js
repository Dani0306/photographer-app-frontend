import { NextResponse } from "next/server"

export function middleware (req) {

    const { cookies, url, nextUrl: { pathname } } = req;


    if(pathname.includes("/auth") && cookies.get("next-auth.session-token")){
        return NextResponse.redirect(new URL("/", url))
    }

    if((pathname.includes("/dashboard") || pathname.includes("/profile")) && !cookies.get("next-auth.session-token")){
        return NextResponse.redirect(new URL("/", url))
    }

}


export const config = {
    matcher: ["/auth/:path*", "/dashboard/:path*", "/profile/:path*"]
}