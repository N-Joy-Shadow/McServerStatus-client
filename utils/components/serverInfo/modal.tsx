import { ServerInfoItemProps } from "./item";
import formatplayercount from "../../util/formatplayercount";
import PlayerInfo from "../player/playerinfo";
import Tag from "../tag/tag";

export default function ServerInfoModal(props: ServerInfoItemProps) {
  const CurrentPlayer = props.data.frenquency.players.current;
  const MaxPlayer = props.data.frenquency.players.max;
  const FormatPlayer = formatplayercount(CurrentPlayer, MaxPlayer);
  return (
    <div
      className="flex  w-full flex-grow
    flex-col justify-start
    md:flex-row md:justify-between text-center md:text-start"
    >
      <div>
        <h1>{props.data.hostname}</h1>
        <p>
          IP : {props.data.lazy.ip}:{props.data.port}
        </p>
        <p>Player : {FormatPlayer}</p>
        <p>version : {props.data.lazy.version}</p>
        <p className="text-center mt-8 text-xl">Player List</p>
        <div className="grid gap-4 grid-cols-4 grid-flow-row outline outline-1 outline-white p-2 mt-2">
          {props.data.frenquency.players.playerlist?.map((x, i) => (
            <PlayerInfo key={i} name={x} />
          )) ?? (
            <div className="w-full col-span-4">
              현재 접속중인 플레이가 없습니다.
            </div>
          )}
        </div>
        <p className="text-center mt-4 text-xl">Tag</p>
        <div className="outline outline-1 outline-white mt-2 flex gap-4 p-2">
            {props.data.custom?.tags.map((x,i) =>{
              return(<Tag name={x} key={i}></Tag>)
            })}
        </div>

      </div>
      <img
        className="w-40 h-40 m-1 ml-4 hidden
          md:w-40 md:h-40 md:block
          "
        src={props.data.lazy.icon}
      ></img>
    </div>
  );
}
