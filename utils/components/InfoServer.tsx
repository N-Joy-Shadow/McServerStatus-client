/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { ServerInfo } from "../../API/ServerInfo";
import ServerInfoItem from "./serverInfo/item";
import {UpdateServer } from "./fetch/updateServer"
import { HubConnection, HubConnectionBuilder, HttpTransportType, HubConnectionState } from '@microsoft/signalr';
import { Button } from '@mui/material';
export interface infoServerProps {
  hostname: string;
  signalR? : HubConnection;
}

export default function infoServer(props: infoServerProps) {
  const [serverData, SetserverData] = useState<ServerInfo>();

  useEffect(() =>{
    UpdateServer(props.hostname).then((x) =>{
      SetserverData(x.data)
    })
  },[])

  useEffect(() => {
    if (props.signalR) {
      props.signalR
        .start()
        .then(() => {
          console.log("connected");
          props.signalR?.on("updated", (data) => {
            SetserverData(data)
          });
        })
        .catch((e) => console.log("Connection failed: ", e));
    }
  },[]);
  //임시

  //TODO : Fix this 
  if (serverData == null) return (<>야스</>);
  //if (serverData == null) return (<div><ServerInfoItem data={dumpdata} icon={icon} isLoading={true}/></div>);

  return (
    <>
      <ServerInfoItem data={serverData} isLoading={false}>
        <Button onClick={updateBtn}>RELOAD</Button>
      </ServerInfoItem>
    </>
  );
}
