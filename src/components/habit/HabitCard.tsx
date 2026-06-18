import type { Habit } from "../../types/types";
import { calculateStreak } from "../../utils/calculateStreak";
import { isCompletedToday } from "../../utils/isCompletedToday";
import { Button } from "../common/Button";
import { Checkbox } from "../common/Checkbox";

interface HabitCardProps {
    habit: Habit;
    children: React.ReactNode;
    onToggle: (habit: Habit) => void;
    onEdit: (habit: Habit, newTitle: string) => void;
    onDelete: (habit: Habit) => void;

}

export function HabitCard({habit, children, onToggle, onEdit, onDelete}: HabitCardProps){
    const completed = isCompletedToday(habit);
    const streak = calculateStreak(habit);

    return (
        <div className="flex gap-2">
        <Checkbox value={habit.title} handleChangeFunc={() => onToggle(habit)} checked={completed}/>
        <div>
            {children}
            <div>
                <p>{habit.title}</p>
                <p>Streak for {streak} {habit.frequency === "daily" ? "days" : "weeks"}</p>
                <Button btnText="Edit" handleClickFunc={() => onEdit(habit, "new title")} />
                <Button btnText="Delete" handleClickFunc={() => onDelete(habit)} />    
            </div>
        </div>
        </div>
    )
}