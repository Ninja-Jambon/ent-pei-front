import React from "react";
import Topbar from "../components/topbar";
import HomeworkForm from "../components/homeworkForm";
import HomeworksList from "../components/homeworksList";

export default function Homeworks({user}) {

  if (user.error) {
    return (
      <div>
        <Topbar selected={3} />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={user} selected={3} />
        <div className="row container-fluid p-0 m-0 h-100">
          <div className="col text-center">
            <HomeworksList />
          </div>
          <div className="col text-center mt-5">
            <HomeworkForm />
          </div>
        </div>
      </div>
    );
  }
}
