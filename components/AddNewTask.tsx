import React, { FormEvent, SetStateAction, useId, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useTasks } from "../src/context/taskscontext";

import "./../styles/addnewtask.css";
import { iTask, iTaskContext } from "../src/type";
type Props = {
  close: React.Dispatch<SetStateAction<boolean>>;
};

function AddNewTask({ close }: Props) {
  const taskContext: iTaskContext | null = useTasks();
  const [newTask, setNewTask] = useState<iTask>({
    id: useId(),
    title: "",
    description: "",
    priority: 1,
    task_days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  });

  function addTask(e: FormEvent) {
    e.preventDefault();
    if (taskContext) {
      if (taskContext.tasks) {
        taskContext.setTasks([...taskContext.tasks, newTask]);
      } else {
        taskContext.setTasks([newTask]);
      }
      close(false);
    }
  }

  function fillNewTask(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    if (target.id === "priority") {
      setNewTask({ ...newTask, [target.id]: parseInt(target.value) });
    } else {
      setNewTask({ ...newTask, [target.id]: target.value });
    }
  }

  return (
    <div className="add-new-task">
      <h1>
        Add new task{" "}
        <RxCross2 style={{ cursor: "pointer" }} onClick={() => close(false)} />{" "}
      </h1>
      <form onSubmit={addTask}>
        <label htmlFor="title">Title</label>
        <input onChange={fillNewTask} required type="text" id="title" />
        <label htmlFor="description">Description</label>
        <textarea onChange={fillNewTask} required id="description" />
        <label htmlFor="priority">Priority</label>
        <input
          onChange={fillNewTask}
          required
          type="number"
          min={1}
          max={3}
          id="priority"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddNewTask;
