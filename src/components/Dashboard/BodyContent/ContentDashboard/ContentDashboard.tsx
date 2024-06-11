import { Tasks } from "./Tasks/Tasks";
import { TodoTable } from "./TodoTable/TodoTable"
import ITodo from "../../../../models/Todo";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingSpin } from "./LoadingSpin/LoadingSpin";

interface TodoContentProps {
    closeNewTodo: () => void;
    setPopNewTask: (isOpen: boolean) => void;
    setDeleteTodoOpen: (isOpen: boolean) => void;
    isLoading: boolean;
    loadedTodos: ITodo[];
    loadAllTodos: () => void;
    popNewTask: boolean;
}

export const ContentDashboard = ({
    closeNewTodo, setPopNewTask, setDeleteTodoOpen, isLoading, loadedTodos, loadAllTodos, popNewTask
}: TodoContentProps) => {

    if (isLoading) {
        return (
            <LoadingSpin />
        )
    }

    return (
        <>
            {loadedTodos.length < 1 ? (
                <div className="flex justify-center">
                    <motion.h1
                    initial={{ opacity: 0 }}
                    animate= {{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    className="font-semibold">
                        Inicie um novo projeto...
                    </motion.h1>
                </div>
            ) : (
                <AnimatePresence>
                    {loadedTodos.map((todo: ITodo) => (
                        <TodoTable
                            key={todo.id_todo}
                            id_todo={todo.id_todo}
                            name={todo.name}
                            closeNewTodo={closeNewTodo}
                            setDeleteTodoOpen={setDeleteTodoOpen}
                            loadAllTodos={loadAllTodos}
                        >
                            <Tasks
                                id_todo={todo.id_todo}
                                setPopNewTask={setPopNewTask}
                                popNewTask={popNewTask}
                            />
                        </TodoTable>
                    ))}
                </AnimatePresence>
            )
            }
        </>
    )
}