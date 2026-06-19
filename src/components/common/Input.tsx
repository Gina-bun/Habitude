import type { InputProps } from "../../types/types";


export function Input({labelText, value, handleChangeFunc}: InputProps){

    return (
        <div className="flex flex-col w-[70%] mx-auto">
        <label htmlFor={labelText}>{labelText}</label>
        <input className="outline-none border rounded-md px-2 py-1" id={labelText} value={value} onChange={handleChangeFunc} type="text" required/>
        </div>
        
        
    )
}