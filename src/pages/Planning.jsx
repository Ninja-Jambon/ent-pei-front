import React from "react";
import Topbar from "../components/topbar";
import Login from "../components/login";

export default function Planning({user}) {
  if (user.error) { 
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={user} selected={2} />
        <h2>Le planning</h2>
      </div>
    );
  }
}
