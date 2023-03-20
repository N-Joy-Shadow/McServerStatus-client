import React from "react"
import { Controller } from 'react-hook-form';


interface IMcMultiTextInputProps {
    name : string,
    placeholder : string
}
 
const McMultiTextInput = (props : IMcMultiTextInputProps) => {
 
return (<Controller name={props.name} render={({field}) => 
    (<textarea className={''} placeholder={props.placeholder} {...field}/>)
}/>)
}
 
export default McMultiTextInput