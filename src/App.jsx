import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TaskDetails from "./components/TaskDetails";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTesk from "./components/AddTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("http://localhost:21262");
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    // const newTasks = [
    //   ...tasks,
    //   {
    //     id: uuidv4(),
    //     title: taskTitle,
    //     completed: false,
    //   },
    // ];

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      completed: false,
    };

    axios.post("http://localhost:21262/add", newTask);

    setTasks(newTask);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId);

    axios.delete("http://localhost:21262/" + taskId);

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTesk handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          )}
        />
        <Route path="/:teskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
