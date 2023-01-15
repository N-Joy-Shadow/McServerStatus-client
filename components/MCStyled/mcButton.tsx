import { DetailedHTMLProps, forwardRef, HTMLAttributes, InputHTMLAttributes } from 'react';
import styles from "../../styles/mc/Button.module.css";

export default function MCButton(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
      <div className={styles.McButton} {...props} />

  );
}

function MCInputButton(props : DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,HTMLInputElement>){
  return (
    <input className={styles.McButton} type="button" {...props}/>
  )
}


function MCSubmitButton(props : DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,HTMLInputElement>){
    return (
      <input className={styles.McButton} type="submit" {...props}/>
    )
}

function MCDisabledButton(props : DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,HTMLInputElement>){
  return <input className={styles.McButton} type="button" disabled {...props}/>
}
export {
  MCSubmitButton,MCInputButton,MCDisabledButton
}