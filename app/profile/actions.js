"use server";

export const sendProfileRequest = async (values) => {
    try {
        const response = await fetch(`${process.env.DATABASE_URL}/auth/photographer/register`, {
            headers: { "Content-Type": "application/json" }, 
            method: "POST", 
            body: JSON.stringify(values)  // Ensure body is a JSON string
        });

        // Check for non-OK response
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const completedProfile = await response.json();
        return completedProfile?.user

    } catch (e) {
        console.error("Error in sendProfileRequest:", e);
        return null;
    }
};

export const modifyProfile = async (values) => {
    try {
        const response = await fetch(`${process.env.DATABASE_URL}/auth/photographer/modify`, {
            headers: { "Content-Type": "application/json" }, 
            method: "POST", 
            body: JSON.stringify(values)  // Ensure body is a JSON string
        });

        // Check for non-OK response
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const completedProfile = await response.json();
        return completedProfile?.user

    } catch (e) {
        console.error("Error in sendProfileRequest:", e);
        return null;
    }
}
