import MotdPaser from "../../util/MotdPaser";
import MCServerLoading from "../MCStyled/mcServerLoading";
import { ServerInfoItemProps } from "./item";


export default function ServerItem(props : ServerInfoItemProps) {
    const motdHtml = MotdPaser(props.data.motd)
    const playerCount = props?.data.players.playerCount ?? 0
    const MaxPlayer = props?.data.players.maxPlayerCount ?? 20
    const formattedCounter = `${playerCount} / ${MaxPlayer}`
    return(
        <div className="flex p-4
            hover:outline hover:outline-3 hover:outline-gray-500">
            <img src={props.icon} className="w-32 h-32 fill"/>
            <div className="flex flex-col pl-3 w-full">
                <div className="flex flex-row justify-between">
                    <h1 className="flex-grow">{props.data.hostName}</h1>
                    <div className="flex-grow-0 flex flex-row items-center">
                        <p className="text-center pr-2">{formattedCounter}</p>
                        <MCServerLoading isOnline={props.data.isOnline} LoadingStr={props.data.motd}/>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html : motdHtml}}/>
            </div>
        </div>
    )
};
