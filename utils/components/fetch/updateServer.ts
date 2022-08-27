import axios from 'axios';
export async function UpdateServer(hostname :string){
    const data = await axios.put("/v2/api/status", { hostname: hostname})

    return data
}