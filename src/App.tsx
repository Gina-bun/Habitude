
import { CloudSunIcon, PlanetIcon } from '@phosphor-icons/react'
import './App.css'
import { BestStreakDisplay } from './components/habit/BestStreakDisplay'
import { HabitForm } from './components/habit/HabitForm'
import { HabitList } from './components/habit/HabitList'
import useHabits from './hooks/useHabits'
import { useState } from 'react'
import { Button } from './components/common/Button'

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const {habits, addHabit, toggleHabitDone, editHabit, deleteHabit} = useHabits()

  return (
    <>
    <h1 className='text-center py-2 text-lg font-light'>Habitude</h1>
      <BestStreakDisplay habits={habits} dailyIcon={<CloudSunIcon size={32} />} weeklyIcon={<PlanetIcon size={32} />}/>

      {isFormOpen &&  <HabitForm addHabit={addHabit} onClose={() => setIsFormOpen(false)}/>}
      {/* button to open a form and add a habit */}
      <Button handleClickFunc={() => setIsFormOpen(true)} color="bg-pink-300" type="button" btnText="Add new habit"/>
      <HabitList habits={habits} onToggle={toggleHabitDone} onEdit={editHabit} onDelete={deleteHabit}/>
      
    </>
  )
}

export default App
