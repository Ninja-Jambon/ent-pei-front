import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../assets/topbar";

import "./leaderboard.css";

export default function Leaderboard({ user }) {
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState([]);

  async function updateLeaderboard() {
    await axios.get("/api/v1/rootme/updatescore", {
      withCredentials: true,
    });
  }

  useEffect(() => {
    async function getScore() {
      const scoreData = await axios.get(
        "/api/v1/rootme/getscore",
        { withCredentials: true }
      );

      setScore(scoreData.data);
      setLoading(false);
    }

    getScore();
  }, []);

  if (loading) {
    return <Topbar user={user} page={2} />;
  } else if (score[0]) {
    return (
      <div className="leaderboard">
        <Topbar user={user} page={2} />
        <div className="user-list">
          <button className="button button-update" onClick={updateLeaderboard}>Update</button>
          {score.map((user, index) => (
            <div className={`score-user ${index == 0 ? "score-user-first" : index == 1 ? "score-user-second" : index == 2 ? "score-user-third" : ""}`}>
              <div className="score-name">{user.name}</div>
              <a href={user.url} className="score-link">
                {user.username}
              </a>
              <div className="score-points">{user.points}</div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <Topbar user={user} page={2} />;
  }
}
