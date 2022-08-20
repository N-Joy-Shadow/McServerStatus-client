
import { DetailedHTMLProps, InputHTMLAttributes, useRef } from 'react';
import styles from "../../../styles/mc/TextField.module.css"




export default function MCTextField(props : DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    let asd = useRef<HTMLInputElement>();
    return(<div className={styles.McTextField}>
        <input className={styles.McTextInput} {...props}/>
    </div>)
};
