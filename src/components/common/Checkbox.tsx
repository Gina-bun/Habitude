import type { InputProps } from "../../types/types";

export function Checkbox({ value, handleChangeFunc, checked }: InputProps) {
  return (
    <div >
      <input className="appearance-none size-5 border border-gray-400 rounded-full bg-white checked:bg-rose-600 checked:border-yellow-600 relative
                checked:after:content-[''] checked:after:absolute checked:after:left-1.5 checked:after:top-0.5 
                checked:after:w-1.5 checked:after:h-2.75 checked:after:border-white checked:after:border-r-2 checked:after:border-b-2 
                checked:after:rotate-45" 
                onChange={handleChangeFunc} 
                type="checkbox" name={value} 
                id={value} 
                checked={checked} 
                />
    </div>
  );
}
