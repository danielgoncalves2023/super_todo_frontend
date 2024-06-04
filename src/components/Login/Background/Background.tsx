import { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
}

export const BackgroundLogin = ({ children }: BackgroundProps) => {

    return (
        <section className="w-full h-dvh p-5
        bg-gradient-to-r from-sky-700 to-blue-400">
            { children }
        </section>
    )
}