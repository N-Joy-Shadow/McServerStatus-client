import axios from 'axios';
import { baseURL } from './InitFetch';
export async function UpdateServer(hostname :string){
    const data = await axios.put(baseURL("status"), { hostname: hostname})

    return data
}