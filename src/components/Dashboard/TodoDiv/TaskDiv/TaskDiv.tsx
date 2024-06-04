import { useEffect, useState } from "react";
import ITask from "../../../../models/Task";
import { loadTasks } from "../../../../lib/task/loadTasks";

interface TaskDivProps {
    id_todo: string
}

export const TaskDiv = ({ id_todo }: TaskDivProps) => {
    const [loadedTasks, setLoadedTasks] = useState<ITask[]>([]); // Estado inicial vazio e com tipo correto
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para verificar se está carregando

    useEffect(() => {
        const loadAllTasks = async () => {
            try {
                const todos = await loadTasks(id_todo);
                setLoadedTasks(todos);
            } catch (error) {
                console.error("Erro ao carregar tasks:", error);
            } finally {
                setIsLoading(false); // Conclui o carregamento
            }
        };

        loadAllTasks();
    }, []);

    if (isLoading) {
        return <div>Carregando tasks...</div>; // Mensagem de carregamento
    }

    return (
        <>
            {
                loadedTasks.length < 1 ? (
                    <tbody>
                        <tr>
                            <td className="cursor-pointer text-center hover:bg-orange-600" colSpan={6}>Adicionar nova task</td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {loadedTasks.map((tasks) => (
                            <tr>
                                <td className="text-sm border border-slate-600">{tasks.name}</td>
                                <td className="text-sm border border-slate-600 text-center">{tasks.status}</td>
                                <td className="text-sm border border-slate-600 text-center">{tasks.create_at}</td>
                                <td className="text-sm cursor-pointer border border-slate-600 text-center">
                                {
                                    tasks.status == 'Parado.' ? 'Iniciar' : tasks.start_date
                                }
                                </td>
                                <td className="text-sm border border-slate-600 text-center hover:bg-zinc-300 active:bg-zinc-400">
                                    {
                                    tasks.start_date !== undefined ? 'Concluir' : tasks.completion_date
                                    }
                                </td>
                                <td className="text-sm border border-slate-600 text-center">
                                    <div className="flex flex-row justify-center gap-2">
                                        <img className="cursor-pointer size-7" src="/src/assets/icons/delete.png" alt="delete"
                                            onClick={() => alert('clicou')} />
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                        < tr >
                            <td className="cursor-pointer text-center hover:bg-orange-600" colSpan={6}>Adicionar nova task</td>
                        </tr>
                    </tbody>
                )
            }
        </>
    )
}
