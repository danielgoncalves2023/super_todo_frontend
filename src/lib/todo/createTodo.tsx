import { APIUrl } from "../apiURL";

export const createTodo = async (name: string, id_user: string) => {
    const ApiURLCreateTodo = `${APIUrl}/user/todo`;

    try {
        const response = await fetch(ApiURLCreateTodo, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                id_user: id_user
            })
        })

        if (response.ok) {
            console.log('Todo criado.')
        } else {
            console.log('Erro ao criar todo.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}