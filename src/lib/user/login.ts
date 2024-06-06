import { loggedIn } from "../../redux/loginSlice/loginSlice";

export const Login = async (email: string, password: string, navigate: any, dispatch: any) => {
    const ApiURLLogin = 'http://localhost:3333/login/';

    try {
        const response = await fetch(ApiURLLogin, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        if (response.ok) {
            const user = await response.json();

            navigate('/dashboard')
            dispatch(loggedIn(user))
        } else {
            console.log('Email ou senha incorretos')
        }

    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}