import { motion } from "framer-motion"
import { Copyright } from "./Copyright/Copyright"
import { DateNow } from "./DateNow/DateNow"
import { SocialMedia } from "./SocialMedia/SocialMedia"

export const Footer = () => {

    return (
        <motion.footer
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex flex-col px-5 w-full items-center justify-center gap-2 min-h-[70px] max-h-[90px] bg-[black] text-white fixed bottom-0">
            <DateNow />
            <div className="w-full flex flex-row items-center justify-center gap-7">
                <Copyright />
                <SocialMedia />
            </div>
        </motion.footer>
    )
}