import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { PlayerInfo } from "../../../API/PlayerInfo";

interface playerData {
  data?: PlayerInfo;
}

export default function MorePlayerInfo(player: playerData) {
  //const fetcher = (url : string) => axios.post(url,{name : player.name}).then((x) => x.data)
  //const { data, error} = useSWR<PlayerInfo>("https://localhost:7238/api/playerinfo",fetcher)


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <img
            src={player.data?.head3D}
            style={{ height: "111px", width: "120px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>닉네임 : {player.data?.name}</p>
            <p style={{ fontSize: "10px" }}>UUID : {player.data?.uuid} </p>
          </div>
        </div>
        <div style={{ overflowY: "auto", height: "200px" }}>
          {player.data?.history.map((x, i) => {
            return (
              <div key={i}>
                <p>
                  날짜 : {x.changedToAt} 닉 : {x.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
