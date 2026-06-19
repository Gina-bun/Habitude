import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import type { Habit } from "../../types/types";
import { calculateStreak } from "../../utils/calculateStreak";
import { isCompletedToday } from "../../utils/isCompletedToday";
import { Button } from "../common/Button";
import { Checkbox } from "../common/Checkbox";

interface HabitCardProps {
    habit: Habit;
    children?: React.ReactNode;
    onToggle: (habit: Habit) => void;
    onEdit: (habit: Habit, newTitle: string) => void;
    onDelete: (habit: Habit) => void;

}

export function HabitCard({habit, children, onToggle, onEdit, onDelete}: HabitCardProps){
    const completed = isCompletedToday(habit);
    const streak = calculateStreak(habit);

    return (
        <div className="flex items-center gap-2 mt-.5">
        <Checkbox value={habit.title} handleChangeFunc={() => onToggle(habit)} checked={completed}/>
        <div className="w-screen rounded-md bg-orange-100 pt-2 pl-4">
            {children}
            <div>
                <h2 className="font-medium">{habit.title}</h2>
                <p className="text-sm font-light">Streak for {streak} {habit.frequency === "daily" ? "days" : "weeks"}</p>
               <div className="buttons pr-4 pb-4">
                 <Button type="button" btnText={<PencilIcon size={17} />} handleClickFunc={() => onEdit(habit, "new title")} />
                <Button type="button" btnText={<TrashIcon size={17} />} handleClickFunc={() => onDelete(habit)} />    
               </div>
            </div>
        </div>
        </div>
    )
}