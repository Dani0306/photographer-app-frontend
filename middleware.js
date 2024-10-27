import { NextResponse } from "next/server"

export function middleware (req) {

    const { cookies, url, nextUrl: { pathname } } = req;

    const userCookie = cookies.get("user")
    const photographerCookie = cookies.get("photographer")


    if(pathname.includes("/auth") && (userCookie || photographerCookie)){
        return NextResponse.redirect(new URL("/", url))
    }

    if(pathname.includes("/dashboard") && !photographerCookie){
        return NextResponse.redirect(new URL("/", url))
    }

}


export const config = {
    matcher: ["/auth/:path*", "/dashboard/:path*"]
}