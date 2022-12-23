/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import styles from "../../../styles/mc/Toast.module.css";
import { useState, forwardRef } from 'react';
import { CustomContentProps, SnackbarContent } from "notistack";

interface ToastProps {
  open: boolean;
  title: string;
  describe: string;
  img?: string;
}

/* export default function McToast(props: ToastProps) {
  const [open, Setopen] = useState<boolean>(false);
  return (
    <div className={styles.McToastContainer} style={{ display : "none"}}>
      <p>{props.title}</p>
      <p>{props.describe}</p>
    </div>
  );
}
 */

interface McToastProps extends CustomContentProps{
  title? : string
}


const McToast = forwardRef<HTMLDivElement,McToastProps>((props,ref) => {
  const { id, message, title} = props
  
  return (<SnackbarContent ref={ref}  className={styles.McToastContainer}>
    <div className="flex flex-row w-full">
      <div className="text-black">IMG</div>
      <div className={styles.McToastWarpper}>
        <p>{title}</p>
        <p>{message}</p>
      </div>
    </div>


  </SnackbarContent>
    )
})

McToast.displayName = "McToast"


export  {
  McToast
}