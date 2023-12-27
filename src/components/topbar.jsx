import React from "react";
import { Link } from "react-router-dom";

export default function Topbar({user, selected}) {
  console.log(user);
  if (user) {
    return (
      <div className="navbar navbar-dark bg-dark justify-content-between">
        <div className="nav">
          <Link to="/" className={`nav-item btn ${selected === 1 ? "btn-primary" : "btn-secondary"} m-2`}>
            Home
          </Link>
          <Link to="/planning" className={`nav-item btn ${selected === 2 ? "btn-primary" : "btn-secondary"} m-2`}>
            Planning
          </Link>
          <Link to="/homeworks" className={`nav-item btn ${selected === 3 ? "btn-primary" : "btn-secondary"} m-2`}>
            Homeworks
          </Link>
        </div>
        <ul className="nav">
          <a
            className="nav-item btn btn-danger m-2"
            href="http://localhost:5000/api/logout"
          >
            Logout
          </a>
          <img
            src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`}
            alt="avatar"
            className="rounded-circle m-2"
            height="60"
          />
        </ul>
      </div>
    );
  } else {
    return (
      <div className="navbar navbar-dark bg-dark justify-content-between">
        <div className="nav">
          <Link to="/" className={`nav-item btn ${selected === 1 ? "btn-primary" : "btn-secondary"} m-2`}>
            Home
          </Link>
          <Link to="/planning" className={`nav-item btn ${selected === 2 ? "btn-primary" : "btn-secondary"} m-2`}>
            Planning
          </Link>
          <Link to="/homeworks" className={`nav-item btn ${selected === 3 ? "btn-primary" : "btn-secondary"} m-2`}>
            Homeworks
          </Link>
        </div>
        <ul className="navbar-nav">
          <Link
            to="https://discord.com/api/oauth2/authorize?client_id=1178732047804669952&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi%2Fdiscord%2Fredirect&scope=guilds+guilds.members.read+identify"
            className="nav-item btn btn-success m-2"
          >
            Login
          </Link>
        </ul>
      </div>
    );
  }
}
