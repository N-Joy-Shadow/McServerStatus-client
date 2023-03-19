import { IPlayerList } from '../../API/IServerInfo';
import MCButton from '../MCStyled/mcButton';
interface PlayerInfoProps  {
    data : IPlayerList
}

export default function PlayerInfo(props : PlayerInfoProps) {
    return(<div className='bg-[#0e020d] py-1 outline outline-[#25015b] inline-block m-1'>
        <img src={`https://crafthead.net/avatar//${props.data.id}/24`} 
        className="float-left px-1"></img>
        <p className="truncate select-none cursor-pointer text-center pr-2">{props.data.name}</p>
    </div>)
};
