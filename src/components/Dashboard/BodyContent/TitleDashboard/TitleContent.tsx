import { motion } from "framer-motion";

interface TitleProps {
    openNewTodo: () => void;
}

export const TitleDashboard = ({ openNewTodo }: TitleProps) => {

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeIn" }}
            className="flex flex-row justify-center gap-3">
            <div>
                <h1 className="flex justify-center text-xl font-bold mb-5">QUADRO DE PROJETOS</h1>
            </div>
            <div>
                <img src="/src/assets/icons/new_todo.png" alt="new_todo"
                    className="hover:scale-[1.2] active:scale-100 duration-200 cursor-pointer size-8" onClick={openNewTodo} />
            </div>
        </motion.div>
    )
}