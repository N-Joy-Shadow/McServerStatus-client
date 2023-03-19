import React from "react"
import { Controller } from 'react-hook-form';
import input from "../../../styles/mc/TextField.module.css"


interface IMcMultiTextInputProps {
    name : string,
    placeholder : string
}
 
const McMultiTextInput = (props : IMcMultiTextInputProps) => {
 
return (<Controller name={props.name} render={({field}) => 
    (<textarea className={input.McField} placeholder={props.placeholder} {...field}/>)
}/>)
}
 
export default McMultiTextInput