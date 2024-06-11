import { APIUrl } from "../apiURL";

export const changeAvatar = async (src: string, id_user: string) => {
    const ApiURLChangeAvatar = `${APIUrl}/user/avatar`;

    try {
        const response = await fetch(ApiURLChangeAvatar, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar_src: src,
                id_user: id_user
            })
        })

        if (response.ok) {
            console.log('Avatar atualizado.')
        } else {
            console.log('Erro ao atualizar avatar.')
        }
    } catch (error) {
        console.error(`Network error: ${error}`);
        throw new Error('Network error');
    }
}