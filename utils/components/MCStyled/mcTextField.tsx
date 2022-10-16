import { DetailedHTMLProps, InputHTMLAttributes, useRef } from "react";
import styles from "../../../styles/mc/TextField.module.css";

export default function MCTextField(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
      <input className={styles.McField} {...props} />
  );
}
