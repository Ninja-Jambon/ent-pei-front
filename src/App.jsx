import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Login from "./pages/Login";
import Leaderboard from "./pages/Leaderboard";
import Homeworks from "./pages/Homeworks";

function App() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    async function getUser() {
      const userData = await axios.get(
        "/api/v1/discord/user",
        {
          withCredentials: true,
        }
      );
      setUser(userData.data);
    }

    getUser();
  }, []);

  if (user.id) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homeworks user={user} />} />
          <Route path="/leaderboard" element={<Leaderboard user={user} />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <Login />;
  }
}

export default App;
