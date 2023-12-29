import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <h1 className="login-text">Connect with discord</h1>
      <Link className="button button-login" to="https://discord.com/api/oauth2/authorize?client_id=1178732047804669952&response_type=code&redirect_uri=http%3A%2F%2Fleizour.fr%2Fapi%2Fdiscord%2Fredirect&scope=identify+guilds+guilds.members.read">
        Login
      </Link>
    </div>
  );
}
