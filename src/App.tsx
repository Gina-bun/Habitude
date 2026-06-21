
import { CloudSunIcon, PlanetIcon } from '@phosphor-icons/react'
import './App.css'
import { BestStreakDisplay } from './components/habit/BestStreakDisplay'
import { HabitForm } from './components/habit/HabitForm'
import { HabitList } from './components/habit/HabitList'
import useHabits from './hooks/useHabits'
import { useState } from 'react'
import { Button } from './components/common/Button'
import type { Habit } from './types/types'
import { EditHabitForm } from './components/habit/EditHabitForm'
import { AddHabitCard } from './components/habit/AddHabitCard'

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);
  const {habits, addHabit, toggleHabitDone, editHabit, deleteHabit} = useHabits()

  return (
    <>
    <h1 className='text-center py-2 text-lg font-light'>Habitude</h1>
      <BestStreakDisplay habits={habits} dailyIcon={<CloudSunIcon size={32} />} weeklyIcon={<PlanetIcon size={32} />}/>

      {isFormOpen &&  <HabitForm addHabit={addHabit} onClose={() => setIsFormOpen(false)}/>}
      {editingHabit && <EditHabitForm habit={editingHabit} onSave={editHabit} onClose={() => setEditingHabit(null)}/>}  
      <AddHabitCard onAddHabit={() => setIsFormOpen(true)}/>
      <HabitList habits={habits} onToggle={toggleHabitDone} onEditClick={(habit) => setEditingHabit(habit)} onDelete={deleteHabit}/>
      
    </>
  )
}

export default App
