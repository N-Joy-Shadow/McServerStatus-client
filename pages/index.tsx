import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import NavBar from "../components/navbar";
import InfoServer from "../components/InfoServer";
import axios from "axios";
import { ServerInfo } from "../API/ServerInfo";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";
import serverStyles from "../styles/serverinfo/sideinfo.module.css";
import ServerSideInfoLayout from "../components/ServerList/ServerSideInfoLayout";

const Home: NextPage = ({ data }: any) => {
  const [serverIp, setServerIp] = useState<string[]>([]);
  const [display, setDisplay] = useState<string>("none");
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
    axios.get("https://localhost:7238/api/serverlist").then((x) => {
      setServerIp(x.data);
    });
  }, []);
  if (serverIp == null) {
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>Loading...</div>
      <Footer />
    </div>;
  }
  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>서버 리스트</title>
        <meta name="description" content="스티브 갤러리 서버 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServerInfoContext.Provider
        value={{ data: serverInfo, setData: SetserverInfo }}
      >
        <div style={{ display: "flex" }}>
          <div className={styles.main}>
            {serverIp.map((x, i) => {
              return <InfoServer serverip={x} key={i} />;
            })}
          </div>
          <div
            className={serverStyles.ServerLayoutContainer}
            style={{ display: serverInfo.hostName == "" ? "none" : "block" }}
          >
            <ServerSideInfoLayout data={serverInfo} />
          </div>
        </div>
      </ServerInfoContext.Provider>
      <Footer />
    </div>
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
