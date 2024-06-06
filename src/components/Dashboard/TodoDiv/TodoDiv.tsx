import { useEffect, useState } from "react"
import { loadTodos } from "../../../lib/todo/loadTodos"
import { TaskDiv } from "./TaskDiv/TaskDiv"
import ITodo from "../../../models/Todo"
import { PopUpConfigTodo } from "./PopUpConfigTodo/PopUpConfigTodo"

interface TodoDivProps {
    id_user: string
}

export const TodoDiv = ({ id_user }: TodoDivProps) => {
    const [loadedTodos, setLoadedTodos] = useState<ITodo[]>([]); // Estado inicial vazio e com tipo correto
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para verificar se está carregando

    const [configTodoOpen, setConfigTodoOpen] = useState<boolean>(false)
    const [currentTodoId, setCurrentTodoId] = useState<string>(''); // Estado para armazenar o id_todo atual

    const handleOpenConfigTodo = (id_todo: string) => {
        setCurrentTodoId(id_todo);
        setConfigTodoOpen(true);
    };

    const handleCloseConfigTodo = () => {
        setConfigTodoOpen(false);
        setCurrentTodoId('');
    };

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
    

    if (isLoading) {
        return <div>Carregando todos...</div>; // Mensagem de carregamento
    }

    return (
        <>
            {
                configTodoOpen && <PopUpConfigTodo id_todo={currentTodoId} onClose={handleCloseConfigTodo} />
            }
            {
                loadedTodos.length > 0 && (
                    loadedTodos.map((todo: ITodo) => (
                        <div key={todo.id_todo} className="flex flex-col gap-2 mb-10" >
                            {/* Listas de Tarefas */}
                            < h1 className="flex justify-center text-md font-semibold" >
                                {todo.name} <span className="pl-5"><img onClick={() => handleOpenConfigTodo(todo.id_todo)} className="cursor-pointer size-7" src="/src/assets/icons/config.png" alt="config" /></span>
                            </h1 >
                            <table className="table-fixed border-collapse border border-slate-500" >
                                <thead>
                                    <tr>
                                        <th className="w-auto text-sm whitespace-nowrap border border-slate-600 text-center">
                                            ETAPA
                                        </th>
                                        <th className="w-[90px] text-sm whitespace-nowrap border border-slate-600 text-center">
                                            STATUS
                                        </th>
                                        <th className="w-[90px] text-sm whitespace-nowrap border border-slate-600 text-center">
                                            CRIADA
                                        </th>
                                        <th className="w-[90px] text-sm whitespace-nowrap border border-slate-600 text-center">
                                            INICIADA
                                        </th>
                                        <th className="w-[90px] text-sm whitespace-nowrap border border-slate-600 text-center">
                                            CONCLUÍDA
                                        </th>
                                        <th className="w-[70px] text-sm whitespace-nowrap border border-slate-600 text-center">
                                            EXCLUIR
                                        </th>
                                    </tr>
                                </thead>
                                {/* Tasks */}
                                <TaskDiv id_todo={todo.id_todo} />
                            </table>
                        </div >
                    )
                    )
                )
            }
        </>
    )
}