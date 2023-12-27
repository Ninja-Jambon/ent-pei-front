import React, { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../components/topbar";
import HomeworkForm from "../components/homeworkForm";

export default function Homeworks(user) {
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
          <div>Loading...</div>
        </div>
      );
    }
  } else if (data.error || user.user.error) {
    return (
      <div>
        <Topbar />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={user.user} />
        <div className="row container-fluid p-0 m-0 h-100">
          <div className="col text-center">
            <ul>
              {data.map((homework) => (
                <li>
                  <h1>{homework.title}</h1>
                  <h2>{homework.subject}</h2>
                  <h3>{homework.date}</h3>
                  <p>{homework.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col text-center mt-5">
            <HomeworkForm />
          </div>
        </div>
      </div>
    );
  }
}
