import React, { useState } from "react";

const defaultState = {
  createdBy: "",
  assignedTo: "",
  title: "",
  description: "",
  signedUrl: "",
};

const AddTask = ({setToggle}) => {
  const [task, setTask] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Api call to submit form data

    setTask(defaultState);
    setToggle(true);
  };

  return (
    <div className="max-w-md mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4 mt-0 text-center">Add Task Here</h2>
      <form onSubmit={handleSubmit} className="p-6 border rounded-md shadow-md">
        <label className="block mb-4">
          Created by:
          <input
            type="text"
            name="createdBy"
            value={task.createdBy}
            onChange={handleChange}
            className="block w-full border p-2 mt-1 rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          Assigned to:
          <input
            type="text"
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleChange}
            className="block w-full border p-2 mt-1 rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          Title:
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="block w-full border p-2 mt-1 rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          Description:
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="block w-full border p-2 mt-1 rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          Signed URL:
          <input
            type="text"
            name="signedUrl"
            value={task.signedUrl}
            onChange={handleChange}
            className="block w-full border p-2 mt-1 rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto block"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
