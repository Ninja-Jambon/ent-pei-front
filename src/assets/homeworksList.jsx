import { useState, useEffect } from "react";
import axios from "axios";

export default function HomeworksList() {
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function deleteHomework(id) {
    await axios.post(
      "/api/v1/homeworks/remove",
      {
        id: id,
      },
      {
        withCredentials: true,
      }
    );
  }

  useEffect(() => {
    async function getHomeworks() {
      const homeworksData = await axios.get("/api/v1/homeworks/list", {
        withCredentials: true,
      });

      setHomeworks(homeworksData.data);
    }

    getHomeworks();
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="homeworks-list">
        {homeworks.map((homework) => (
          <div
            className={`homework ${
              homework.important ? "homework-important" : ""
            }`}
          >
            <div className="homework-top">
              <p className="homework-title">{homework.title}</p>
              <p className="homework-date">
                {new Date(homework.date).toDateString()}
              </p>
              <button
                className="button button-red"
                onClick={() => deleteHomework(homework.id)}
              >
                Delete
              </button>
            </div>
            <p className="homework-description">{homework.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
