import { BackgroundLogin } from "./Background/Background"
import { FormLogin } from "./Form/Form"

export const Login = () => {

    return (
        <BackgroundLogin>
            <FormLogin />
        </BackgroundLogin>
    )
}