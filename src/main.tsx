import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import TasksProvider from "./context/taskscontext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>
);
