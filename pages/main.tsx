import { useEffect, useState } from "react";
import { useOnlineStore } from '../zustand/onlineStore';

import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";
import { IServerInfo } from "../API/IServerInfo";
import ServerInfoItem from '../components/serverInfo/item';
import MainLayout from '../layouts/mainLayout';
import Tag from '../components/tag/tag';
import { useTagStore } from '../zustand/tagStore';
import axios from 'axios';
import filterIntegration from '../utils/filters/serverFilter';


const Home = () => {
  //zustnad
  const [serverList, setServerList] = useState<IServerInfo[]>([]);
  const [filterList, setFilterList] = useState<IServerInfo[]>([]);
  const [connection, setConnection] = useState<HubConnection>();
  
  const { isOnline ,SetOnline} = useOnlineStore()


  const url = import.meta.env.VITE_BASE_API_URL

  //나중에 손보기
  /* const [isConnect, setIsConnect] = useState<boolean>(true); */
  //init signalR
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      //Fix Url Later
      .withUrl(import.meta.env.VITE_BASE_HUB_URL, {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();
      axios.post(`${import.meta.env.VITE_BASE_API_URL}/serverlist`).then((x) => {
        setServerList(x.data.data);
        setFilterList(x.data.data);
    });
    setConnection(newConnection);
  }, []);
  useEffect(() => {
    if (connection?.state == HubConnectionState.Connected) {
      connection.start().then(() => {
        //test function
        axios.put(`${import.meta.env.VITE_BASE_API_URL}/serverlist`).then((x) => {
          setServerList(x.data);
        });

        connection.on("updated", (data) => {
          setServerList(data);
        });
      });
    } else {
    }
  }, [connection]);

  const TagList = useTagStore((x) => x.TagList);
  useEffect(() => {
    if (serverList != undefined) {
      setFilterList(filterIntegration(serverList, TagList,isOnline));
    }
  }, [TagList, serverList,isOnline]);
  
  return (
    <MainLayout>
      <div
        className="flex-row gap-2 h-12 justify-start items-center"
        style={{ display: TagList.length == 0 ? "none" : "flex" }}
      >
        {TagList.length != 0 && <h2 className="text-lg ml-4">태그 목록 :</h2>}
        {TagList.map((x, i) => {
          return <Tag name={x} key={i} isSelected={true}></Tag>;
        })}
      </div>
{/*       {/* SignalR 연결 확인
      {isConnect == false && (
        <div className="text-center align-middle w-full h-full">
          서버와 연결에 실패했습니다.
        </div>
      )} */}

      <div>
        {filterList.map((x, i) => {
          return <ServerInfoItem data={x} isLoading={false} key={i} />;
        })}
      </div>
    </MainLayout>
  );
};

export default Home;