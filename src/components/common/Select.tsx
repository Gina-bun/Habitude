
interface SelectProps {
    text: string;
    name: string;
    children: React.ReactNode;
    handleChangeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({text, name, children, handleChangeFunc}: SelectProps){

    return (
        <>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handleChangeFunc}>
           {children}
        </select>
        </>
    )
}