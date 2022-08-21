interface PlayerInfoProps  {
    name : string
}

export default function PlayerInfo(props : PlayerInfoProps) {
    return(<div className="outline outline-1 player-tag outline-blue-800">
        <p className="truncate select-none cursor-pointer">{props.name}</p>
    </div>)
};
