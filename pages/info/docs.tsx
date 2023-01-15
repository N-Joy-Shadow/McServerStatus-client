import React, { useEffect, useState } from 'react';
import { IHelmet } from '../../API/IHelmet';
import InfoLayout from '../../layouts/infoLayout';
import APIServerList from '../../components/docs/serverlist/main';
import { IResInfo } from '../../API/IResInfo';
import { IServerInfo } from '../../API/IServerInfo';
import axios, { AxiosResponse } from 'axios';
import APIStatus from '../../components/docs/status/main';

export default function Docs() {
  const [servers, SetServers] =React.useState<string[]>([])
  const [result, SetResult] = React.useState<IResInfo<IServerInfo>>();
  const [hostname, SetHostname] = React.useState<string>("");

  const BASE_API = import.meta.env.VITE_BASE_API_URL
  const BASE_URL = BASE_API + "/status/"

  React.useEffect(() =>{

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

  const helmet: IHelmet = {
    title: "API 문서",
  };

  const cfg = {
    type: "space",
    size: 4,
  };

  return (
    <InfoLayout helmet={helmet}>
      <div className="m-6 flex justify-center items-center  flex-col space-y-8 text-center">
        <h6>주의! 모바일은 ㅁ?ㄹ</h6>

        {/* Get Server Status */}
         <APIStatus/>
        {/* Get ServerList */}
         <APIServerList/>
      </div>
    </InfoLayout>
  );
}