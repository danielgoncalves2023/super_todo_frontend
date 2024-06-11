import { useState } from "react";
import { Profile } from "./PopUps/Profile/Profile";
import IUser from "../../../models/User";
import { WelcomeText } from "./WelcomeText/WelcomeText";
import { Avatar } from "./Avatar/Avatar";
import { Logout } from "./Logout/Logout";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
    user: IUser;
}

export const Header = ({ user }: HeaderProps) => {
    const [avatar, setAvatar] = useState<string>(user.avatar)
    const [menuAvatarOpen, setMenuAvatarOpen] = useState<boolean>(false)

    const closeEditAvatar = () => {
        setMenuAvatarOpen(false)
    }

    return (
        <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="h-12 flex flex-row justify-around items-center
        bg-blue-900">
            <AnimatePresence>
                {
                    menuAvatarOpen && <Profile onClose={closeEditAvatar} setAvatarUser={setAvatar} id_user={user.id_user} />
                }
            </AnimatePresence>
            <WelcomeText user={user} />
            <div className="flex flex-row md:gap-4 items-center">
                <Avatar setMenuAvatarOpen={setMenuAvatarOpen} avatar={avatar} />
                <Logout />
            </div>
        </motion.header>
    )
}