import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ServerInfo } from '../../API/ServerInfo';
import ServerInfoLayout from "./serverList/ServerInfoLayout";
import { ServerInfoContext } from "../../pages/index";
import ServerInfoItem from "./serverInfo/item";

export interface serverip {
  serverip: string;
}

export default function infoServer(name: serverip) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [serverData, SetserverData] = useState<ServerInfo>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .post("https://localhost:7238/api/db", { Ip: name.serverip })
      .then((x) => {
        SetserverData(x.data.serverInfo);
      });
  }, []);
  //임시
  let icon =
    serverData?.icon ?? "https://status.shwa.space/assets/images/default.png";
  if (icon == "" || icon == null) {
    icon = "https://status.shwa.space/assets/images/default.png";
  }

  let dumpdata: ServerInfo = {

    isOnline: false,
    hostName: name.serverip,
    players: {
      playerCount: 0,
      maxPlayerCount: 0,
    },
    motd: "loading...",
  };
  if (serverData == null) return (<div><ServerInfoLayout data={dumpdata} icon={icon} /></div>);
  return (
    <div
      onClick={() => {
        serverData.icon = icon;
      }}
    >    {/* <ServerInfoItem/> */}
      <ServerInfoItem data={serverData} icon={icon}/>
      <ServerInfoLayout data={serverData} icon={icon} /> 
    </div>
  );
}
