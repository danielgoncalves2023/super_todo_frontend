
interface PopUpTaskProps {
    onClose: () => void;
}

export const PopUpTask = ({onClose}: PopUpTaskProps) => {

    const handleOnClose = () => {
        onClose();
    }

    return (
        <div className="absolute rounded-md right-20 bg-zinc-300 w-[200px] h-[180px] flex flex-col p-2">
            <div className=" flex justify-end mx-2 mb-3 " >
                <img className="size-8 cursor-pointer hover:bg-zinc-500 p-1 rounded-md" onClick={handleOnClose}
                src="/src/assets/icons/close.png" alt="close" />
            </div>
            <div className="flex flex-col gap-3 pl-4">
                <div className=" flex flex-row gap-2 items-center justify-start">
                    <img className="size-7" src="/src/assets/icons/edit-task.png" alt="" />
                    <p>Editar tarefa</p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start">
                    <img className="size-7" src="/src/assets/icons/delete.png" alt="" />
                    <p>Excluir tarefa</p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start">
                    <img className="size-7" src="/src/assets/icons/completed.png" alt="" />
                    <p>Concluir tarefa</p>
                </div>
            </div>
        </div>
    )
}