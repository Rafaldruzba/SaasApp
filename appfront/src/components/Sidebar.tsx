import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const options = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Settings", path: "/settings" },
    { name: "Reports", path: "/reports" },
    { name: "Analytics", path: "/analytics" },
    { name: "Messages", path: "/messages" },
    { name: "Notifications", path: "/notifications" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[200px] bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Panel
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {options.map((opt) => (
            <li key={opt.path}>
              <NavLink
                to={opt.path}
                className={({ isActive }) =>
                  `block p-2 rounded cursor-pointer ${
                    isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"
                  }`
                }
              >
                {opt.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;