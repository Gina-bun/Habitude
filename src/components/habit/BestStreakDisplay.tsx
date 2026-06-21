import type { Habit } from "../../types/types";
import type { Icon } from "@phosphor-icons/react";
import { calculateStreak } from "../../utils/calculateStreak";
import "./habit.css"

interface BestStreakDisplayProps {
  habits: Habit[];
  dailyIcon: Icon;
  weeklyIcon: Icon;
}

export function BestStreakDisplay({ habits, dailyIcon, weeklyIcon }: BestStreakDisplayProps) {
  const weeklyHabits: Habit[] = habits.filter((habit) => habit.frequency === "weekly");
  const dailyHabits: Habit[] = habits.filter((habit) => habit.frequency === "daily");

  const bestDailyStreak = Math.max(...dailyHabits.map(calculateStreak));
  const bestWeeklyStreak = Math.max(...weeklyHabits.map(calculateStreak));

  return (
    <div className="flex rounded-md bg-purple-100 p-2 gap-2">
        {/*for daily habits */}
      <div className="daily lined-card rounded-l-md">
        {dailyIcon}
        {
            dailyHabits.length > 0 ?
            <div>
            <h2>{bestDailyStreak}</h2>
                <p>Best Daily streak</p>
            </div>
            :
             <div>
                <h2>0</h2>
                <p>No daily habits</p>
            </div>

        }

       
      </div>
      {/* for weekly habits */}
      <div className="weekly lined-card rounded-r-md">
        {weeklyIcon}
         {
            weeklyHabits.length > 0 ?
            <div>
            <h2>{bestWeeklyStreak}</h2>
                <p>Best Weekly streak</p>
            </div>
            :
             <div>
                <h2>0</h2>
                <p>No weekly habits</p>
            </div>

        }
      </div>
    </div>
  );
}
