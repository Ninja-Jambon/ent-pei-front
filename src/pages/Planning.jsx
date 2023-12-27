import React from "react";
import Topbar from "../components/topbar";

export default function Planning(user) {
  if (user.user.error) { 
    return (
      <div>
        <Topbar />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={user.user} />
        <h2>Le planning</h2>
      </div>
    );
  }
}
