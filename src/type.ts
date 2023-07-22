import { SetStateAction } from "react";

export type tTaskDays = {
  [key: string]: boolean;
};

export interface iTask {
  id: string;
  title: string;
  description: string;
  priority: number;
  task_days: tTaskDays;
}

export interface iTaskContext {
  tasks: Array<iTask> | null;
  setTasks: React.Dispatch<SetStateAction<Array<iTask> | null>>;
}
