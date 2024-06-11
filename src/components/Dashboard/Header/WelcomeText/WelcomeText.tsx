import IUser from "../../../../models/User"

interface WelcomeTextProps {
    user: IUser;
}

export const WelcomeText = ({user}: WelcomeTextProps) => {

    return (
        <div className="">
            {user.gender === 'M' ? (
                <h1 className="xs:text-base sm:text-xl text-zinc-100 font-semibold">Seja bem vindo, {user.name}.</h1>
            ) : (
                <h1 className="xs:text-base sm:text-xl text-zinc-100 font-semibold">Seja bem vinda, {user.name}.</h1>
            )}
        </div>
    )
}