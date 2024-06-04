import { useSelector } from "react-redux"
import { BackgroundDashboard } from "./Background/Background"
import { Header } from "./Header/Header"
import { RootState } from "../../redux"
import { TodoDiv } from "./TodoDiv/TodoDiv"
import { useState } from "react"
import { PopUpNewTodo } from "./PopUpNewTodo/PopUpNewTodo"

export const Dashboard = () => {
    const loginSlice = useSelector((state: RootState) => state.login.user)
    const { name, gender, avatar, id_user } = loginSlice

    const [PopNewTodo, setPopNewTodo] = useState<boolean>(false);

    const openNewTodo = () => {
        setPopNewTodo(true)
    }

    const closeNewTodo = () => {
        setPopNewTodo(false)
    }

    return (
        <BackgroundDashboard>
            {
                PopNewTodo &&
                <PopUpNewTodo id_user={id_user} onClose={closeNewTodo} />
            }
            <Header name_user={name} gender_user={gender} avatar={avatar} />
            <section className="flex flex-col p-5 h-screen w-full">
                <div className="flex flex-row justify-center gap-3">
                    <div>
                        <h1 className="flex justify-center text-xl font-bold mb-5">QUADRO DE TAREFAS</h1>
                    </div>
                    <div>
                        <img src="/src/assets/icons/new_todo.png" alt="new_todo"
                            className="cursor-pointer size-8" onClick={openNewTodo} />
                    </div>
                </div>
                <TodoDiv id_user={id_user} />
            </section>
        </BackgroundDashboard>
    )
}