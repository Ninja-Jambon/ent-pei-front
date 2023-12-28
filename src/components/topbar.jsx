import React from "react";
import { Link } from "react-router-dom";

export default function Topbar({ user, selected }) {
  console.log(user);
  if (user) {
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
          <Link
            to="http://localhost:5000/api/logout"
            className="button button-red"
          >
            Logout
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/planning">Planning</Link>
          <Link to="/homeworks">Homeworks</Link>
        </div>
        <ul className="navbar-nav">
          <Link to="https://discord.com/api/oauth2/authorize?client_id=1178732047804669952&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fdiscord%2Fredirect&scope=guilds+guilds.members.read+identify">
            Login
          </Link>
        </ul>
      </div>
    );
  }
}
