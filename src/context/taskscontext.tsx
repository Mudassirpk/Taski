import React, { useContext, useState } from "react";
import { iTask, iTaskContext } from "../type";

const tasksContext = React.createContext<iTaskContext | null>(null);

export function useTasks(): iTaskContext | null {
  return useContext(tasksContext);
}

export default function TasksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<Array<iTask> | null>(null);

  const value = {
    tasks,
    setTasks,
  };

  return (
    <tasksContext.Provider value={value}>{children}</tasksContext.Provider>
  );
}
