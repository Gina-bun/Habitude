import { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import "./habit.css"

export function HabitForm({ addHabit }) {
  const [title, setTitle] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("daily");

  function handleSubmit(e) {
    e.preventDefault();
    if(title.trim() === "") return;
    addHabit(title, frequency);
    setTitle("");
    setFrequency("daily");
  }

  return (
    <form className="border rounded-md pb-3" onSubmit={(e) => handleSubmit(e)}>
      <fieldset >
        <legend className="text-center w-full bg-indigo-500 py-1 rounded-t-md font-medium">Add a new habit</legend>

        <div className="form-group">
          <Input labelText="Habit title" value={title} handleChangeFunc={(e) => {setTitle(e.target.value)}}/>
        </div>

        <div className="form-group">
            <Select 
            text="Select the habit frequency" 
            name="frequency" 
            handleChangeFunc={(e) => setFrequency(e.target.value)}
            >
                <option className="option" value="daily">daily</option>
                <option className="option" value="weekly">weekly</option>
            </Select>    
        </div>

      </fieldset>
       <div className="buttons w-[70%]">
             <Button color="bg-orange-200" type="submit" btnText="Add Habit"  />
             <Button color="bg-rose-200" type="button" btnText="Cancel"/>
       </div>
    </form>
  );
}
