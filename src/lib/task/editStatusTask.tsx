
export const editStatusTask = async (id_task: string) => {
    const ApiURLEditStatusTask = `http://localhost:3333/user/todo/task`;

    try {
        const response = await fetch(ApiURLEditStatusTask, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_task: id_task
            })
        })

        if (response.ok) {
            console.log('Task atualizada com sucesso.')
        } else {
            console.log('Erro ao iniciar task.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}