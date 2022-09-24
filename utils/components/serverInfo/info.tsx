import formatplayercount from "../../util/formatplayercount";
import MotdPaser from "../../util/MotdPaser";
import MCServerLoading from "../MCStyled/mcServerLoading";
import { ServerInfoItemProps } from "./item";


export default function ServerItem(props : ServerInfoItemProps) {
    const motdHtml = MotdPaser(props.data.frenquency.motd)
    const playerCount = props?.data.frenquency.players.current
    const MaxPlayer = props?.data.frenquency.players.max

    const formattedCounter = formatplayercount(playerCount,MaxPlayer)
    return(
        <div className="flex pb-4">
            <img src={props.data.lazy.icon} className="fill w-16 h-16
            sm:w-20 sm:h-20 
            "/>
            <div className="flex flex-col pl-3 w-full">
                <div className="flex flex-col
                sm:flex-row  
                justify-start
                sm:justify-between">
                    <h1 className="flex-grow text-xl">{props.data.hostname}</h1>
                    <div className="flex-grow-0 flex flex-row items-center">
                        <p className="text-center pr-2 text-lg">{formattedCounter}</p>
                        <MCServerLoading isOnline={props.data.frenquency.isOnline} LoadingStr={props.data.frenquency.motd}/>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html : motdHtml}}/>
            </div>
        </div>
    )
};
