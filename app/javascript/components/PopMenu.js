import React, { useEffect, useReducer, useState} from "react";

const PopUp = () => {


  const [items, setItems] = useState("");

useEffect(() =>  {
  checkMatch(items);
});

const checkMatch = (items) => {
  console.log(items);
};
    const handleClick = (e) => {
      e.preventDefault();
      console.log(e);
      let targetId = e.target.dataset.id;
      fetch(`/api/v1/characters/show/${targetId}`)
      .then(response => {
          return response.json()
      })
      .then(data => setItems(data))
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