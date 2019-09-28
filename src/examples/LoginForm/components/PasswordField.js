import React from "react";
import { useField } from '../SharedState';

export const PasswordField = ({props})=>{
    const [password, setPassword] = useField('password')
    return(
        <input type='password' value={password.value} onChange={(e)=>setPassword(e.target.value)} />
    )
}