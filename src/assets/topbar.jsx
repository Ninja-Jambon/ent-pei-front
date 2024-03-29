import React from "react";
import { Link } from "react-router-dom";

import "./topbar.css";

export default function Topbar({ user, page }) {
  return (
    <div className="topbar">
      <Link to="/" className={`button ${page == 1 ? "button-red" : ""}`}>
        Homeworks
      </Link>
      <Link
        to="/leaderboard"
        className={`button ${page == 2 ? "button-red" : ""}`}
      >
        Leaderboard
      </Link>
      <p className="topbar-username">{user.username}</p>
      <img
        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
        alt="avatar"
        className="topbar-avatar"
      />
      <a className="button button-red" href="/api/v1/discord/logout">Logout</a>
    </div>
  );
}
