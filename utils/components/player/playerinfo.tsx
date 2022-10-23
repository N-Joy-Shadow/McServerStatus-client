import MCButton from '../MCStyled/mcButton';
interface PlayerInfoProps  {
    name : string
}

export default function PlayerInfo(props : PlayerInfoProps) {
    return(<div className='bg-[#0e020d] py-1 outline outline-[#25015b] player-tag inline-block m-1'>
        <p className="truncate select-none cursor-pointer text-center px-[1rem]">{props.name}</p>
    </div>)
};
