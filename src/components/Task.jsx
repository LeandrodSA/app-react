import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const task = ({ task, handleTaskClick, handleTaskRemove }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="button-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskRemove(task.id)}
        >
          <CgClose />
        </button>

        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default task;
