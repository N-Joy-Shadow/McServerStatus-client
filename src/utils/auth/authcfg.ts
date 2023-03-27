const msalConfig = {
    auth : {
        clientId : import.meta.env.VITE_AUTH_CLIENT_ID,
        redirectUri : import.meta.env.VITE_AUTH_REDIRECTURI
    },
    caches : {
        cacheLocation : "sessionStorage",
        storeAuthStateInCookie: false
    }
}
const LoginRequest ={
    scopes : ["User.Read"]
}

export {
    msalConfig,
    LoginRequest
}