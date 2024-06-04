import { ReactNode } from "react"

interface BackgroundProps {
    children: ReactNode
}

export const BackgroundDashboard = ({ children }: BackgroundProps) => {

    return (
        <div className="bg-gradient-to-r from-orange-700 to-orange-400">
            { children }
        </div>
    )
}