import { APIUrl } from "../apiURL";

export const deleteTodo = async (id_todo: string) => {
    const ApiURLdeleteTodo = `${APIUrl}/user/${id_todo}`;

    try {
        const response = await fetch(ApiURLdeleteTodo, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            console.log('Todo deletado.')
        } else {
            console.log('Erro ao deletar todo.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}