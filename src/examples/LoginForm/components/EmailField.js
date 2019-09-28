import React from "react";
import { useField } from '../SharedState';

export const EmailField = ({props})=>{
    const [email, setEmail] = useField('email')
    const isValid = email.checkValidity(email.value)
    return(
        <div>
        <input type='text' value={email.value} onChange={(e)=>setEmail(e.target.value)} />
        <div>{isValid ? 'Valid!': 'Invalid :('}</div>
        </div>
    )
}