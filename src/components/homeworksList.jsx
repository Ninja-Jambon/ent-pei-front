import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeworksList() {
  async function deleteHomework(id) {
    const res = await axios.get(`/api/homeworks/delete?id=${id}`, {
      withCredentials: true,
    });

    if (res.data.error) {
      alert(res.data.error);
    } else {
      window.location.reload(false);
    }
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const homeworks = await axios.get("/api/homeworks", {
        withCredentials: true,
      });

      setData(homeworks.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="homeworks">Loading...</div>;
  } else {
    console.log(data);
    return (
      <div className="homeworks">
        {data.map((homework) => (
          <div className={homework.important == 0 ? "homework" : "homework homework-important"}>
            <div className="homework-top">
              <p className="homework-title">{homework.title}</p>
              <p className="homework-subject">{homework.subject}</p>
              <p className="homework-date">{homework.date}</p>
              <button
                className="button button-red"
                onClick={() => deleteHomework(homework.id)}
              >
                Supr
              </button>
            </div>
            <p className="homework-description">{homework.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
