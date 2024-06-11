import { motion } from "framer-motion";
import { deleteUser } from "../../../../../lib/user/deleteUser";
import { useNavigate } from "react-router-dom";

interface DeletePerfilProps {
    id_user: string;
    onClose: () => void;
}

export const DeletePerfil = ({id_user, onClose}: DeletePerfilProps) => {
    const navigate = useNavigate();

    const handleDeleteUser = async () => {
        await deleteUser(id_user);
        setTimeout(() => {
            navigate('/')
        }, 700);
    }

    const handleCancelDelete = () => {
        onClose();
    }

    return (
        <div className="z-20 backdrop-blur fixed top-0 left-0 w-full h-full grid place-content-center px-10 sm:p-20">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="flex flex-col justify-center items-center gap-5 bg-zinc-500 rounded-xl
                    w-full h-auto sm:w-[450px] sm:h-[250px] p-4 sm:mb-[55px]">
                <div>
                    <img className="size-10" src="/src/assets/icons/danger.png" alt="danger" />
                </div>
                <div className="mb-2">
                    <h1>
                        Você está prestes a apagar permanentemente o seu Perfil.<br /><br />Deseja prosseguir?
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row w-full gap-3">
                    <button onClick={handleDeleteUser}
                        className="w-full sm:w-[75%] rounded-md p-2 text-white font-bold bg-red-900
                        hover:bg-red-700 active:bg-red-800 duration-200">
                        Confirmar
                    </button>
                    <button onClick={handleCancelDelete}
                        className="w-full sm:w-[25%] rounded-md p-2 font-semibold bg-zinc-200
                        hover:bg-zinc-100 active:bg-zinc-300 duration-200">
                        Cancelar
                    </button>
                </div>
            </motion.div>
        </div>
    )
}