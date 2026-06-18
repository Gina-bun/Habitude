import type { InputProps } from "../../types/types";

export function Checkbox({ value, handleChangeFunc, checked }: InputProps) {
  return (
    <div className="f">
      <input onChange={handleChangeFunc} type="checkbox" name={value} id={value} />
    </div>
  );
}
