
export const deleteTask = async (id_task: string) => {
    const ApiURLDeleteTask = `http://localhost:3333/user/todo/${id_task}`;

    try {
        const response = await fetch(ApiURLDeleteTask, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            console.log('Task deletada.')
        } else {
            console.log('Erro ao deletar task.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}