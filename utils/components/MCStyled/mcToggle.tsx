import mctg from "../../../styles/mc/Toggle.module.css"

export default function McToggle() {
    return (<label className={mctg.switch}>
        <input type="checkbox"/>
        <span className={mctg.slider}/>
    </label>)
}