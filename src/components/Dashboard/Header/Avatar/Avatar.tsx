import { motion } from "framer-motion";

interface AvatarProps {
    setMenuAvatarOpen: (arg: boolean) => void;
    avatar: string;
}

export const Avatar = ({ setMenuAvatarOpen, avatar }: AvatarProps) => {

    const handleEditAvatar = () => {
        setTimeout(() => {
            setMenuAvatarOpen(true)
        }, 500);
    }

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 mr-1">
            <img className="cursor-pointer"
                onClick={handleEditAvatar} src={avatar} alt='avatar_user' />
        </motion.div>
    )
}