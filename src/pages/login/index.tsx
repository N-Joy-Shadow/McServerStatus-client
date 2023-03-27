import { McBackground, McBackgroundLayout, McButton } from "../../components/MCStyled/mcStyle";
import { useMsal } from '@azure/msal-react';
import { LoginRequest } from "../../utils/auth/authcfg";

export default function Login() {
    const { instance } = useMsal();

    const HandleLogin = () => {
        instance.loginRedirect(LoginRequest).then((x) =>{
            console.log(x)
        })
    }

    return(<McBackground>
        <McButton onClick={HandleLogin}>Login With Microsoft Account</McButton>
    </McBackground>)
};
