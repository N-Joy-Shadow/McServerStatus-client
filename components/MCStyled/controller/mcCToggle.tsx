import mctg from "../../../styles/mc/Toggle.module.css";
import { Controller } from "react-hook-form";
import React from "react";




export default function McControlToggle({ name,value } : { name : string, value : boolean} ) {
  return (
    <Controller name={name} render={({ field}) => {
        return (
            <label className={mctg.switch}>
                <input type="checkbox" {...field} checked={value}/>
            <span className={mctg.slider} />
        </label>
        )
    }}/>
  );
}
