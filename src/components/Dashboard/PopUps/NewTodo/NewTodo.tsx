import { FormEvent, useState } from "react"
import { createTodo } from "../../../../lib/todo/createTodo"
import { motion } from "framer-motion";

interface PopUpNewTodoProps {
    id_user: string,
    onClose: () => void;
    loadAllTodos: () => void;
}

export const NewTodo = ({ id_user, onClose, loadAllTodos }: PopUpNewTodoProps) => {
    const [name, setName] = useState('')

    const handleNewTodo = async (event: FormEvent) => {
        event.preventDefault()
        await createTodo(name, id_user);
        loadAllTodos;
        onClose();
    }

    return (
        <div className="z-10 backdrop-blur fixed w-full h-full grid place-content-center mx-[-20px] my-[-70px]">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="flex flex-col gap-1 bg-blue-300 border-2 border-blue-900 rounded-md
            w-full sm:w-[400px] h-auto sm:h-[250px]">
                <div className="flex justify-end p-3">
                    <img className="cursor-pointer size-5 hover:scale-[1.3] active:scale-100 duration-500" src="/src/assets/icons/close.png" alt="close"
                        onClick={onClose} />
                </div>
                <form className="flex flex-col px-7" onSubmit={handleNewTodo}>
                    <label className="font-semibold" htmlFor="name">Nome do novo projeto:</label>
                    <input className="rounded-md my-2 p-1.5" type="text" name="name" onChange={(event) => setName(event.target.value)} />
                    <button className="rounded-md font-semibold bg-blue-900 text-[white] mt-10 p-2 mb-5
                    hover:bg-[blue] active:bg-[darkblue] duration-500" type="submit">
                        Criar projeto
                    </button>
                </form>
            </motion.div>
        </div>
    )
}