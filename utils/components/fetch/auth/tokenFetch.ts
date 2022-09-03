import axios from "axios";
import https from "https";

export async function TokenChangeFetch(code : string) {
    const API_ENDPOINT = "https://discord.com/api/v10"
    const API_URL = API_ENDPOINT + "/oauth2/token"
    return await axios.post("/v2/api/oauth",{code : code})
  /*   //change this to .env
    const REDIRECT_URL = "http://localhost:12345/auth"
    return await axios({
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },data :{
            'client_id' : process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
            'client_secret' : process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET,
            'grant_type' : "authorization_code",
            'code' : code,
            'redirect_uri' : REDIRECT_URL
        },
        url : API_URL,
        method : "POST"
    }) */
}
