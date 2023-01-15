import { Autocomplete, Button, TextField } from "@mui/material"
import axios, { AxiosResponse } from "axios"
import APIHolder from "../holder"
import APIResult from "../result"
import { useEffect, useState } from 'react';
import { IResInfo } from "../../../API/IResInfo";
import { IServerInfo } from '../../../API/IServerInfo';
import react from "react"

const APIStatus = () => {
  const [servers, SetServers] =useState<string[]>([])
  const [result, SetResult] = useState<IResInfo<IServerInfo>>();
  const [hostname, SetHostname] = useState<string>("");

  useEffect(() =>{
    axios.get(`${BASE_API}/serverlist`).then(x => {

      SetServers(x.data.data)
    })
    console.log(servers)
  },[])

  const ExecuteGet = async (e: React.MouseEvent<HTMLInputElement>) => {
    const url = BASE_URL + hostname;
    await axios.get(url).then((x: AxiosResponse<IResInfo<IServerInfo>>) => {
      SetResult(x.data);
    });
  };

    const BASE_API = import.meta.env.VITE_BASE_API_URL
    const BASE_URL = BASE_API + "/status/"







    return(
        <>
        <APIHolder Input_URL="/status/" HandleOnClick={ExecuteGet}>
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
export default APIStatus
