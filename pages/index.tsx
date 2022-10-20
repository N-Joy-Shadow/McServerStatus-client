import type { NextPage } from "next";
import { useEffect, useState } from "react";

import MainLayout from "../utils/layouts/mainLayout";
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";
import { ServerInfo } from "../API/ServerInfo";
import {
  serverListFetch,
  serverNameListFetch,
  serverUpdateListFetch,
} from "../utils/components/fetch/serverList";
import ServerInfoItem from "../utils/components/serverInfo/item";
import { Button } from "@mui/material";
import { baseHubURL } from "../utils/components/fetch/InitFetch";
import MCButton from "../utils/components/MCStyled/mcButton";
import { useTagStore } from "../utils/zustand/tagStore";
import Tag from "../utils/components/tag/tag";
import { ServerFilter } from "../utils/util/listFilter";

const Home: NextPage = ({ data }: any) => {
  //zustnad
  const [serverList, setServerList] = useState<ServerInfo[]>([]);
  const [filterList, setFilterList] = useState<ServerInfo[]>([]);
  const [connection, setConnection] = useState<HubConnection>();

  const [isConnect,setIsConnect] = useState<boolean>(false)
  //init signalR
  useEffect(() => {

      const newConnection = new HubConnectionBuilder()
      //Fix Url Later

        .withUrl(baseHubURL("update"), {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets,
        })
        .withAutomaticReconnect()
        .build();
        
    serverListFetch().then((x) => {
      setServerList(x.data);
      setFilterList(x.data)
    });
    //disble for design
    setConnection(newConnection);
  }, []);
  useEffect(() => {
    if (connection?.state == HubConnectionState.Connected && connection) {
      setIsConnect(true)

      connection.start().then(() => {
        //test function
        serverUpdateListFetch().then((x) => {
          setServerList(x.data);
        });

        connection.on("updated", (data) => {
          setServerList(data);
        });
      });
    }
    else{

    }
  }, [connection]);

  const TagList = useTagStore((x) => x.TagList)
  useEffect(() =>{
    if(serverList != undefined){
      setFilterList(ServerFilter(serverList,TagList))
    }
  },[TagList, serverList])
  return (
    <MainLayout>
      <div className="flex flex-row gap-2 h-12 justify-start items-center">
        {TagList.length != 0 && <h2 className="text-lg">Tag List :</h2>}
        {TagList.map((x,i) =>{
          return(<Tag name={x} key={i} isSelected={true}></Tag>)
        })}
      </div>
      {/* SignalR 연결 확인 */}
      {isConnect == false && <div className="text-center align-middle w-full h-full">서버와 연결에 실패했습니다.</div>}

      <div>
      {filterList.map((x,i) => {
        return <ServerInfoItem data={x} isLoading={false} key={i}/>
      })}
      </div>
    </MainLayout>
  );
};

export default Home;
