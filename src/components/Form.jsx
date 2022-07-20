import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiPlayListAddFill } from "react-icons/ri";

export const Form = (props) => {
  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const inputSend = (e) => {
    e.preventDefault();
    const task = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    props.onSubmit(task);
  };

  return (
    <form className="task-form" onSubmit={inputSend}>
      <input type="text" onChange={inputChange} placeholder="Write a task..." />
      <button>
        <RiPlayListAddFill />
      </button>
    </form>
  );
};
