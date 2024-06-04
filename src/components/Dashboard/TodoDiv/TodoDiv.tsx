import { useEffect, useState } from "react"
import { loadTodos } from "../../../lib/todo/loadTodos"
import ITodo from "../../../models/Todo"
import { TaskDiv } from "./TaskDiv/TaskDiv"

interface TodoDivProps {
    id_user: string
}

export const TodoDiv = ({ id_user }: TodoDivProps) => {
    const [loadedTodos, setLoadedTodos] = useState<ITodo[]>([]); // Estado inicial vazio e com tipo correto
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para verificar se está carregando

    useEffect(() => {
        const loadAllTodos = async () => {
            try {
                const todos = await loadTodos(id_user);
                setLoadedTodos(todos);
            } catch (error) {
                console.error("Erro ao carregar todos:", error);
            } finally {
                setIsLoading(false); // Conclui o carregamento
            }
        };

        loadAllTodos();
    }, []);

    if (isLoading) {
        return <div>Carregando todos...</div>; // Mensagem de carregamento
    }

    return (
        <>
            {
                loadedTodos.length < 1 ? (
                    <div className="flex flex-col gap-2">
                        {/* Listas de Tarefas */}
                        {/* <caption className="flex justify-center text-md font-semibold">
                            <span className="pl-5"><img className="cursor-pointer size-7" src="/src/assets/icons/config.png" alt="config" /></span>
                        </caption> */}
                        <table className="table-fixed border-collapse border border-slate-500" >
                            <thead>
                                <tr>
                                    <th className="text-sm whitespace-nowrap border border-slate-600 text-center">ETAPA</th>
                                    <th className="text-sm whitespace-nowrap border border-slate-600 text-center">STATUS</th>
                                    <th className="text-sm whitespace-nowrap border border-slate-600 text-center">CRIADA</th>
                                    <th className="text-sm whitespace-nowrap border border-slate-600 text-center">INICIADA</th>
                                    <th className="text-sm whitespace-nowrap border border-slate-600 text-center">CONCLUÍDA</th>
                                    <th className="text-sm whitespace-nowrap border border-slate-600 text-center">EXCLUIR</th>
                                </tr>
                            </thead>
                            {/* Tasks */}
                            <tbody>
                                <tr>
                                    <td className="text-center hover:bg-orange-600" colSpan={6}>Crie uma nova TODO para começar...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    loadedTodos.map((todo: ITodo) =>
                    (
                        <div className="flex flex-col gap-2 mb-10">
                            {/* Listas de Tarefas */}
                            <caption className="flex justify-center text-md font-semibold">
                                {todo.name}<span className="pl-5"><img className="cursor-pointer size-7" src="/src/assets/icons/config.png" alt="config" /></span>
                            </caption>
                            <table className="table-fixed border-collapse border border-slate-500" >
                                <thead>
                                    <tr>
                                        <th className="text-sm whitespace-nowrap border border-slate-600 text-center">ETAPA</th>
                                        <th className="text-sm whitespace-nowrap border border-slate-600 text-center">STATUS</th>
                                        <th className="text-sm whitespace-nowrap border border-slate-600 text-center">CRIADA</th>
                                        <th className="text-sm whitespace-nowrap border border-slate-600 text-center">INICIADA</th>
                                        <th className="text-sm whitespace-nowrap border border-slate-600 text-center">CONCLUÍDA</th>
                                        <th className="text-sm whitespace-nowrap border border-slate-600 text-center">EXCLUIR</th>
                                    </tr>
                                </thead>
                                {/* Tasks */}
                                <TaskDiv id_todo={todo.id_todo} />
                            </table>
                        </div>
                    )
                    )
                )
            }
        </>
    )
}