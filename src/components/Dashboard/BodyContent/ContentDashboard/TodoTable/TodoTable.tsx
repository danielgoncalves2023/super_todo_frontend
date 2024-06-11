import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selected } from "../../../../../redux/selectTodoSlice/selectTodoSlice";
import { motion } from "framer-motion";

interface TodoDivProps {
    id_todo: string;
    name: string;
    closeNewTodo: () => void;
    setDeleteTodoOpen: (isOpen: boolean) => void;
    children: ReactNode;
    loadAllTodos: () => void;
}

export const TodoTable = ({
    id_todo, name, setDeleteTodoOpen, children, loadAllTodos
}: TodoDivProps) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = async (select: string, name: string) => {
        await dispatch(selected({ select, name }));
        setDeleteTodoOpen(true);
    }

    useEffect(() => {
        loadAllTodos()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 1.5 }}
            key={id_todo}
            className="flex flex-col gap-2 mb-10"
        >
            <h1 className="flex justify-center text-md font-semibold">
                {name}
                <span className="pl-5">
                    <img
                        onClick={() => handleDeleteTodo(id_todo, name)}
                        className="hover:scale-[1.2] active:scale-100 duration-200 cursor-pointer w-6 h-6"
                        src="/src/assets/icons/exclude_todo.png"
                        alt="exclude_todo"
                    />
                </span>
            </h1>
            <div className="overflow-x-auto">
                <table className="md:overflow-hidden table-auto w-full border-collapse border-4 border-blue-900 bg-gradient-to-r from-blue-600 to-blue-500">
                    <thead>
                        <tr>
                            <th className="w-auto text-sm whitespace-nowrap border border-blue-900 text-center">TAREFA</th>
                            <th className="w-[90px] text-sm whitespace-nowrap border border-blue-900 text-center">STATUS</th>
                            <th className="w-[90px] text-sm whitespace-nowrap border border-blue-900 text-center">CRIADA</th>
                            <th className="w-[90px] text-sm whitespace-nowrap border border-blue-900 text-center">INICIADA</th>
                            <th className="w-[90px] text-sm whitespace-nowrap border border-blue-900 text-center">CONCLUÍDA</th>
                            <th className="w-[70px] text-sm whitespace-nowrap border border-blue-900 text-center">EXCLUIR</th>
                        </tr>
                    </thead>
                    {children}
                </table>
            </div>
        </motion.div>
    )
}
