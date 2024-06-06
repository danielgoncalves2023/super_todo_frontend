import { useState } from "react"

interface PopUpConfigTodoProps {
    id_todo: string,
    onClose: () => void
}

export const PopUpConfigTodo = ({ id_todo, onClose }: PopUpConfigTodoProps) => {
    const [name, setName] = useState('')

    const handleConfigTodo = () => {
        alert(id_todo)
    }

    return (
        <div className="backdrop-blur top-0 left-0 absolute w-full h-full grid place-content-center">
            <div className="flex flex-col gap-3 rounded-md bg-sky-700 w-[300px] h-[300px] p-5">
                <div className="flex justify-end">
                    <img className="cursor-pointer size-7" src="/src/assets/icons/close.png" alt="close"
                    onClick={onClose}/>
                </div>
                <form className="flex flex-col" onSubmit={handleConfigTodo}>
                    <label className="font-bold" htmlFor="name">Nome da nova TODO</label>
                    <input className="rounded-md my-2 p-1.5" type="text" name="name" onChange={(event) => setName(event.target.value)} />
                    <button className="rounded-md font-semibold bg-orange-600 mt-10 p-2" type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}