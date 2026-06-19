import type { Habit } from "../../types/types";
import { HabitCard } from "./HabitCard";
import "./habit.css";

interface HabitList {
  habits: Habit[];
  onToggle: (habit: Habit) => void;
  onEdit: (habit: Habit, newTitle: string) => void;
  onDelete: (Habit: Habit) => void;
}

export function HabitList({ habits, onToggle, onEdit, onDelete }: HabitList) {
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
            onEdit={onEdit}
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
            onEdit={onEdit}
          />
        
      ),
  );

  if (habits.length === 0) {
    return <p>No habits yet. Add one to get started.</p>;
  }

  return (
    <div className="mt-4 flex flex-col gap-2">
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
