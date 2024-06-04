import { useNavigate } from "react-router-dom";

interface HeaderProps {
    name_user: string,
    gender_user: string,
    avatar: string
}

export const Header = ({ name_user, gender_user, avatar }: HeaderProps) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="w-full h-12 flex flex-row justify-around items-center
        bg-gradient-to-r from-slate-500 to-zinc-900">
            <div>
                {gender_user === 'M' ? (
                    <h1 className="text-xl font-semibold">Seja bem vindo, {name_user}</h1>
                ) : (
                    <h1 className="text-xl font-semibold">Seja bem vinda, {name_user}</h1>
                )}
            </div>
            <div className="flex flex-row gap-4 items-center">
                <div>
                    <img className="cursor-pointer size-8" src={avatar} alt='avatar_user' />
                </div>
                <div>
                    <img className="cursor-pointer size-9" onClick={handleLogout}
                        src="/src/assets/icons/logout.png" alt="logout" />
                </div>
            </div>
        </div>
    )
}