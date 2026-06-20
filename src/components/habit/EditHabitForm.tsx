import { useState } from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import type { Habit } from "../../types/types";

interface EditHabitFormProps {
  habit: Habit;
  onSave: (habit: Habit, newTitle: string) => void;
  onClose: () => void;
}

export function EditHabitForm({ habit, onSave, onClose }: EditHabitFormProps) {
  const [title, setTitle] = useState<string>(habit.title);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") return;
    onSave(habit, title);
    onClose();
  }

  return (
    <div className="fixed z-10 inset-0 bg-black/50 flex items-center justify-center">
      <form className="border rounded-md pb-3 bg-orange-100 w-[90%]" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-center w-full bg-indigo-500 py-1 rounded-t-md font-medium">Edit habit</legend>

          <div className="form-group">
            <Input labelText="Habit title" value={title} handleChangeFunc={(e) => setTitle(e.target.value)} />
          </div>
        </fieldset>

        <div className="buttons w-[70%]">
          <Button color="bg-orange-200" type="submit" btnText="Save" />
          <Button type="button" handleClickFunc={onClose} color="bg-rose-200" btnText="Cancel" />
        </div>
      </form>
    </div>
  );
}