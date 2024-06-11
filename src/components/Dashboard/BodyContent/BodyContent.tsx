import { useState } from "react";
import { BackgroundDashboard } from "./BackgroundDashboard/BackgroundDashboard"
import { TitleDashboard } from "./TitleDashboard/TitleContent";
import { ContentDashboard } from "./ContentDashboard/ContentDashboard";
import { NewTodo } from "../PopUps/NewTodo/NewTodo";
import ITodo from "../../../models/Todo";
import { AnimatePresence } from "framer-motion";

interface ContentProps {
    id_user: string;
    setPopNewTask: (isOpen: boolean) => void;
    setDeleteTodoOpen: (isOpen: boolean) => void;
    loadAllTodos: () => void;
    isLoading: boolean;
    loadedTodos: ITodo[];
    popNewTask: boolean;
}

export const BodyContent = ({
    id_user, setPopNewTask, setDeleteTodoOpen, loadAllTodos, isLoading, loadedTodos, popNewTask
}: ContentProps) => {
    const [PopNewTodo, setPopNewTodo] = useState<boolean>(false);

    const openNewTodo = () => {
        setPopNewTodo(true)
    }

    const closeNewTodo = () => {
        setPopNewTodo(false);
        loadAllTodos;
    }

    return (
        <BackgroundDashboard>
            <AnimatePresence>
                {PopNewTodo && <NewTodo id_user={id_user} onClose={closeNewTodo} loadAllTodos={loadAllTodos} />}
            </AnimatePresence>
            <TitleDashboard openNewTodo={openNewTodo} />
            <ContentDashboard
                setPopNewTask={setPopNewTask}
                closeNewTodo={closeNewTodo}
                setDeleteTodoOpen={setDeleteTodoOpen}
                isLoading={isLoading}
                loadedTodos={loadedTodos}
                loadAllTodos={loadAllTodos}
                popNewTask={popNewTask}
            />
        </BackgroundDashboard>
    )
}