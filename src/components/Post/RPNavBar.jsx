import React from "react";
import { NavLink } from "react-router-dom";
import RecentPosts from "./RPLists";

const Sidebar = () => {
  return (
    <div className="w-120 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h2 className="text-white font-bold p-4 bg-baseRed rounded-t-lg">
        Recent Posts
      </h2>

      {/* Menu List */}
      <ul className="divide-y divide-gray-200">
        {RecentPosts.map((item) => (
          <li key={item.id}>
            <NavLink
              to={`/posts/${item.id}`}
              state={{ post: item }}
              className={({ isActive }) =>
                `block px-4 py-3 text-gray-800 hover:bg-gray-100 transition ${
                  isActive ? "bg-[#FFD0C7] " : ""
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
