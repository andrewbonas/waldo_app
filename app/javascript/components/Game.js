import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
} from "react";
import Waldo from "images/waldo.jpg";
import PopUp from "./PopMenu";

const Game = () => {
  const clickMenu = useRef(false);
  const [positionTop, setPositionTop] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);
  const [charsFound, setCharsFound] = useState([]);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

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
      console.log(e.pageX, e.pageY);
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
      <div>Characters found: {charsFound.length}/4</div>
      <img src={Waldo} />
    </div>
  );
};
export default Game;
