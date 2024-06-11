import { ReactNode } from "react";

interface BackgroundProps {
    children: ReactNode;
}

export const BackgroundLogin = ({ children }: BackgroundProps) => {

    return (
        <section className="w-full h-dvh p-5
        bg-gradient-to-r from-blue-900 to-blue-500">
            { children }
        </section>
    )
}