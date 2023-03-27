import React from "react"
import { LoaderFunctionArgs, redirect, useLoaderData } from 'react-router-dom';

interface IAuthProps {

}

const Auth = (props : IAuthProps) => {
    const raw_data = useLoaderData()
    if("string" == typeof raw_data){
        const data = JSON.parse(raw_data)
    }
    
    return (
        <div>
            {data.code}
        </div>
)}

const AuthLoader = ({ request, params } : LoaderFunctionArgs) => {
    const paramsParse = window.location.href.split('#')
    if(paramsParse.length == 2){
        let resultString = "{\n"

        paramsParse[1].split('&').map(x => {
            const items = x.split('=')
            resultString += `\"${items[0]}\" : \"${items[1]}\",\n`
        })
        resultString = resultString.substring(0,resultString.length - 2)
        resultString += "}"
        
        return resultString
    }
    else {
        return ""
    }
}

export default Auth
export {
  AuthLoader
}