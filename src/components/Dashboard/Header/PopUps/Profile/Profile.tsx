import { useState } from "react"
import { changeAvatar } from "../../../../../lib/user/changeAvatar";
import { motion } from "framer-motion";
import { DeletePerfil } from "../DeletePerfil/DeletePerfil";

interface EditAvatarProps {
    onClose: () => void;
    id_user: string;
    setAvatarUser: (newAvatar: string) => void;
}

export const Profile = ({ onClose, id_user, setAvatarUser }: EditAvatarProps) => {
    const [avatar, setAvatar] = useState<string>('');
    const [confirmDeleteProfile, setConfirmDeleteProfile] = useState<boolean>(false)

    const handleAvatarChange = async (src: string) => {
        await setAvatar(src);
    };

    const handleEditAvatar = async () => {
        // You can handle form submission here if needed
        await changeAvatar(avatar, id_user);
        await setAvatarUser(avatar)
        onClose();
    };

    const handleConfirmDeleteProfile = () => {
        setConfirmDeleteProfile(true)
    }

    const handleCancelDeleteProfile = () => {
        setConfirmDeleteProfile(false)
    }

    return (
        <>
            {confirmDeleteProfile && (
                <DeletePerfil id_user={id_user} onClose={handleCancelDeleteProfile} />
            )}
            <div className="z-10 backdrop-blur fixed top-0 left-0 w-full h-full grid place-content-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="flex flex-col gap-3 rounded-md border-2 border-blue-900 bg-blue-200 box-content
                w-full sm:w-[350px] h-auto sm:h-[400px] shadow-lg">
                    <div className="flex justify-end px-2 pt-2">
                        <img className="cursor-pointer size-5 hover:scale-[1.3] active:scale-100 duration-500" src="/src/assets/icons/close.png" alt="close" onClick={onClose} />
                    </div>

                    {/* Titulo */}
                    <h1 className="font-bold text-center">ALTERAR AVATAR</h1>

                    <form className="grid grid-rows-4 grid-cols-2 items-center px-10 gap-5" >

                        <div className="flex flex-row justify-center">
                            <img className="border-2 border-blue-900 rounded-full size-12 mr-2" src="/src/assets/avatar/avatar-man-1.png" alt="Avatar M 1" />
                            <input className="rounded-md my-2 p-1.5" type="radio" name="avatar" value='M1'
                                onChange={() => handleAvatarChange('/src/assets/avatar/avatar-man-1.png')} required />
                        </div>
                        <div className="flex flex-row justify-center">
                            <img className="border-2 border-blue-900 rounded-full size-12 mr-2" src="/src/assets/avatar/avatar-man-2.png" alt="Avatar M 2" />
                            <input className="rounded-md my-2 p-1.5" type="radio" name="avatar" value='M2'
                                onChange={() => handleAvatarChange('/src/assets/avatar/avatar-man-2.png')} required />
                        </div>
                        <div className="flex flex-row justify-center">
                            <img className="border-2 border-blue-900 rounded-full  size-12 mr-2" src="/src/assets/avatar/avatar-woman-1.png" alt="Avatar W 1" />
                            <input className="rounded-md my-2 p-1.5" type="radio" name="avatar" value='W1'
                                onChange={() => handleAvatarChange('/src/assets/avatar/avatar-woman-1.png')} required />
                        </div>
                        <div className="flex flex-row justify-center">
                            <img className="border-2 border-blue-900 rounded-full  size-12 mr-2" src="/src/assets/avatar/avatar-woman-2.png" alt="Avatar W 2" />
                            <input className="rounded-md my-2 p-1.5" type="radio" name="avatar" value='W2'
                                onChange={() => handleAvatarChange('/src/assets/avatar/avatar-woman-2.png')} required />
                        </div>

                        <button className="rounded-md text-white font-semibold bg-blue-900 mt-10 mb-[-60px] sm:mt-5 p-2 col-span-2
                        hover:bg-[blue] active:bg-[darkblue] duration-500" onClick={(e) => { e.preventDefault(); handleEditAvatar(); }}>
                            Alterar avatar
                        </button>
                    </form>
                    <button className="text-white font-semibold mt-10 sm:mt-5 p-2
                        bg-red-900 hover:bg-red-700 active:bg-red-800 duration-500" onClick={handleConfirmDeleteProfile}>
                        Deletar perfil
                    </button>
                </motion.div>
            </div>
        </>
    )
}