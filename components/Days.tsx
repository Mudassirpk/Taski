import { useEffect, useRef, useState } from "react";
import { days } from "../src/helpers/days";

export default function Days() {
  const days_box_ref = useRef<HTMLDivElement>(null);
  const [tasksBoxGridStyles, setTaskBoxGridStyles] = useState<string | null>(
    ""
  );

  useEffect(() => {
    setTaskBoxGridStyles(
      `repeat(${days.length},${
        days_box_ref.current?.clientWidth &&
        days_box_ref.current?.clientWidth / days.length
      }px)`
    );
  }, []);

  return (
    <div
      className="days-box"
      ref={days_box_ref}
      style={{
        gridTemplateColumns: tasksBoxGridStyles as string,
      }}
    >
      {days.map((day) => (
        <div key={day} className="day">
          <span className="full-name">{day}</span>
          <span className="shortened-name">{day.substring(0, 3)}</span>
        </div>
      ))}
    </div>
  );
}
