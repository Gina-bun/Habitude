import type { Habit } from "../../types/types";
import { HabitCard } from "./HabitCard";

interface HabitList {
    habits: Habit[];
    onToggle: (habit: Habit) => void;
    onEdit: (habit: Habit, newTitle: string) => void;
    onDelete: (Habit: Habit) => void;
}

export function HabitList({habits, onToggle, onEdit, onDelete}: HabitList){

    if(habits.length === 0) {
        return <p>No habits yet. Add one to get started.</p>
    }

    return (
        <>
        {
            habits.map((habit) => (
                <HabitCard 
                key={habit.id}
                habit={habit}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
                />
            ))
        }
        </>
    )
}