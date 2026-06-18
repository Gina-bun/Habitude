import type { InputProps } from "../../types/types";


export function Input({value, handleChangeFunc}: InputProps){

    return (
        
        <input className="outline-none" value={value} onChange={handleChangeFunc} type="text" />
        
    )
}