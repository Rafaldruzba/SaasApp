import React, { useEffect, useState } from "react";

interface UserInfo {
  firstName: string;
  lastName: string;
  position: string;
  active: boolean;
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Info {
    id: number;
    title: string;
    date: string;
}

const RightSidebar: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [infos, setInfos] = useState<Info[]>([]);

  useEffect(() => {
    // Podglądowe API (możesz podmienić na swoje endpointy)
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) =>
        setUser({
          firstName: data.name.split(" ")[0],
          lastName: data.name.split(" ")[1] || "",
          position: "Software Engineer",
          active: true,
        })
      );

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=2")
      .then((res) => res.json())
      .then((data) => setTasks(data));
      console.log(tasks.length);

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);

  return (
    <div className="fixed right-0 top-0 h-screen w-[250px] bg-gray-100 border-l border-gray-300 p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-4">User Info</h2>
      <p>06.12.2025 | 17:15</p>
      {user ? (
        <div className="mb-6">
          <p className="font-semibold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-600">{user.position}</p>
          <p
            className={`text-sm mt-1 ${
              user.active ? "text-green-600" : "text-red-600"
            }`}
          >
            {user.active ? "Active" : "Inactive"}
          </p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}

      <h2 className="text-lg font-bold mb-2">Tasks</h2>
      <ul className="space-y-2 flex-1 overflow-y-auto">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              className="p-2 bg-white rounded shadow-sm flex justify-between items-center"
            >
              <span className="text-sm">{task.title}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  task.completed ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {task.completed ? "Done" : "Pending"}
              </span>
            </li>
          ))
        ) : (
          <p>No tasks...</p>
        )}
        <h2 className="text-lg font-bold mb-2">Day INFO</h2>
        {infos.length > 0 ? (
            infos.map((info) => (
           <li
              key={info.id}
              className="p-2 bg-white rounded shadow-sm flex justify-between items-center"
            >
              <span className="text-sm">{info.title}</span>
            </li>
            ))) : (<p>No Info...</p>)}
      </ul>
    </div>
  );
};

export default RightSidebar;