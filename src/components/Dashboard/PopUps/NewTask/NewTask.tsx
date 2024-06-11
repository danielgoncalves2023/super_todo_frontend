import { FormEvent, useState } from "react";
import { createTask } from "../../../../lib/task/createTask";
import { motion } from "framer-motion";

interface PopUpTaskProps {
    id_todo: string;
    onClose: () => void;
}

export const NewTask = ({ id_todo, onClose }: PopUpTaskProps) => {
    const [name, setName] = useState('')

    const handleNewTask = async (event: FormEvent) => {
        event.preventDefault();
        await createTask(name, id_todo);
        onClose();
    }

    return (
        <div className="z-10 backdrop-blur fixed w-full h-full grid place-content-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="flex flex-col gap-1 bg-blue-300 border-2 border-blue-900 rounded-md
            w-full sm:w-[400px] h-auto sm:h-[250px]">
                <div className="flex justify-end p-3">
                    <img className="cursor-pointer size-5 hover:scale-[1.3] active:scale-100 duration-500" src="/src/assets/icons/close.png" alt="close" onClick={onClose} />
                </div>
                <form className="flex flex-col px-7" onSubmit={handleNewTask}>
                    <label className="font-semibold" htmlFor="name">Nome da nova tarefa:</label>
                    <input className="rounded-md my-2 p-1.5 hover:rounded-none" type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
                    <button className="rounded-md font-semibold text-white bg-blue-900 mt-10 p-2 mb-5
                    hover:bg-[blue] active:bg-[darkblue] duration-500" type="submit">Criar tarefa</button>
                </form>
            </motion.div>
        </div>
    )
}
