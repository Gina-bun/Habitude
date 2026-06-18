import type { Habit } from "../types/types";
import { getTodayString } from "./getTodayString";


export function toggleCompletion(habit: Habit){
  const dateToday = getTodayString()

  if(habit.completedDates.includes(dateToday)){
     return habit.completedDates.filter((date) => date != dateToday)
  }else{
    return [...habit.completedDates, dateToday]
  }
}