interface PlayerInfoProps  {
    name : string
}

export default function PlayerInfo(props : PlayerInfoProps) {
    return(<div className="outline outline-1 player-tag outline-blue-800 py-1">
        <p className="truncate select-none cursor-pointer text-center px-1">{props.name}</p>
    </div>)
};
