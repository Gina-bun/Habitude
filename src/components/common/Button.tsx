interface ButtonProps {
  btnText: string;
  type: "submit" | "button" |"reset";
}

export function Button({ btnText, type }: ButtonProps) {
  return (
     <>
       <button type={type}>{btnText}</button>;
     </>
  )
}
