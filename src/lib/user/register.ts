import { APIUrl } from "../apiURL";

export const Register = async (email: string, password: string, name: string, gender: string, navigate: any) => {
const ApiURLRegister = `${APIUrl}/register/`;

    try {
        const response = await fetch(ApiURLRegister, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                gender: gender
            })
        })

        if (response.ok) {
            navigate('/')
        } else {
            console.log('Houve algum erro ao cadastrar usuário.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}