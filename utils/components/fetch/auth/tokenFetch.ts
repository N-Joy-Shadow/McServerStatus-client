import axios from "axios";
import https from "https";
import qs from 'qs';

export async function TokenChangeFetch(code : string) {
    console.log(code)
    return await axios.post("/v2/api/oauth",{code : code})
    //change this to .env

/* 
    const REDIRECT_URL = "http://localhost:12345/auth"
    const T_REDIRECT_URL = "https://maplecalc.xyz/auth"
    const data = qs.stringify(
        {
            'client_id' : process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
            'client_secret' : process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
            'grant_type' : "authorization_code",
            'code' : code,
            'redirect_uri' : REDIRECT_URL
        },{
            charset:"utf-8",
        
        }
    )
        console.log(data)
    return await axios.post(
        API_URL,
        data,{
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        
        }}) */
}
