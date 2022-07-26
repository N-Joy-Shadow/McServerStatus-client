import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";
import styles from "../../styles/mc/Button.module.css";

export default function MCButton(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <div className={styles.McButton}>
      <div className={styles.Mctitle} {...props} />
    </div>
  );
}

