import React, { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../components/topbar";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const user = await axios.get("/api/discord/user", {
        withCredentials: true,
      });

      setData({ user: user.data });
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
  } else if (data.user.error) { 
    return (
      <div>
        <Topbar />
      </div>
    );
  } else {
    return (
      <div>
        <Topbar user={data.user} />
        <h2>Welcome {data.user.username}</h2>
      </div>
    );
  }
}
