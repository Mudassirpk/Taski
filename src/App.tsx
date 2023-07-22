import "./App.css";
import Days from "../components/Days";
import Task from "../components/Task";
import AddNewTask from "./../components/AddNewTask";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { iTask, iTaskContext } from "./type";
import { useState } from "react";
import { useTasks } from "./context/taskscontext";

function App() {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const taskContext: iTaskContext | null = useTasks();

  return (
    <div className="app">
      <div className="main-heading">
        <h1 className="heading-large">Your weekly task table</h1>
      </div>
      {isAddTaskModalOpen ? <AddNewTask close={setIsAddTaskModalOpen} /> : null}

      <div className="table">
        <div className="top-header">
          {" "}
          <div className="titles-box">
            <h1>Tasks</h1>{" "}
            <AiOutlineAppstoreAdd
              onClick={() => setIsAddTaskModalOpen(!isAddTaskModalOpen)}
              className="add-task-icon"
              size={20}
              color={"#fff"}
            />
          </div>
          <Days />
        </div>
        {taskContext?.tasks && taskContext?.tasks.length !== 0 ? (
          <div className="tasks-box">
            <div className="tasks-list">
              {taskContext && taskContext.tasks
                ? taskContext.tasks.map((task: iTask) => (
                    <Task
                      key={task.id}
                      priority={task.priority}
                      id={task.id}
                      title={task.title}
                      details={task.description}
                    />
                  ))
                : null}
            </div>
          </div>
        ) : (
          <div className="no-tasks">
            <h1>You currently have no tasks</h1>
            <button onClick={() => setIsAddTaskModalOpen(true)}>
              <AiOutlineAppstoreAdd /> Add new task
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
