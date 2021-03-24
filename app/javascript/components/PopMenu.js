import React from "react";

const PopUp = () => {


    const handleClick = (e) => {
      e.preventDefault();
      console.log(e);
      console.log('hi');
    };

  return (
    <div>
      <div className="char-options">
        <a href="#" onClick={handleClick}>Waldo</a>
        <a href="#" onClick={handleClick}> The other waldo</a>
        <a href="#" onClick={handleClick}>The other person</a>
      </div>
    </div>
  );
}

export default PopUp;