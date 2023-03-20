
import styles from "../../../styles/mc/TextField.module.css";
import { Controller } from 'react-hook-form';
import { McTextInput } from "../mcStyle";

interface IMcTextInputProps {
  name : string,
  placeholder? : string,
  required? : boolean
}

export default function McTextInputC(
  { name ,placeholder ,required} : IMcTextInputProps
) {
  return <Controller
  name={name}
  render={({ field }) => {
    return <McTextInput className="w-full" type="text" placeholder={placeholder}  {...field} required={required}/>
  }}
/>
}
