import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {

    return (
        <>
            {/* Botão cadastrar */}
            < div >
                <button
                    {...props}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                    hover:bg-blue-800 active:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {children}
                </button>
            </ div>
        </>
    )
}