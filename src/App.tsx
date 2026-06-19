
import './App.css'
import { HabitForm } from './components/habit/HabitForm'
import { HabitList } from './components/habit/HabitList'
import useHabits from './hooks/useHabits'

function App() {

  const {habits, addHabit, toggleHabitDone, editHabit, deleteHabit} = useHabits()

  return (
    <>
      <HabitForm addHabit={addHabit}/>
      <HabitList habits={habits} onToggle={toggleHabitDone} onEdit={editHabit} onDelete={deleteHabit}/>
    </>
  )
}

export default App
