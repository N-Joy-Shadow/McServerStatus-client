
import styles from "../../../styles/mc/TextField.module.css";
import { Controller } from 'react-hook-form';

interface IMcTextInputProps {
  name : string,
  placeholder? : string,
  required? : boolean
}

export default function McTextInput(
  { name ,placeholder ,required} : IMcTextInputProps
) {
  return <Controller
  name={name}
  render={({ field }) => {
    return <input type="input" placeholder={placeholder} className={styles.McField} {...field} required={required}/>
  }}
/>
}
