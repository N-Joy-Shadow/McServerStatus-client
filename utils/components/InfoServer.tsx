import axios from "axios";
import { useEffect, useState } from "react";
import { ServerInfo } from "../../API/ServerInfo";
import ServerInfoItem from "./serverInfo/item";
import {UpdateServer } from "./fetch/updateServer"
export interface infoServerProps {
  hostname: string;
}

export default function infoServer(props: infoServerProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [serverData, SetserverData] = useState<ServerInfo>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    UpdateServer(props.hostname).then((x) =>{
      SetserverData(x.data)
    })
  }, []);
  //임시
  let icon =
    serverData?.lazy.icon ??
    "https://status.shwa.space/assets/images/default.png";
  if (icon == "" || icon == null) {
    icon = "https://status.shwa.space/assets/images/default.png";
  }

  //TODO : Fix this 
  if (serverData == null) return (<div>야스</div>);
  //if (serverData == null) return (<div><ServerInfoItem data={dumpdata} icon={icon} isLoading={true}/></div>);

  return (
    <div>
      <ServerInfoItem data={serverData} icon={icon} isLoading={false} />
    </div>
  );
}
