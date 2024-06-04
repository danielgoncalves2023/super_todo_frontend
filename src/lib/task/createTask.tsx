
export const createTask = async (name: string, id_todo: string) => {
    const ApiURLCreateTask = `http://localhost:3333/user/todo/task`;

    try {
        const response = await fetch(ApiURLCreateTask, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                id_todo: id_todo
            })
        })

        if (response.ok) {
            console.log('Task criada.')
        } else {
            console.log('Erro ao criar task.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}