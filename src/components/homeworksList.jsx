import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeworksList() {
  async function deleteHomework(id) {
    axios.get(`/api/homeworks/delete?id=${id}`, {
      withCredentials: true,
    });

    window.location.reload();
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
    return <div>Loading...</div>;
  } else {
    return (
      <div className="homeworks">
        {data.map((homework) => (
          <div className="homework">
            <div className="homework-top">
              <p className="homework-title">{homework.title}</p>
              <p className="homework-subject">{homework.subject}</p>
              <p className="homework-date">{homework.date}</p>
              <button className="button button-red" onClick={() => deleteHomework(homework.id)}>Supr</button>
            </div>
            <p className="homework-description">{homework.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
