
import './App.css'
import { HabitCard } from './components/habit/HabitCard'
import useHabits from './hooks/useHabits'

function App() {

  const {habits, addHabit, toggleHabitDone, editHabit, deleteHabit} = useHabits()

  return (
    <>
      <HabitCard/>
    </>
  )
}

export default App
