import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import NavBar from "../utils/components/navbar";
import InfoServer from "../utils/components/infoServer";
import axios from "axios";
import { ServerInfo } from "../API/ServerInfo";
import Footer from "../utils/components/footer";

import styles from "../styles/Home.module.css";
import serverStyles from "../styles/serverinfo/sideinfo.module.css";
import ServerSideInfoLayout from "../utils/components/serverList/ServerSideInfoLayout";
import { ExpandMore } from "@mui/icons-material";
import { env } from "process";
import https from "https";
import MainLayout from "../utils/layouts/mainLayout";

const Home: NextPage = ({ data }: any) => {
  const [serverIp, setServerIp] = useState<string[]>([]);
  const [display, setDisplay] = useState<string>("none");

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const [serverInfo, SetserverInfo] = useState<ServerInfo>({
    hostName: "",
    isOnline: false,
    players: {
      playerCount: 0,
      playerList: [""],
      maxPlayerCount: 0,
    },
  });
  useEffect(() => {
    axios.get(`/v2/api/serverlist`, { httpsAgent: agent }).then((x) => {
      setServerIp(x.data);
    });
  }, []);

  return (
    <MainLayout>
        {serverIp.map((x, i) => {
          return <InfoServer serverip={x} key={i} />;
        })}
    </MainLayout>
  );
};

export const ServerInfoContext = createContext<ServerInfoContext>({
  data: {
    hostName: "",
    isOnline: false,
    players: {
      playerCount: 0,
      playerList: [""],
      maxPlayerCount: 0,
    },
  },
  setData: () => {},
});

interface ServerInfoContext {
  data: ServerInfo;
  setData: SetData;
}
type SetData = (value: ServerInfo) => void;

export default Home;
