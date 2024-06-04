
export const loadTodos = async (id_user: string) => {
    const ApiURLLoadTodos = `http://localhost:3333/${id_user}/todos`;

    try {
        const response = await fetch(ApiURLLoadTodos, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            const allTodos = await response.json();

            return allTodos;
        } else {
            console.log('Erro ao carregar todos.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}