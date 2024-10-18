"use server"
import { cookies } from "next/headers"
import axios from "axios"

export const sendRegisterPhotographerRequest = async (values) => {
    try {
        const response = await axios.post(`${process.env.DATABASE_URL}/auth/photographer/register`, values);
        const user = response?.data?.user;

        // If user data is missing, throw an error
        if (!user) {
            throw new Error("User data is missing");
        }

        cookies().set({
            name: "photographer", 
            value: JSON.stringify(user), 
            httpOnly: true, 
            secure: true, 
            path: "/", 
            maxAge: 60 * 60 * 24 * 2
        });

        return user;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const sendRegisterUserRequest = async (values) => {
    try {
        const response = await axios.post(`${process.env.DATABASE_URL}/auth/user/register`, values);
        const user = response?.data?.user;

        // If user data is missing, throw an error
        if (!user) {
            throw new Error("User data is missing");
        }

        cookies().set({
            name: "user", 
            value: JSON.stringify(user), 
            httpOnly: true, 
            secure: true, 
            path: "/", 
            maxAge: 60 * 60 * 24 * 2
        });

        return user;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};


