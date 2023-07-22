import { useTasks } from "../src/context/taskscontext";
import { iTask, iTaskContext } from "../src/type";
import React, { SetStateAction, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
type Props = {
  task_id: string;
  close: React.Dispatch<SetStateAction<boolean>>;
};

export default function TaskDetails({ task_id, close }: Props) {
  const editBoxRef = useRef<HTMLParagraphElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const tasksContext: iTaskContext | null = useTasks();
  let tasks: iTask | undefined = tasksContext?.tasks?.filter((task: iTask) => {
    return task.id === task_id;
  })[0];

  function getChanges(e: React.SyntheticEvent) {
    if (editBoxRef.current && tasksContext) {
      const newTasks: Array<iTask> | null | undefined = tasksContext.tasks?.map(
        (task) => {
          if (task.id === task_id) {
            task.description = editBoxRef.current?.innerText as string;
          }
          return task;
        }
      );
      tasksContext.setTasks(newTasks as iTask[]);
    }
  }

  return (
    <div className="modal task-details">
      <h2>
        {tasks ? tasks.title : null}{" "}
        <div className="icon-container">
          <RxCross2
            onClick={() => {
              close(false);
            }}
            className={"close-icon"}
          />
        </div>{" "}
      </h2>
      <p
        ref={editBoxRef}
        contentEditable={isEditMode}
        className={"detail-description custom-scrollbar"}
        style={{
          border: isEditMode ? "2px dashed #048785" : "",
        }}
      >
        {tasks ? tasks.description : null}
      </p>
      <h3>Days Completed</h3>
      <div className={"days-completed-container"}>
        {tasks
          ? Object.keys(tasks.task_days).map((key) => {
              return tasks && tasks.task_days[key] ? (
                <p className={"days-completed"}>{key}</p>
              ) : null;
            })
          : null}
      </div>
      <div className="divider"></div>
      <div className="flex-row modification-area">
        <button>Delete</button>
        {isEditMode ? (
          <button
            onClick={(e) => {
              setIsEditMode(false);
              getChanges(e);
            }}
            className="done"
          >
            Done
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditMode(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
