import formatplayercount from "../../util/FormatPlayerCount";
import MotdPaser from "../../util/MotdPaser";
import MCServerLoading from "../MCStyled/mcServerLoading";
import { ServerInfoItemProps } from "./item";


export default function ServerItem(props : ServerInfoItemProps) {
    const motdHtml = MotdPaser(props.data.motd)
    const playerCount = props?.data.players.playerCount
    const MaxPlayer = props?.data.players.maxPlayerCount

    const formattedCounter = formatplayercount(playerCount,MaxPlayer)
    return(
        <div className="flex">
            <img src={props.icon} className="fill w-16 h-16
            sm:w-32 sm:h-32 
            "/>
            <div className="flex flex-col pl-3 w-full">
                <div className="flex flex-col
                sm:flex-row  
                justify-start
                sm:justify-between">
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
