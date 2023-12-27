import React from "react";
import Topbar from "../components/topbar";

export default function Home({user}) {
  if (user.error) { 
    return (
      <div>
        <Topbar selected={1} />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={user} selected={1} />
        <h2>Welcome {user.username}</h2>
      </div>
    );
  }
}
