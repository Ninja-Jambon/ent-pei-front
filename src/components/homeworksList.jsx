import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeworksList() {
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
      <div>
        {data.map((homework) => (
          <div className="card m-3" id={homework.id}>
            <div class="card">
              <div class="card-header">
                {homework.title} <span class="badge bg-danger">{homework.subject}</span>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><p>{homework.description}</p></li>
                <li class="list-group-item">{homework.date}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
