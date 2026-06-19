
interface SelectProps {
    text: string;
    name: string;
    children: React.ReactNode;
    handleChangeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({text, name, children, handleChangeFunc}: SelectProps){

    return (
        <div className="flex flex-col w-[70%] mx-auto">
        <label htmlFor={name}>{text}</label>
        <select className="w-fit rounded-md bg-indigo-200 outline-none p-1"  name={name} id={name} onChange={handleChangeFunc}>
           {children}
        </select>
        </div>
    )
}