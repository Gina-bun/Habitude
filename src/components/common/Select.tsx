
interface selectProps {
    text: string;
    name: string;
    children: React.ReactNode
}

export function Select({text, name, children}: selectProps){

    return (
        <>
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}>
            {children}
        </select>
        </>
    )
}