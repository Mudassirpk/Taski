import { iTask } from "./../type";

export const tasks: Array<iTask> = [
  {
    id: "1",
    title: "get the things",
    description: "fetch them together",
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
  },
  {
    id: "2",
    title: "get the other things",
    description: "fetch them as well together",
    priority: 3,
    task_days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  },
];
