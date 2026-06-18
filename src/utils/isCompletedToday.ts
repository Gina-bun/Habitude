import type {Habit} from "../types/types.ts"
import { getTodayString } from "./getTodayString.ts"

export function isCompletedToday(habit: Habit){
    const dateToday = getTodayString()
    const isCompleted = habit.completedDates.includes(dateToday)

    return isCompleted
}