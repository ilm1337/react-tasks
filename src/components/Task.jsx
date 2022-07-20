import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export const Task = ({ Text, Completed, id, endTask, deleteTask }) => {
  return (
    <div className="task-container">
      <div
        onClick={() => endTask(id)}
        className={`task-text ${Completed ? "completed-task" : ""}`}
      >
        {Text}
      </div>
      <div onClick={() => deleteTask(id)}>
        <AiFillCloseCircle className="close-icon" />
      </div>
    </div>
  );
};
