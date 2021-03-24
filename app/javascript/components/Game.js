import React, { useEffect, useState, useRef, useReducer } from "react";
import Waldo from "images/waldo.jpg";
import PopUp from "./PopMenu";

const Game = () => {
  const clickMenu = useRef(false);
  const [positionTop, setPositionTop] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);

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
      console.log(e);
      let topOffset = e.layerY;
      let leftOffset = e.layerX;
      let targetElement = e.target.localName;
      if(targetElement === "img") {
      showWindow(topOffset, leftOffset);
      console.log(clickMenu.current);
      } else {
      clickMenu.current = false;
      forceUpdate();

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
              <PopUp />
            </div>
          </div>
        )}
      </div>
      <img src={Waldo} />
    </div>
  );
};

export default Game;
