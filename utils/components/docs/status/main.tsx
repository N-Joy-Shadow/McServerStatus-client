import { Autocomplete, TextField } from "@mui/material"
import axios, { AxiosResponse } from "axios"
import APIHolder from "../holder"
import APIResult from "../result"
import { useEffect, useState } from 'react';
import { ResInfo } from "../../../../API/ResInfo";
import { ServerInfo } from "../../../../API/ServerInfo";

export default function APIStatus() {
    const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL ?? "https://status.njoys.me/api/"
    const BASE_URL = BASE_API + "status/"

    const [servers, SetServers] =useState<string[]>([])
    const [result, SetResult] = useState<ResInfo<ServerInfo>>();
    const [hostname, SetHostname] = useState<string>("");



    useEffect(() =>{

        axios.get(`${BASE_API}serverlist`).then(x => {

          SetServers(x.data.data)
        })
        console.log(servers)
      },[])
    
      const ExecuteGet = async (e: React.MouseEvent<HTMLInputElement>) => {
        const url = BASE_URL + hostname;
        await axios.get(url).then((x: AxiosResponse<ResInfo<ServerInfo>>) => {
          SetResult(x.data);
        });
      };


    return(
        <>
        <APIHolder Input_URL="status/" HandleOnClick={ExecuteGet}>
          <Autocomplete
                options={servers}
                className="m-2 w-full"
                onChange={(event: any, newValue: string | null) => {
                  if(newValue)SetHostname(newValue)
                }}
                renderInput={(x) => <TextField {...x} label="서버주소"/>}/>
        </APIHolder>

      
        <APIResult data={result} />
        <div className="rounded-xl outline-4 outline-orange-300 outline w-[90vw] h-full bg-white">
          <div className="bg-orange-300 text-white py-1 pb-3 text-xl">설명</div>
          <div className="text-black p-2 text-start">
            HostIP의 Original과 Decoration의 차이점 :<br/>
            Original : SRV 호스트 주소입니다.<br/>
            Decoration : 실질적으로 유저가 마인크래프트에 연결하는 호스트 주소입니다.
          </div>
        </div></>
    )
};
