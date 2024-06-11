import { APIUrl } from "../apiURL";

export const deleteUser = async (id_user: string) => {
    const ApiURLRegister = `${APIUrl}/user/`;

    try {
        const response = await fetch(ApiURLRegister, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_user: id_user
            })
        })
        if (response.ok) {
            console.log('Usuário deletado com sucesso.')
        } else {
            console.log('Houve algum erro ao deletar usuário.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}