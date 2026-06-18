
interface ButtonProps {
 btnText: string;
 handleClickFunc: () => void
}

export function Button({btnText, handleClickFunc}: ButtonProps){

    return (
        <button  
            onClick={handleClickFunc}>
            {btnText}
        </button>
    )
}