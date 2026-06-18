export interface Habit {
    id: string
    title: string
    frequency: 'daily' | 'weekly'
    completedDates: string[]
    createdAt: string
}

export interface InputProps {
    value: string;
    handleChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
}