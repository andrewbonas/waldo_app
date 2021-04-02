import React, { useEffect, useRef, useState, useReducer } from "react";

const Leaderboard = () => {
  const [playersScore, setPlayersScore] = useState([]);
  const [displayLeaderboard, setDisplayLeaderboard] = useState(true);


  useEffect(() => {
    let url = `/api/v1/players/index`
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('unable');
      })
      .then(res => setPlayersScore(res))
      .then(console.log(playersScore))
      .catch((error) => console.log(error.message));
    },[]);

    const toggleBoard = () => {
      if(displayLeaderboard === false) {
      setDisplayLeaderboard(true);
      }else{ 
        setDisplayLeaderboard(false);
      }
    }

  return (
    <div>
      
      <button onClick={toggleBoard}>Leaderboard</button>
      {displayLeaderboard && ( 
        <table className="leaderboard">
      <thead>
        <th>NAME</th>
        <th>TIME</th>
      </thead>
      <tbody>
      {(playersScore.length > 0) ? playersScore.slice(0,10).map((player, index) => {
        return(
        <tr key={index}>
          <td>{player.name}</td>
          <td>{player.time}</td>
          </tr>
      )}) : <tr><td>Loading...</td></tr> }
    </tbody>
    <button onClick={toggleBoard}>Close</button>
    </table>
    )}

    </div>
  );
};

export default Leaderboard;