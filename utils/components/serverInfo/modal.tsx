import { ServerInfoItemProps } from "./item";
import { FormatPlayerCount } from '../../util/formatPlayerCount';
import PlayerInfo from "../player/playerinfo";

export default function ServerInfoModal(props: ServerInfoItemProps) {
    const CurrentPlayer = props.data.players.playerCount
    const MaxPlayer = props.data.players.maxPlayerCount
    const FormatPlayer = FormatPlayerCount(CurrentPlayer,MaxPlayer)
    return(<div>
        <img className="float-right w-40 h-40" src={props.icon}></img>
        <h1>{props.data.hostName}</h1>
        <p>{FormatPlayer}</p>
        <p>version : {props.data.version}</p>
        <div className="grid grid-cols-4 gap-4">
            {props.data.players.playerList?.map((x,i) =>(<div key={i}>
                <PlayerInfo name={x}/>
            </div>)) ?? (<div className="w-full">현재 접속중인 플레이가 없습니다.</div>)}
        </div>
    </div>)
};
