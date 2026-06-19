import { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Select } from "../common/Select";

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
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <legend>Create a habit</legend>

        <div className="form-group">
          <Input labelText="Habit title" value={title} handleChangeFunc={(e) => {setTitle(e.target.value)}}/>
        </div>

        <div className="form-group">
            <Select 
            text="Select the habit frequency" 
            name="frequency" 
            handleChangeFunc={(e) => setFrequency(e.target.value)}
            >
                <option value="daily">daily</option>
                <option value="weekly">weekly</option>
            </Select>    
        </div>

      </fieldset>
      <Button type="submit" btnText="Add Habit"  />
    </form>
  );
}
