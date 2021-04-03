import React, { useEffect, useRef, useState, useReducer } from "react";
import Moment from "react-moment";
import moment from "moment";

const Leaderboard = () => {
  const [playersScore, setPlayersScore] = useState([]);
  const [displayLeaderboard, setDisplayLeaderboard] = useState(true);

  useEffect(() => {
    let url = `/api/v1/players/index`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("unable");
      })
      .then((res) => setPlayersScore(res))
      .catch((error) => console.log(error.message));
  }, []);

  const toggleBoard = () => {
    if (displayLeaderboard === false) {
      setDisplayLeaderboard(true);
    } else {
      setDisplayLeaderboard(false);
    }
  };

  return (
    <div>
      <div className="button-ctn">
        <button onClick={toggleBoard}>Leaderboard</button>
      </div>
      {displayLeaderboard && (
        <div className="table-ctn">
          <table className="leaderboard">
            <thead>
              <tr>
                <th className="title-name">NAME</th>
                <th>TIME</th>
              </tr>
            </thead>
            <tbody>
              {playersScore.length > 0 ? (
                playersScore.slice(0, 10).map((player, index) => {
                  let minutes = Math.floor(player.time / 60);
                  let seconds = player.time - minutes * 60;
                  return (
                    <tr key={index}>
                      <td>{player.name}</td>
                      <td>
                        {minutes}:{seconds}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>None</td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={toggleBoard}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
