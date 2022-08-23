import axios from 'axios';
export async function UpdateServer(hostname :string){
    const data = await axios.put("https://localhost:7238/api/status", { hostname: hostname})

    return data
}