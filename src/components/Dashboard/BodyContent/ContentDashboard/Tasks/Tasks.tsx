import { useEffect, useState } from "react";
import ITask from "../../../../../models/Task";
import formatDate from "../../../../../lib/formatDate";
import { loadTasks } from "../../../../../lib/task/loadTasks";
import { deleteTask } from "../../../../../lib/task/deleteTask";
import { editStatusTask } from "../../../../../lib/task/editStatusTask";
import { useDispatch } from "react-redux";
import { selected } from "../../../../../redux/selectTodoSlice/selectTodoSlice";
import { AnimatePresence, motion } from "framer-motion";

interface TaskDivProps {
    id_todo: string;
    setPopNewTask: (isOpen: boolean) => void;
    popNewTask: boolean;
}

export const Tasks = ({ id_todo, setPopNewTask, popNewTask }: TaskDivProps) => {
    const dispatch = useDispatch();
    const [loadedTasks, setLoadedTasks] = useState<ITask[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadAllTasks = async () => {
        try {
            const todos = await loadTasks(id_todo);
            setLoadedTasks(todos);
        } catch (error) {
            console.error("Erro ao carregar tasks:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const openNewTask = async (select: string) => {
        await dispatch(selected({ select }));
        setPopNewTask(true);
    };

    const handleClickDeleteTask = async (id_task: string) => {
        await deleteTask(id_task);
        loadAllTasks();
    };

    const handleClickEditTask = async (id_task: string) => {
        await editStatusTask(id_task);
        loadAllTasks();
    };

    useEffect(() => {
        loadAllTasks();
    }, [popNewTask]);

    if (isLoading) {
        return <div>Carregando tarefas...</div>;
    }

    return (
        <tbody>
            <AnimatePresence>
                {loadedTasks.length > 0 && (
                    loadedTasks.map((tasks) => (
                        <motion.tr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeIn", duration: 1 }}
                            key={tasks.id_task} className="hover:bg-[#5A72A0] duration-500 odd:bg-blue-400 even:bg-blue-300">
                            <td className="px-2 text-sm font-semibold border border-blue-900">{tasks.name}</td>
                            {/* COLUNA STATUS */}
                            {tasks.status === 'PARADA' && (
                                // STATUS PARADA
                                <AnimatePresence>
                                    {
                                        <motion.td
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ ease: "easeIn", duration: 1.5 }}
                                            className="text-xs text-red-700 font-semibold border border-blue-900 text-center">
                                            {tasks.status}
                                        </motion.td>
                                    }
                                </AnimatePresence>
                            )}
                            {tasks.status === 'INICIADA' && (
                                // STATUS INICIADA
                                <AnimatePresence>
                                    {
                                        <motion.td
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ ease: "easeIn", duration: 1 }}
                                            className="text-xs text-[#FF9A00] font-semibold border border-blue-900 text-center">
                                            {tasks.status}
                                        </motion.td>
                                    }
                                </AnimatePresence>
                            )}
                            {tasks.status === 'CONCLUIDA' && (
                                // STATUS CONCLUIDA
                                <AnimatePresence>
                                    {
                                        <motion.td
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ ease: "easeIn", duration: 1 }}
                                            className="text-xs text-green-800 font-semibold border border-blue-900 text-center">
                                            {tasks.status}
                                        </motion.td>
                                    }
                                </AnimatePresence>
                            )}
                            {/* COLUNA CRIADA */}
                            <motion.td
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeIn", duration: 2 }}
                                className="text-xs font-semibold border border-blue-900 text-center">
                                {formatDate(tasks.created_at)}
                            </motion.td>
                            {/* COLUNA INICIADA */}
                            {tasks.status === 'PARADA' ? (
                                // ANTES DE INICIAR TAREFA
                                <motion.td
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ ease: "easeIn", duration: 2 }}
                                    className="duration-500 text-xs font-semibold cursor-pointer border border-blue-900 text-center hover:bg-blue-500 active:bg-blue-900" onClick={() => handleClickEditTask(tasks.id_task)}>
                                    INICIAR
                                </motion.td>
                            ) : (
                                // DEPOIS DE INICIAR TAREFA
                                <AnimatePresence>
                                    {
                                        <motion.td
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ ease: "easeIn", duration: 2 }}
                                            className="text-xs font-semibold border border-blue-900 text-center">
                                            {formatDate(tasks.start_date)}
                                        </motion.td>
                                    }
                                </AnimatePresence>
                            )}
                            {/* COLUNA CONCLUIDA */}
                            {tasks.completion_date == null ? (
                                tasks.start_date == null ? (
                                    // ANTES DE INICIAR TAREFA
                                    <AnimatePresence>
                                        {
                                            <motion.td
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 2 }}
                                                className="text-xs font-semibold border border-blue-900 text-center">
                                                -
                                            </motion.td>
                                        }
                                    </AnimatePresence>
                                ) : (
                                    // AO CLICAR INICIAR TAREFA
                                    <AnimatePresence>
                                        {
                                            <motion.td
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ ease: "easeIn", duration: 2 }}
                                                className="duration-500 cursor-pointer text-xs font-semibold border border-blue-900 text-center hover:bg-blue-500 active:bg-blue-900" onClick={() => handleClickEditTask(tasks.id_task)}>
                                                CONCLUIR
                                            </motion.td>
                                        }
                                    </AnimatePresence>
                                )
                            ) : (
                                // AO CLICAR CONCLUIR TAREFA
                                <motion.td
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ ease: "easeIn", duration: 2 }}
                                    className="text-xs font-semibold border border-blue-900 text-center">{formatDate(tasks.completion_date)}
                                </motion.td>
                            )}
                            {/* COLUNA EXCLUIR */}
                            <AnimatePresence>
                                {
                                    <motion.td
                                        initial={{ x: 0, rotate: 0 }}
                                        whileHover={{
                                            rotate: [-25, 25, 0],
                                            x: [-5, 5, 0], // Animar para a esquerda, para a direita e depois voltar para a posição original
                                            transition: { duration: 0.7, ease: "easeInOut" },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeIn" }}
                                        className="text-sm font-semibold border border-blue-900">
                                        <img className="cursor-pointer w-5 h-5 mx-auto" src="/src/assets/icons/delete.png" alt="delete" onClick={() => handleClickDeleteTask(tasks.id_task)} />
                                    </motion.td>
                                }
                            </AnimatePresence>
                        </motion.tr>
                    ))
                )}
            </AnimatePresence>
            <tr onClick={() => openNewTask(id_todo)} className="bg-blue-500">
                <td className="duration-500 cursor-pointer text-center hover:bg-blue-400 hover:text-blue-900" colSpan={6}>
                    Adicionar nova tarefa
                </td>
            </tr>
        </tbody>
    );
};