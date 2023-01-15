
const url = process.env.NODE_ENV == "development" ? 
        "/api/": "/api/"


export const baseAPIURL = (path : string) =>{
    return url + path;   
}

export const baseHubURL = (path : string) =>{
    return process.env.NODE_ENV == "development" ? `https://localhost:7238/hubs/${path}` : `https://localhost:5001/hubs/${path}`
}