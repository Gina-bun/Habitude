import type { Habit } from "../types/types";

export function calculateStreak(habit: Habit) {
    let currentStreak: number = 0;

    for(let i = 0; i < 1000 ; i++){
        const date = new Date()//get date of right now
        //get number of days to subtract
        const daysToSubtract = habit.frequency === "daily" ? i : i * 7;
        //mutate the current date  to the result in the bracket
        date.setUTCDate(date.getUTCDate() - daysToSubtract)
        //convert mutated date into a string
        const dateString = date.toISOString().split("T")[0]

        if(habit.completedDates.includes(dateString)){
            currentStreak++;

        } else {
            break;
        }
    }

    return currentStreak;
    
}