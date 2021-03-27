import React, { useEffect, useReducer, useState} from "react";

const PopUp = (props) => {

  const [charInfo, setCharInfo] = useState("");
  const [receivedCharInfo, setReceivedCharInfo] = useState(false);


useEffect(() =>  {
  if(receivedCharInfo) {
    console.log('api call has run');
    checkMatch();
  }
});

const checkMatch = () => {
  let xGuess = props.userClickTop;
  let yGuess = props.userClickLeft;
  let xActual = charInfo.xCoor;
  let yActual = charInfo.yCoor;
  console.log(xGuess, yGuess, xActual, yActual);
 if(xGuess >= xActual - 25 && xGuess <= xActual + 25){
   if((yGuess >= yActual - 25 && yGuess <= yActual + 25)) {
     console.log('you found me');
   }
 }
};
    const handleClick = (e) => {
      e.preventDefault();
      let targetId = e.target.dataset.id;
      console.log(e);
      fetch(`/api/v1/characters/show/${targetId}`)
      .then(response => {
          return response.json()
      })
      .then(data => setCharInfo(data))
      .then(setReceivedCharInfo(true))
      .catch(error => console.log(error.message))
  }

  return (
    <div>
      <div className="char-options">
        <a href="#" data-id="1" onClick={handleClick}>Waldo</a>
        <a href="#" data-id="2" onClick={handleClick}>Wenda</a>
        <a href="#" data-id="3" onClick={handleClick}>Whitebeard</a>
        <a href="#" data-id="4" onClick={handleClick}>Odlaw</a>

      </div>
    </div>
  );
}

export default PopUp;