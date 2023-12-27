import React from "react";
import Topbar from "../components/topbar";

export default function Home(user) {
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
        <h2>Welcome {user.user.username}</h2>
      </div>
    );
  }
}
