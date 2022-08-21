
import { DetailedHTMLProps, InputHTMLAttributes, useRef } from 'react';
import styles from "../../../styles/mc/TextField.module.css"




export default function MCTextField(props : DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    let inputRef = useRef<HTMLInputElement>(null);

    const handleOnChange = () =>{
        console.log(inputRef.current?.value + "hi")
    }
    return(<div className={styles.McTextField}>
        <input
        onChange={handleOnChange}
        ref={inputRef} className={styles.McTextInput} {...props}/>
    </div>)
};
