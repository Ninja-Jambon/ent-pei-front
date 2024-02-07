import { useState, useEffect } from "react";
import axios from "axios";

import Topbar from "../assets/topbar";
import HomeworksForm from "../assets/homeworksForm";

import './homeworks.css';

export default function Homeworks({ user }) {
  const [homeworks, setHomeworks] = useState(0);
  const [loading, setLoading] = useState(true);

  function showForm() {
    var form = document.querySelector(".homeworks-form");

    form.style.display = "flex";
  }

  async function deleteHomework(id) {
    await axios.post("/api/v1/homeworks/remove",
    {
      id: id,
    },
    {
      withCredentials: true,
    })
  }

  useEffect(() => {
    async function getHomeworks() {
      const homeworksData = await axios.get(
        "/api/v1/homeworks/list",
        { withCredentials: true }
      );

      setHomeworks(homeworksData.data);
    }

    getHomeworks();
    setLoading(false);
  });

  if (loading) {
    return (
      <div className="homeworks">
        <Topbar user={user} page={1} />
      </div>
    );
  } else if (homeworks[0]) {
    return (
      <div className="homeworks">
        <Topbar user={user} page={1} />
        <div className="homeworks-top">
          <button className="button button-add" onClick={showForm}>
            Add homework
          </button>
        </div>
        <div className="homeworks-list">
          {homeworks.map((homework) => (
            <div className={`homework ${homework.important ? "homework-important" : ""}`}>
              <div className="homework-top">
                <p className="homework-title">{homework.title}</p>
                <p className="homework-date">{new Date(homework.date).toDateString()}</p>
                <button className="button button-red" onClick={() => deleteHomework(homework.id)}>Delete</button>
              </div>
              <p className="homework-description">{homework.description}</p>
            </div>
          ))}
        </div>
        <HomeworksForm />
      </div>
    );
  } else {
    return (
      <div className="homeworks">
        <Topbar user={user} page={1} />
        <div className="homeworks-top">
          <button className="button button-add" onClick={showForm}>
            Add homework
          </button>
        </div>
        <HomeworksForm />
      </div>
    );
  }
}
