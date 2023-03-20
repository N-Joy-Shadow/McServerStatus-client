import { ServerInfoItemProps } from "./item";
import formatplayercount from "../../utils/formatplayercount";
import PlayerInfo from "../player/playerinfo";
import Tag from "../tag/tag";

import bg from "../../styles/mc/Background.module.css";
import ModalMods from "./modal/mods";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { ToastEnum } from "../MCStyled/mcToast";
import versionRegex from "../../utils/string/version";
import { McBackground, McButton } from "../MCStyled/mcStyle";

export default function ServerInfoModal(props: ServerInfoItemProps) {
  const CurrentPlayer = props.data.frenquency.players.current;
  const MaxPlayer = props.data.frenquency.players.max;
  const FormatPlayer = formatplayercount(CurrentPlayer, MaxPlayer);

  const HostName = props.data.hostIP.decoration.port == 25565 ? 
  props.data.hostIP.decoration.hostname : props.data.hostIP.decoration.combine_hostname

  const handleCopy = () => {
    enqueueSnackbar("주소가 복사되었습니다.", {
      variant: "Toast",
      toastType: ToastEnum.info,
    });
    navigator.clipboard.writeText(
      HostName
    );
  };
  return (
    <>
      <McBackground className="w-auto flex  justify-between">
          {/* 주소 복사 */}
          <div className="text-xl text-center self-center flex justify-start cursor-pointer m-2  select-none items-center" onClick={handleCopy}>
            <img
                className="w-10 h-10 ml-2 mr-4  rounded-full"
                src={props.data.lazy.icon}/>
                {HostName}
          </div>
          {/* 버튼들 */}
          <div className="p-1">
              <Link to={`/server/edit/${props.data.hostIP.decoration.combine_hostname}`}>
                <McButton className="w-14 h-full">수정</McButton>
              </Link>
              <Link to={`/server/dev/${props.data.hostIP.decoration.combine_hostname}`}>
                <McButton className="w-14 h-full">수정</McButton>
              </Link>
          </div>
      </McBackground>

      <div className={bg.Mcbg}>
        <div className="flex w-full flex-grow flex-col justify-start
                        md:flex-row md:justify-between text-center md:text-start p-2">
          <div className="w-full">
            <div className="flex md:flex-row md:justify-between flex-col-reverse items-center">
              <div className="mb-auto space-y-2">
                <p>접속가능 버전 : {versionRegex(props.data.lazy.version)}</p>
                <p>서버 IP : {versionRegex(props.data.lazy.ip)}</p>
                {props.data.custom?.gallurl && (
                  <div className="h-12">

                  <a href={props.data.custom?.gallurl}>
                    <McButton>
                      <strong>서버 게시물 보기</strong>
                    </McButton>
                  </a>
                  </div>
                )}
              </div>

            </div>

            <p className="md:text-start pl-2 mt-8 text-xl text-center ">
              플레이어 목록 ({FormatPlayer})
            </p>
            <div className="p-2 mt-2 space-x-2">
              {props.data.frenquency.players.playerlist?.map((x, i) => (
                <PlayerInfo key={i} data={x} />
              )) ?? (
                <div className="w-full col-span-4">
                  {props.data.frenquency.players.current == 0 ? "현재 접속중인 플레이가 없습니다." : "서버가 유저닉네임을 공개하고 있지않습니다."}
                </div>
              )}
            </div>
            <p className="pl-4 mt-4 text-center text-xl md:text-start">태그</p>
            <div className="mt-2 flex gap-4 p-2">
              {props.data.custom?.tags.map((x, i) => {
                return <Tag name={x} key={i}></Tag>;
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
