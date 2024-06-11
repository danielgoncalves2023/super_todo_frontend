import { APIUrl } from "../apiURL";

export const loadTasks = async (id_todo: string) => {
    const ApiURLLoadTasks = `${APIUrl}/user/${id_todo}/tasks`;

    try {
        const response = await fetch(ApiURLLoadTasks, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            const allTasks = await response.json();

            return allTasks;
        } else {
            console.log('Erro ao carregar tasks.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}