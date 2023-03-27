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

    return(<McBackground className="w-[600px]">
        <div className="flex gap-2">
            <img src="./ms_logo.svg" width={64}/>
            <div>
                <h1 className="text-center items-center grow text-xl"><strong>로그인</strong></h1><hr/>
                <p>With Microsoft Account</p>
            </div>
        </div>
        <McButton onClick={HandleLogin}>Login With Microsoft Account</McButton>
    </McBackground>)
};
