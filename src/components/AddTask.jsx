import React, { useState } from "react";

import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inpuData, setInpuData] = useState("");

  const handleInpuChange = (e) => {
    setInpuData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inpuData);

    setInpuData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInpuChange}
        value={inpuData}
        className="add-Task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
