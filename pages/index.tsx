import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { createContext, useEffect, useState } from "react";


import axios from "axios";

import MainLayout from "../utils/layouts/mainLayout";
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
} from "@microsoft/signalr";
import { ServerInfo } from "../API/ServerInfo";
import { serverListFetch, serverNameListFetch, serverUpdateListFetch } from "../utils/components/fetch/serverList";
import ServerInfoItem from "../utils/components/serverInfo/item";
import { Button } from "@mui/material";
import { baseHubURL } from "../utils/components/fetch/InitFetch";

const Home: NextPage = ({ data }: any) => {
  //zustnad
  const [serverList, setServerList] = useState<ServerInfo[]>([]);
  const [connection, setConnection] = useState<HubConnection>();
  const port = process.env.NODE_ENV =="development"  ? 7238 : 5001
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
    setConnection(newConnection);
  }, []);
  useEffect(() => {
    if (connection) {
      connection.start().then(() => {

        //test function
        serverUpdateListFetch().then((x) => {
          setServerList(x.data);
          connection.invoke("updateAllServer",x.data)
    
        });
  
        connection.on("updated", (data) => {
          setServerList(data);
        });
      });
    }
  }, [connection]);
  async function updateBtn(x : ServerInfo) {
    if (connection) {
      await connection.invoke("updateServer", x.hostname)
    }
  } 

  return (
    <MainLayout>
      {serverList.map((x) => {
        return (
          <>
            <ServerInfoItem data={x} isLoading={false}>
              <Button onClick={() => updateBtn(x)}>hi</Button>
            </ServerInfoItem>
          </>
        );
      })}
    </MainLayout>
  );
};

export default Home;
