interface PlayerInfoProps  {
    name : string
}

export default function PlayerInfo(props : PlayerInfoProps) {
    return(<div className="outline outline-1 player-tag">
        <p>{props.name}</p>
        <style jsx>{`
            .player-tag{
                border-color : #000050;
            }
            `}
        </style>
    </div>)
};
