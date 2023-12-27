import React from "react";
import Topbar from "../components/topbar";

export default function Planning({user}) {
  if (user.error) { 
    return (
      <div>
        <Topbar selected={2} />
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
