import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ServerInfo } from '../API/ServerInfo';
import PlayerMinInfo from "./player/player_info";
import styles from "../styles/serverinfo/sideinfo.module.css";
import ServerInfoLayout from "./ServerList/ServerInfoLayout";
import { ServerInfoContext } from '../pages/index';
import serverStyle from "../styles/serverinfo/server.module.css";

export interface serverip {
  serverip: string;
}

export default function infoServer(name: serverip) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [serverData, SetserverData] = useState<ServerInfo>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [reload, Setreload] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .post("https://localhost:7238/api/db", { Ip: name.serverip })
      .then((x) => {
        
        SetserverData(x.data[0]);
      });
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, setData }= useContext(ServerInfoContext);
  //임시
  let icon = serverData?.icon ?? "https://status.shwa.space/assets/images/default.png";
  if (icon == "" || icon == null) {
    icon = "https://status.shwa.space/assets/images/default.png";
  }


  let dumpdata : ServerInfo= {
    isOnline :false,
    hostName : name.serverip,
    motdHtml : ["<p style={{ color : 'white'}}>Loading...</p>"],
    players :{
      playerCount : 0,
      maxPlayerCount : 0,
    }
    
  }

  if (serverData == null) return (<div><ServerInfoLayout data={dumpdata} icon={icon}/></div>)
  return (
    <div onClick={() =>{
      serverData.icon = icon
      setData(serverData)
    }}>

      <ServerInfoLayout data={serverData} icon={icon}/>
    </div>
  );
}
