import axios from "axios";
import { useState } from "react";
import { ResInfo } from "../../../../API/ResInfo";
import APIHolder from "../holder";
import APIResult from "../result";

export default function APIServerList() {
    const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL ?? "https://status.njoys.me/api"
    const BASE_URL = BASE_API + "/serverlist"

    const [result ,SetResult] = useState<ResInfo<string[]>>()

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
