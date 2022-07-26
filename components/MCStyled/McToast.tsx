import styles from "../../styles/mc/Toast.module.css";
import { useState } from "react";

interface ToastProps {
  open: boolean;
  title: string;
  describe: string;
  img?: string;
}

export default function McToast(props: ToastProps) {
  const [open, Setopen] = useState<boolean>(false);
  return (
    <div className={styles.McToastContainer} style={{ display : "none"}}>
      <p>{props.title}</p>
      <p>{props.describe}</p>
    </div>
  );
}
