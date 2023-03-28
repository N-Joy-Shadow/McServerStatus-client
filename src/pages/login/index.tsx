import { McBackground, McBackgroundLayout, McButton } from "../../components/MCStyled/mcStyle";
import { useMsal } from '@azure/msal-react';
import { LoginRequest } from "../../utils/auth/authcfg";
import styled from "styled-components";
import { LoaderFunctionArgs } from "react-router-dom";
const Login = () => {
    const { instance } = useMsal();

    const HandleLogin = () => {
        instance.loginRedirect(LoginRequest).then((x) =>{
            console.log(x)
        })
    }

    const LoginBackground = styled(McBackground)`
        width: 300px;
        position: relative;

    `

    return(<LoginBackground>
        <div className="flex gap-2">

            <img src="./ms_logo.svg" width={64}/>
            <div>
                <h1 className="text-center items-center grow text-xl"><strong>로그인</strong></h1><hr/>
                <p>With Microsoft Account</p>
            </div>
        </div>
        <McButton onClick={HandleLogin}>Login With Microsoft Account</McButton>
    </LoginBackground>)
};

const LoginLoader = ({ params,request } : LoaderFunctionArgs) => {
    
}

export default Login
export {
    LoginLoader
}
