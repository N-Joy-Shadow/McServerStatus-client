import { ServerInfoItemProps } from "./item";
import formatplayercount from "../../util/formatplayercount";
import PlayerInfo from "../player/playerinfo";
import Tag from "../tag/tag";

import bg from "../../../styles/mc/Background.module.css";
import ModalMods from './modal/mods';

export default function ServerInfoModal(props: ServerInfoItemProps) {
  const CurrentPlayer = props.data.frenquency.players.current;
  const MaxPlayer = props.data.frenquency.players.max;
  const FormatPlayer = formatplayercount(CurrentPlayer, MaxPlayer);
  return (
    <div className={bg.Mcbg}>
      <div
        className="flex  w-full flex-grow
    flex-col justify-start
    md:flex-row md:justify-between text-center md:text-start p-2"
      >
        <div className="w-full">
          <div className="flex md:flex-row md:justify-between
            flex-col-reverse items-center
          ">
            <div>
              <h1>서버 주소 : {props.data.hostname}</h1>
              <p>
                IP : {props.data.lazy.ip}:{props.data.port}
              </p>
              <p>플레이어 : {FormatPlayer}</p>
              <p>버전 : {props.data.lazy.version}</p>
            </div>
            <img
              className="w-40 h-40 m-1 ml-4 rounded-full
        md:w-40 md:h-40 md:block md:rounded-none"
              src={props.data.lazy.icon}
            ></img>
          </div>
          <a href={props.data.custom?.gallurl}>→→ <strong>갤러리 홍보 게시물 보기</strong> ←←</a>

          <p className="text-start pl-2 mt-8 text-xl">플레이어 목록</p>
          <div className="p-2 mt-2">
            {props.data.frenquency.players.playerlist?.map((x, i) => (
              <PlayerInfo key={i} name={x} />
            )) ?? (
              <div className="w-full col-span-4">
                현재 접속중인 플레이가 없습니다.
              </div>
            )}
          </div>
          <p className="pl-4 text-start mt-4 text-xl">태그</p>
          <div className="mt-2 flex gap-4 p-2">
            {props.data.custom?.tags.map((x, i) => {
              return <Tag name={x} key={i}></Tag>;
            })}
          </div>
          <ModalMods mods={props.data.lazy.mods}/>
        </div>
      </div>
    </div>
  );
}
