import React from "react";
import Topbar from "../components/topbar";
import HomeworkForm from "../components/homeworkForm";
import HomeworksList from "../components/homeworksList";
import Login from "../components/login";

export default function Homeworks({ user }) {
  if (user.error) {
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={user} selected={3} />
        <div className="homework-page">
          <HomeworksList />
          <HomeworkForm />
        </div>
      </div>
    );
  }
}
