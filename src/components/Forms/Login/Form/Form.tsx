import { Link, useNavigate } from "react-router-dom"
import { Login } from "../../../../lib/user/login"
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { Button } from "../../Button/Button";

export const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        Login(email, password, navigate, dispatch)
    }

    return (
        <>
            <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <img className="size-15" src="/src/assets/icons/logo_login.png" alt="Seu super todo" />
                        <h1 className="font-semibold">O seu super TODO!</h1>
                    </div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entre com a sua conta</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required
                                value={email} onChange={(event) => setEmail(event.target.value)}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autoComplete="current-password" required
                                value={password} onChange={(event) => setPassword(event.target.value)}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <Button>
                            Entrar
                        </Button>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-800">
                        É novo por aqui?
                        <Link to={'/register'} className="pl-2 font-semibold leading-6 text-zinc-400 hover:text-zinc-300 duration-200">
                            Cadastre-se aqui
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}