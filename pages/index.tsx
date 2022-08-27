import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { createContext, useEffect, useState } from "react";

import InfoServer from "../utils/components/infoServer";
import axios from "axios";

import MainLayout from "../utils/layouts/mainLayout";
import { HttpTransportType, HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ServerInfo } from '../API/ServerInfo';
import { serverNameListFetch } from "../utils/components/fetch/serverlist";

const Home: NextPage = ({ data }: any) => {
  const [serverList, setServerList] = useState<ServerInfo[]>([]);



  const [connection, setConnection] = useState<HubConnection>();
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      //Fix Url Later
      .withUrl("https://localhost:7238/hubs/update", {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);



 

  //getServerList from serer
  //TODO : Move SSR
  useEffect(() => {
    serverNameListFetch().then((x) => {
      setServerList(x.data);
    });
  }, []);

  return (
    <MainLayout>
      {serverList.map((x, i) => <InfoServer signalR={connection} hostname={x} key={x._id} />)}
    </MainLayout>
  );
};




export default Home;
