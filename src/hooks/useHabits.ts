import { useState } from "react";
import type { Habit } from "../types/types";
import { toggleCompletion } from "../utils/toggleCompletion";
import { getTodayString } from "../utils/getTodayString";

export default function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(title: string, frequency: "daily" | "weekly") {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      title,
      frequency,
      completedDates: [],
      createdAt: getTodayString(),
    };

    setHabits((prevHabits) => [...prevHabits, newHabit]);
  }

  function editHabit(habit: Habit, newTitle: string) {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((habitItem) => {
        if (habitItem.id === habit.id) {
          return { ...habitItem, title: newTitle };
        } else {
          return habitItem;
        }
      });

      return updatedHabits
    });
  }

  //DELETE HABIT
  function deleteHabit(targetHabit: Habit) {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.filter(
        (habit) => habit.id !== targetHabit.id,
      );
      return updatedHabits;
    });
  }

  //   TOGGLE HABITS DONE
  function toggleHabitDone(habit: Habit) {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((habitItem) => {
        if (habitItem.id === habit.id) {
          return { ...habitItem, completedDates: toggleCompletion(habitItem) };
        } else {
          return habitItem;
        }
      });

      return updatedHabits;
    });
  }

  return { habits, addHabit, editHabit, deleteHabit, toggleHabitDone };
}
