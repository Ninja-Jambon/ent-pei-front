import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Homeworks from "./pages/Homeworks";
import Planning from "./pages/Planning";

import "./App.css";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const user = await axios.get("/api/discord/user", {
        withCredentials: true,
      });

      setData(user.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={data} />} />
          <Route path="/homeworks" element={<Homeworks user={data} />} />
          <Route path="/planning" element={<Planning user={data} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
