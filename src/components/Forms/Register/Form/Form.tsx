import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../../../lib/user/register";
import { verifyEmailRegister } from "../../../../lib/user/verifyEmailRegister";
import { Button } from "../../Button/Button";

export const FormRegister = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [emailStatus, setEmailStatus] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const emailCheck = await verifyEmailRegister(email);

        if (emailCheck.message === 'Email disponível') {
            Register(email, password, name, gender, navigate);
        } else {
            setEmailStatus('Email já está em uso');
        }
    };

    const handleEmailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = event.target.value;
        setEmail(emailValue);

        if (emailValue) {
            const emailCheck = await verifyEmailRegister(emailValue);

            if (emailCheck.message === 'Email disponível') {
                setEmailStatus('Email disponível');
            } else {
                setEmailStatus('Email já está em uso');
            }
        } else {
            setEmailStatus(null);
        }
    };

    return (
        <>
            <div className="flex h-full flex-col justify-center px-6 md:py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Cadastre a sua conta
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                                {emailStatus && (
                                    <span className={`mt-2 text-sm ml-3 ${emailStatus === 'Email disponível' ? 'text-green-600' : 'text-red-500'}`}>
                                        {emailStatus}
                                    </span>
                                )}
                            </label>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Nome */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Gênero */}
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                Gênero
                            </label>
                            <div className="flex flex-row gap-10">
                                <div className="flex flex-row gap-2">
                                    <input
                                        name="gender"
                                        type="radio"
                                        value='F'
                                        checked={gender === 'F'}
                                        required
                                        onChange={(event) => setGender(event.target.value)}
                                        className=""
                                    />
                                    <label htmlFor="F">Feminino</label>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input
                                        name="gender"
                                        type="radio"
                                        value='M'
                                        checked={gender === 'M'}
                                        required
                                        onChange={(event) => setGender(event.target.value)}
                                        className=""
                                    />
                                    <label htmlFor="M">Masculino</label>
                                </div>
                            </div>
                        </div>

                        <Button>
                            Cadastrar
                        </Button>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-800">
                        Já possui cadastro?
                        <Link to={'/'} className="pl-2 font-semibold leading-6 text-zinc-400 hover:text-zinc-300 duration-200">
                            Faça login aqui
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};
