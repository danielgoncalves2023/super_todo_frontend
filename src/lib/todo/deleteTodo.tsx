
export const deleteTodo = async (id_todo: string) => {
    const ApiURLdeleteTodo = `http://localhost:3333/user/${id_todo}`;

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