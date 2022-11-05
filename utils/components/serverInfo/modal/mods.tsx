interface ModalModsProps {
    mods : string[]
}


export default function ModalMods(props : ModalModsProps) {
    if(props.mods != null) return(<></>)
    else{
        return(<div >
            <h1>모드들</h1>
            <div className="">

            {/* {props.mods.map((x,i) =>(<div className="" key={i}>{x}</div>))}
 */}
            </div>
        </div>
        )
    }
};
