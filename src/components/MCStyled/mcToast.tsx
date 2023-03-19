/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import styles from "../../styles/mc/Toast.module.css";
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
  toastType? : ToastEnum
}

export enum ToastEnum {
  info = "정보",
  success = "완료!",
  error = "에러"
}

const McToast = forwardRef<HTMLDivElement,McToastProps>((props,ref) => {
  const { id, message, toastType} = props
  
  return (<SnackbarContent ref={ref}  className={styles.McToastContainer}>
    <div className="flex flex-row w-full">
      <div className={styles.McToastWarpper}>
        {toastType == ToastEnum.info &&<p className="text-yellow-300">{toastType}</p>}
        {toastType == ToastEnum.error &&<p className="text-red-500">{toastType}</p>}
        {toastType == ToastEnum.success &&<p className="text-green-500">{toastType}</p>}
        <p>{message}</p>
      </div>
    </div>


  </SnackbarContent>
    )
})
const McToastAchieve = forwardRef<HTMLDivElement,McToastProps>((props,ref) => {
  const { id, message, toastType} = props

  return (<SnackbarContent ref={ref} className="">

  </SnackbarContent>)
})



McToast.displayName = "McToast"


export  {
  McToast
}