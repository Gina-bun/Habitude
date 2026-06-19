interface ButtonProps {
  btnText: string;
  type?: "submit" | "button" |"reset";
  handleClickFunc?: () => void;
}

export function Button({ btnText, handleClickFunc, type }: ButtonProps) {
  return (
     <>
       <button type={type} onClick={handleClickFunc}>{btnText}</button>;
     </>
  )
}
