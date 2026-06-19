import type { InputProps } from "../../types/types";

export function Checkbox({ value, handleChangeFunc, checked }: InputProps) {
  return (
    <div >
      <input onChange={handleChangeFunc} type="checkbox" name={value} id={value} checked={checked} />
    </div>
  );
}
