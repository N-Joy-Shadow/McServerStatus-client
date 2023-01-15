import axios from "axios";
import { useState } from "react";
import { IResInfo } from "../../../API/IResInfo";
import APIHolder from "../holder";
import APIResult from "../result";

export default function APIServerList() {
    const BASE_API =  import.meta.env.VITE_BASE_API_URL
    const BASE_URL = BASE_API + "/serverlist"

    const [result ,SetResult] = useState<IResInfo<string[]>>()

    const HandleOnClick = (e : any) =>{
        axios.get(BASE_URL).then((x) =>{
            SetResult(x.data)
        })
    }

    return (<>
    <APIHolder Input_URL="/serverlist" HandleOnClick={HandleOnClick}>
        <></>
    </APIHolder>
    <APIResult data={result}/>
    </>)
};
