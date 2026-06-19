import type { InputProps } from "../../types/types";


export function Input({labelText, value, handleChangeFunc}: InputProps){

    return (
        <>
        <label htmlFor={labelText}>{labelText}</label>
        <input className="outline-none" id={labelText} value={value} onChange={handleChangeFunc} type="text" required/>
        </>
        
        
    )
}