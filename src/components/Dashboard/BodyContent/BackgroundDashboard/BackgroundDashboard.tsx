import { ReactNode } from "react"

interface BackgroundProps {
    children: ReactNode
}

export const BackgroundDashboard = ({ children }: BackgroundProps) => {

    return (
        <section className="flex flex-col p-5 mb-10 h-auto w-full">
            {children}
        </section>
    )
}