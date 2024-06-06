import { FormEvent, useState } from "react";
import { createTask } from "../../../../lib/task/createTask";

interface PopUpTaskProps {
    id_todo: string;
    onClose: () => void;
}

export const PopUpNewTask = ({ id_todo, onClose }: PopUpTaskProps) => {
    const [ name, setName ] = useState('')

    const handleNewTask = async (event: FormEvent) => {
        event.preventDefault();
        await createTask(name, id_todo);
        onClose();
    }

    return (
        <div className="backdrop-blur fixed top-0 left-0 w-full h-full grid place-content-center z-50">
            <div className="flex flex-col gap-3 rounded-md bg-sky-700 w-[300px] h-[300px] p-5 shadow-lg">
                <div className="flex justify-end">
                    <img className="cursor-pointer size-7" src="/src/assets/icons/close.png" alt="close" onClick={onClose} />
                </div>
                <form className="flex flex-col" onSubmit={handleNewTask}>
                    <label className="font-bold" htmlFor="name">Nome da nova TASK</label>
                    <input className="rounded-md my-2 p-1.5" type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
                    <button className="rounded-md font-semibold bg-orange-600 mt-10 p-2" type="submit">Criar</button>
                </form>
            </div>
        </div>
    )
}
