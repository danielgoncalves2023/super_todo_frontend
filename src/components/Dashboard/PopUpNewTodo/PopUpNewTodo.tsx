import { useState } from "react"
import { createTodo } from "../../../lib/todo/createTodo"

interface PopUpNewTodoProps {
    id_user: string,
    onClose: () => void
}

export const PopUpNewTodo = ({ id_user, onClose }: PopUpNewTodoProps) => {
    const [name, setName] = useState('')

    function handleNewTodo() {
        createTodo(name, id_user)
        onClose();
    }

    return (
        <div className="backdrop-blur absolute w-full h-full grid place-content-center">
            <div className="flex flex-col gap-3 rounded-md bg-sky-700 w-[300px] h-[300px] p-5">
                <div className="flex justify-end">
                    <img className="cursor-pointer size-7" src="/src/assets/icons/close.png" alt="close"
                    onClick={onClose}/>
                </div>
                <form className="flex flex-col" onSubmit={handleNewTodo}>
                    <label className="font-bold" htmlFor="name">Nome da nova Todo</label>
                    <input className="rounded-md my-2 p-1.5" type="text" name="name" onChange={(event) => setName(event.target.value)} />
                    <button className="rounded-md font-semibold bg-orange-600 mt-10 p-2" type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}