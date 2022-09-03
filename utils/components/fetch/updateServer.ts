import axios from 'axios';
import { baseAPIURL } from './InitFetch';
export async function UpdateServer(hostname :string){
    const data = await axios.put(baseAPIURL("status"), { hostname: hostname})

    return data
}