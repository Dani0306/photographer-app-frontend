"use server"
import { cookies } from "next/headers"

export const serverLogout = async () => {
    cookies().delete("user");
    cookies().delete("photographer")
    return true
}