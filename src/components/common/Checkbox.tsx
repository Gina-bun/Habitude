import type { InputProps } from "../../types/types";

export function Checkbox({ value, handleChangeFunc }: InputProps) {
  return (
    <div className="flex gap-2">
      <p>{value}</p>
      <input onChange={handleChangeFunc} type="checkbox" name="" id="" />
    </div>
  );
}
