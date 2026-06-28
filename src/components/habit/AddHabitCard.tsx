import { HandPointingIcon } from "@phosphor-icons/react";
import { Button } from "../common/Button";
import "./habit.css"

interface AddHabitCardProps {
    onAddHabit: () => void;
}

export function AddHabitCard({onAddHabit}: AddHabitCardProps){

    return (
        <div className="container bg-pink-200 p-2 rounded-md">
         <div className="dashed-card flex flex-col items-center p-3 gap-1">
            <h3>Add a new weekly or daily habit</h3>
            <HandPointingIcon size={33} className="rotate-90 animate-bounce-slow" />
             {/* button to open a form and add a habit */}
              <Button handleClickFunc={onAddHabit}  color="bg-pink-300" type="button" btnText="Add new habit"/>
         </div>
        </div>
    )
}