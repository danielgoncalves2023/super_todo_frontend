
export const Register = async (email: string, password: string, name: string, gender: string, navigate: any) => {
    const ApiURLRegister = 'http://localhost:3333/register/';

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
            console.log("Usuário cadastrado.")
            navigate('/dashboard')
        } else {
            console.log('Houve algum erro ao cadastrar usuário.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}