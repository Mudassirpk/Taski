import { useRef, useState, useEffect } from "react";
import { days } from "../src/helpers/days";
import "./../styles/checkboxes.css";
import { useTasks } from "../src/context/taskscontext";
import { iTask, iTaskContext } from "../src/type";

type Props = {
  task_id: string;
};

export default function Checkboxes({ task_id }: Props) {
  const checkboxes = useRef<HTMLDivElement>(null);
  const [checkBoxGridStyles, setCheckBoxGridStyles] = useState<string | null>(
    ""
  );

  const tasksContext: iTaskContext | null = useTasks();

  useEffect(() => {
    setCheckBoxGridStyles(
      `repeat(${days.length},${
        checkboxes.current?.clientWidth &&
        checkboxes.current?.clientWidth / days.length
      }px)`
    );
  }, [checkboxes.current?.clientWidth]);

  // toggling the task completion for a specific day of a specific task
  function tickTask(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    const day = target.getAttribute("data-day-indicator");
    if (tasksContext && tasksContext.tasks) {
      const oldTasks = tasksContext.tasks;
      const newTaskList: iTask[] | null = oldTasks.map((oldTask: iTask) => {
        if (oldTask.id === task_id && day) {
          oldTask.task_days[day] = target.checked;
        }
        return oldTask;
      });
      tasksContext.setTasks(newTaskList);
    }
  }

  return (
    <div
      ref={checkboxes}
      className="checkboxes"
      style={{ gridTemplateColumns: checkBoxGridStyles as string }}
    >
      {days.map((day: string, index: number) => (
        <div key={index} className="checkbox">
          <input onChange={tickTask} data-day-indicator={day} type="checkbox" />
        </div>
      ))}
    </div>
  );
}
