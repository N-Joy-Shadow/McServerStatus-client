/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router"
import { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";

export default function index() {
    const router = useRouter()
    const { code } = router.query 

    const [cookies, setCookie] = useCookies(['refresh_token']);


    const URL = process.env.NEXT_PUBLIC_BASE_AUTH_URL ?? ""
    const Auth_URL = URL + '/accesstoken'
    useEffect(() =>{
        if(typeof code == "string" && URL){
            axios.post(Auth_URL,{ code : code }).then(x =>{
                axios.defaults.headers.common['Authorization'] = x.data.data.token
                setCookie("refresh_token",x.data.data.refresh_token)
            })
        }
    },[router.query.code])

    return <div>hi</div>
};
