import React from "react";
import { Link } from "react-router-dom";

export default function Topbar({ user, selected }) {
  return (
    <div className="topbar">
      <div>
        <Link
          to="/"
          className={
            selected == 1 ? "button button-red" : "button button-salmon"
          }
        >
          Home
        </Link>
        <Link
          to="/planning"
          className={
            selected == 2 ? "button button-red" : "button button-salmon"
          }
        >
          Planning
        </Link>
        <Link
          to="/homeworks"
          className={
            selected == 3 ? "button button-red" : "button button-salmon"
          }
        >
          Homeworks
        </Link>
      </div>
      <div className="topbar-right">
        <p className="topbar-username">{user.username}</p>
        <img
          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
          alt="avatar"
          className="avatar"
        />
        <a
          href="http://localhost:5000/api/logout"
          className="button button-red"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
