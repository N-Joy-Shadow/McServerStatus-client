import { HTMLAttributes, DetailedHTMLProps } from 'react';
import mctg from "../../styles/mc/Toggle.module.css"


interface McToggleProps {
    props : HTMLAttributes<HTMLInputElement>
}

export default function McToggle(  props: HTMLAttributes<HTMLInputElement>) {
    return (<label className={mctg.switch}>
        <input type="checkbox" {...props}/>
        <span className={mctg.slider}/>
    </label>)
}