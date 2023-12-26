import React, { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../components/topbar";
import HomeworkForm from "../components/homeworkForm";

export default function Login() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const homeworks = await axios.get("http://localhost:5000/api/homeworks", {
        withCredentials: true,
      });

      const user = await axios.get("http://localhost:5000/api/discord/user", {
        withCredentials: true,
      });

      setData({ homeworks: homeworks.data, user: user.data });
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Topbar />
        <div>Loading...</div>
      </div>
    );
  } else if (data.homeworks.error || data.user.error) {
    return (
      <div>
        <Topbar />
      </div>
    );
  } else {
    console.log(data.homeworks);
    return (
      <div>
        <Topbar user={data.user}/>
          <div className="row container-fluid p-0 m-0">
            <div className="col text-center bg-success">
              <p>test</p>
            </div>
            <div className="col text-center mt-5">
              <HomeworkForm />
            </div>
        </div>
      </div>
    );
  }
}
