import type { Habit } from "../../types/types";
import { HabitCard } from "./HabitCard";
import "./habit.css";

interface HabitListProps {
  habits: Habit[];
  onToggle: (habit: Habit) => void;
  onEditClick: (habit: Habit) => void;
  onDelete: (Habit: Habit) => void;
}

export function HabitList({ habits, onToggle, onEditClick, onDelete }: HabitListProps) {
  const weeklyHabits: Habit[] = habits.filter(
    (habit) => habit.frequency === "weekly",
  );
  const dailyHabits: Habit[] = habits.filter(
    (habit) => habit.frequency === "daily",
  );

  const dailyList = habits.map(
    (habit) =>
      habit.frequency === "daily" && (
    
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onDelete={onDelete}
            onEditClick={onEditClick}
          />
        
      ),
  );

  const weeklyList = habits.map(
    (habit) =>
      habit.frequency === "weekly" && (
        
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onDelete={onDelete}
            onEditClick={onEditClick}
          />
        
      ),
  );

  if (habits.length === 0) {
    return (
       <>
       <h1 className="text-center font-medium text-lg mt-4">Habit list</h1>
      <p className="text-center text-lg">No habits yet. Add one to get started.</p>
       </>
    )
  }

  return (
    <div className="container flex flex-col gap-2">
      <h1 className="text-center font-medium text-lg -mb-2">Habit list</h1>
        
      {/* Display habits per frequency type */}

      {/* Daily habits */}
      <div>
        <h2 className="list-category">{dailyHabits.length > 0 && "Daily"}</h2>
        {dailyList}
      </div>
      {/* Weekly habits */}
      <div>
        <h2 className="list-category">{weeklyHabits.length > 0 && "Weekly"}</h2>
        {weeklyList}
      </div>
    </div>
  );
}
