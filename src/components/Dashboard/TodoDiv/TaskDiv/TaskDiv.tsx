import { useEffect, useState } from "react";
import ITask from "../../../../models/Task";
import { loadTasks } from "../../../../lib/task/loadTasks";
import formatDate from "../../../../lib/formatDate";
import { PopUpNewTask } from "../PopUpNewTask/PopUpNewTask";
import { deleteTask } from "../../../../lib/task/deleteTask";

interface TaskDivProps {
    id_todo: string
}

export const TaskDiv = ({ id_todo }: TaskDivProps) => {
    const [loadedTasks, setLoadedTasks] = useState<ITask[]>([]); // Estado inicial vazio e com tipo correto
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para verificar se está carregando
    const [PopNewTask, setPopNewTask] = useState<boolean>(false);

    const openNewTask = () => {
        setPopNewTask(true)
    }

    const closeNewTask = () => {
        setPopNewTask(false)
    }

    const handleClickDeleteTask = (id_task: string) => {
        deleteTask(id_task)
    }

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


    useEffect(() => {
        loadAllTasks();
    }, []);

    if (isLoading) {
        return <div>Carregando tasks...</div>; // Mensagem de carregamento
    }

    return (
        <>
            {
                PopNewTask && <PopUpNewTask id_todo={id_todo} onClose={closeNewTask} />
            }
            {
                loadedTasks.length < 1 ? (
                    <tbody>
                        <tr onClick={openNewTask} >
                            <td className="cursor-pointer text-center hover:bg-orange-600"
                                colSpan={6}>Adicionar nova task</td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {loadedTasks.map((tasks) =>
                        (
                            <tr key={tasks.id_task}>
                                {/* ETAPA */}
                                <td className="px-2 text-sm border border-slate-600">{tasks.name}</td>
                                {/* STATUS */}
                                <td className="text-sm border border-slate-600 text-center">
                                    {
                                        tasks.status == 'Parado.' ? 'PARADO' : tasks.status
                                    }
                                </td>
                                {/* CRIADA */}
                                <td className="text-sm border border-slate-600 text-center">{formatDate(tasks.created_at)}</td>
                                {/* INICIADA */}
                                <td className="text-sm cursor-pointer border border-slate-600 text-center">
                                    {
                                        tasks.status == 'Parado.' ? 'INICIAR' : formatDate(tasks.start_date)
                                    }
                                </td>
                                {/* CONCLUIDA */}
                                <td className="text-sm border border-slate-600 text-center hover:bg-zinc-300 active:bg-zinc-400">
                                    {
                                        tasks.start_date == null ? '-' : formatDate(tasks.completion_date)
                                    }
                                </td>
                                {/* EXCLUIR */}
                                <td className="text-sm border border-slate-600 text-center">
                                    <div className="flex flex-row justify-center gap-2">
                                        <img className="cursor-pointer size-7" src="/src/assets/icons/delete.png" alt="delete"
                                            onClick={() => handleClickDeleteTask(tasks.id_task)} />
                                    </div>
                                </td>
                            </tr>
                        )
                        )
                        }
                        <tr onClick={openNewTask}>
                            <td className="cursor-pointer text-center hover:bg-orange-600"
                                colSpan={6}>Adicionar nova task</td>
                        </tr>
                    </tbody>
                )
            }
        </>
    )
}
