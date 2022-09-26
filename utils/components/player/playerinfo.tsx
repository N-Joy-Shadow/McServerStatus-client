import MCButton from '../MCStyled/mcButton';
interface PlayerInfoProps  {
    name : string
}

export default function PlayerInfo(props : PlayerInfoProps) {
    return(<MCButton>
        <p className="truncate select-none cursor-pointer text-center px-[1rem]">{props.name}</p>
    </MCButton>)
};
