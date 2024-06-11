import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }
    
    return (
        <motion.div
        whileHover={{scale: 1.1}}
        >
            <img className="cursor-pointer size-7" onClick={handleLogout}
                src="/src/assets/icons/logout.png" alt="logout" />
        </motion.div>
    )
}