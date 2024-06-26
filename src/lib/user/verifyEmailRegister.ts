import { APIUrl } from "../apiURL";

export const verifyEmailRegister = async (email: string) => {
    const ApiURLVerifyEmailRegister = `${APIUrl}/user/${email}/`;

    try {
        const response = await fetch(ApiURLVerifyEmailRegister, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            return response.json()
        } else {
            return response.json()
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}