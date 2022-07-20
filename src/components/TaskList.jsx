import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Task } from "./Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TaskList = () => {
  const getLocal = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(getLocal ? getLocal : "[]"));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task.text.length > 0) {
      toast.success("New task added!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
      });
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    } else alert("Write a task!");
  };

  const deleteTask = (id) => {
    console.log(tasks.map((task) => task.id));
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const endTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <Form onSubmit={addTask}></Form>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

      {tasks.map((task) => {
        return (
          <Task
            deleteTask={deleteTask}
            endTask={endTask}
            Text={task.text}
            Completed={task.completed}
            key={task.id}
            id={task.id}
          ></Task>
        );
      })}
    </div>
  );
};
