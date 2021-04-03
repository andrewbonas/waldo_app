import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
} from "react";
import Waldo from "images/waldo.jpg";
import PopUp from "./PopMenu";
import Timer from "./Timer";
import Leaderboard from "./Leaderboard";

const Game = () => {
  const clickMenu = useRef(false);
  const [positionTop, setPositionTop] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);
  const [charsFound, setCharsFound] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [finishTime, setFinishTime] = useState(0);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (charsFound.length === 4) {
      setGameOver(true);
      if (finishTime > 0) {
        let name = prompt("Type your name for the leader board:");
        setPlayerScore(name, finishTime);
        window.location.reload();
      }
    }
  });

  const setPlayerScore = (name, time) => {
    if (name === null || name.length === 0) {
      return;
    }
    const body = {
      name,
      time,
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    let url = "/api/v1/players/create";
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error.message));
  };

  const showWindow = (topOffset, leftOffset) => {
    if (!clickMenu.current) {
      clickMenu.current = true;
      setPositionTop(topOffset);
      setPositionLeft(leftOffset);
    } else {
      clickMenu.current = false;
    }
    forceUpdate();
  };

  useEffect(() => {
    const handleClick = (e) => {
      let topOffset = e.pageY;
      let leftOffset = e.pageX;
      let targetElement = e.target.localName;
      if (targetElement === "img") {
        showWindow(topOffset, leftOffset);
        clickMenu.current = false;
      } else {
        clickMenu.current = false;
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div>
        {clickMenu.current && (
          <div>
            <div
              className="pop-up"
              style={{ top: positionTop, left: positionLeft }}
            >
              <PopUp
                userClickTop={positionTop}
                userClickLeft={positionLeft}
                charsFound={charsFound}
                setCharsFound={setCharsFound}
              />
            </div>
          </div>
        )}
      </div>
      <div className="counter">
        Characters found: {charsFound.length}/4
        <Timer
          gameOver={gameOver}
          finishTime={finishTime}
          setFinishTime={setFinishTime}
        />
        <Leaderboard />
      </div>

      <div
        style={
          charsFound.find((el) => el === "Waldo") ? { display: "block" } : {}
        }
        id="found-waldo"
      >
        {" "}
      </div>
      <div
        style={
          charsFound.find((el) => el === "Wenda") ? { display: "block" } : {}
        }
        id="found-wenda"
      ></div>
      <div
        style={
          charsFound.find((el) => el === "Whitebeard")
            ? { display: "block" }
            : {}
        }
        id="found-whitebeard"
      ></div>
      <div
        style={
          charsFound.find((el) => el === "Odlaw") ? { display: "block" } : {}
        }
        id="found-odlaw"
      ></div>
      <img src={Waldo} />
    </div>
  );
};
export default Game;
