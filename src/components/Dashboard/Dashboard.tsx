import { useSelector } from "react-redux"
import { Header } from "./Header/Header"
import { RootState } from "../../redux"
import { Footer } from "./Footer/Footer"
import { BodyContent } from "./BodyContent/BodyContent"
import { ConfirmDeleteTodo } from "./PopUps/ConfirmDeleteTodo/ConfirmDeleteTodo"
import { useEffect, useState } from "react"
import { NewTask } from "./PopUps/NewTask/NewTask"
import ITodo from "../../models/Todo"
import { loadTodos } from "../../lib/todo/loadTodos"
import { AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const userSlice = useSelector((state: RootState) => state.login.user)
    const { id_user } = userSlice
    const todoSelected = useSelector((state: RootState) => state.selected)

    const [deleteTodoOpen, setDeleteTodoOpen] = useState<boolean>(false)
    const [popNewTask, setPopNewTask] = useState<boolean>(false)

    const [loadedTodos, setLoadedTodos] = useState<ITodo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const navigate = useNavigate();

    if(!id_user){
        navigate('/')
    }

    const loadAllTodos = async () => {
        const todos = await loadTodos(id_user);
        setLoadedTodos(todos);

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    useEffect(() => {
        loadAllTodos();
    }, [])

    useEffect(() => {
        loadAllTodos();
    }, [loadedTodos])

    const handleCloseNewTask = async () => {
        await setPopNewTask(false);
    }

    return (
        <>
            <AnimatePresence>
                {popNewTask && <NewTask id_todo={todoSelected.id_selected} onClose={handleCloseNewTask} />}
            </AnimatePresence>
            <AnimatePresence>
                {deleteTodoOpen && (
                    <ConfirmDeleteTodo onClose={setDeleteTodoOpen} />
                )}
            </AnimatePresence>
            <Header user={userSlice} />
            <BodyContent
                id_user={id_user}
                setPopNewTask={setPopNewTask}
                setDeleteTodoOpen={setDeleteTodoOpen}
                loadAllTodos={loadAllTodos}
                isLoading={isLoading}
                loadedTodos={loadedTodos}
                popNewTask={popNewTask}
            />
            <AnimatePresence>
                <Footer />
            </AnimatePresence>
        </>
    )
}