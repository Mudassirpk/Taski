import { useEffect, useState } from "react";
import "./../styles/task.css";
import Checkboxes from "./Checkboxes";
import { TbListDetails } from "react-icons/tb";
import TaskDetails from "./TaskDetails";

type Props = {
  title: string;
  priority: number;
  id: string;
  details: string;
};

export default function Task({ details, title, priority, id }: Props) {
  const [priorityColorClass, setPriorityColorClass] =
    useState("priority-border-");
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setPriorityColorClass("priority-border-" + priority);
  }, [priority]);

  return (
    <div className="task-container">
      <div className={`task ${priorityColorClass}`}>
        {title}{" "}
        <div className="icon-container">
          <TbListDetails
            onClick={() => setIsDetailsModalOpen(!isDetailsModalOpen)}
            className="details-icon"
          />
        </div>{" "}
      </div>
      <Checkboxes task_id={id} />
      {isDetailsModalOpen ? (
        <TaskDetails close={setIsDetailsModalOpen} task_id={id} />
      ) : null}
    </div>
  );
}
