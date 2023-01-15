import React from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "../../../styles/mc/TextField.module.css";
import { Controller } from 'react-hook-form';

interface IMcTextInputProps {
  name : string,
  placeholder? : string
}

export default function McTextInput(
  { name ,placeholder} : IMcTextInputProps
) {
  return <Controller
  name={name}
  render={({ field }) => {
    return <input type="input" placeholder={placeholder} className={styles.McField} {...field}/>
  }}
/>
}
