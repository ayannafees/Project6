"use client";
import { useEffect, useState } from "react";
import YoutuberTaskDetails from "../components/YoutuberTaskDetails";
import AddTask from "../components/AddTask";

// interface UserData {
//   email: string;
//   username: string;
//   password: string;
//   role: string; // Add role property
// }

// const defaultData: UserData = {email: "Youtuber@gmail.com", username: "Youtuber", password: "1234", role: "youtuber" };

interface UserData {
  email: string;
  username: string;
  password: string;
  role: string; // Add role property
}

interface TaskData {
  createdby: string;
  assignedto: string;
  title: string;
  description: string;
  signedUrl: string;
}

const defaultUserData: UserData = {
  email: "Youtuber1@gmail.com",
  username: "Youtuber-1",
  password: "1234",
  role: "editor",
};

const defaultTaskData: TaskData = {
  createdby: "Youtuber-1",
  assignedto: "Editor-1",
  title: "Default task title",
  description: "This is default task title",
  signedUrl: "hjfi8932939fafjhjj",
};

interface TasksData {
  // You can use any name for the array, for example, "items"
  items: TaskData[];
}

const defaultTasksData: TasksData = {
  // Use the same name you used in the interface
  items: [
    {
      createdby: "Youtuber-1",
      assignedto: "Editor-1",
      title: "Default task 1 title",
      description: "This is default task title-1",
      signedUrl: "hjfi8932939fafjhjj",
    },
    {
      createdby: "Youtuber-1",
      assignedto: "Editor-2",
      title: "Default task 2 title",
      description: "This is default task title-2",
      signedUrl: "dfsfdi8932939fafjhjj",
    },
  ],
};

const YoutuberPage = () => {
  // const [user, setUser]  = useState(defaultData);
  const [user, setUser] = useState(defaultUserData);
  const [task, setTask] = useState(defaultTaskData);
  const [tasks, setTasks] = useState(defaultTasksData);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    //Api call to get user data
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl font-bold mb-8">Youtuber page</div>
      <div className="flex flex-row w-full h-4/5">
        <div className="w-1/2 p-12 border rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-2">{user.username}</h1>
          <p className="text-gray-600">{user.email}</p>
          <div className="p-8 pb-2">
            <h1 className="text-3xl font-bold mb-6">Task Assigned</h1>
            <ul className="list-disc">
              {tasks.items.map((currTask, index) => (
                <li
                  key={index}
                  className={`mb-8 p-6 rounded-md shadow-md cursor-pointer  ${
                    currTask === task && toggle
                      ? "border-2 border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => {
                    setTask(currTask);
                    setToggle(true);
                  }}
                >
                  <h2 className="text-xl font-bold mb-4">{currTask.title}</h2>
                  <p className="text-gray-600 mb-2">
                    Assigned to: {currTask.assignedto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setToggle((prevState) => !prevState);
                setTask(defaultTaskData);
              }}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                toggle ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {toggle ? "Add task" : "Close Add Task Form"}
            </button>
          </div>
        </div>

        <div className="w-1/2  border rounded-md shadow-md">
          {toggle ? (
            task === defaultTaskData ? ( 
              <div>
              <h1 className="text-2xl font-bold text-center pt-12 pb-6">
                Selected Task Details Shown Here
              </h1>
              <p className="text-center text-xl">Select a task to show its details</p>
              </div>
            ) : (
              <YoutuberTaskDetails task={task} />
            )
          ) : (
            <AddTask setToggle={setToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutuberPage;
