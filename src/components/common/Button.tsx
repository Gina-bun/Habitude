import type { Icon } from "@phosphor-icons/react";

interface ButtonProps {
  btnText: string | Icon | Element;
  type?: "submit" | "button" |"reset";
  handleClickFunc?: () => void;
  color?: string;
}

export function Button({ btnText, handleClickFunc, type, color="bg-blue-400"}: ButtonProps) {
  return (
     <>
       <button className={`${color} border rounded-md p-1`} type={type} onClick={handleClickFunc}>{btnText}</button>
     </>
  )
}
