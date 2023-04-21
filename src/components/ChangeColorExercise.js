import "../App.css";
import { Game } from "./Game.js";
import { useState } from "react";

export function ChangeColorExercise() {
  const [isPink,setIsPink] = useState();
  
  const games = [
    { gamePrice: 200 , gameTitle: "Zelda" },
    { gamePrice: 120, gameTitle: "Super Mario Bros" },
  ];

  return (
    <div className="App">
      <button className="btn-gradient" onClick={() => isPink ? setIsPink(false) : setIsPink(true)}> Change color </button>
      {games.map((value) => {
        return (
          <div key={value.gameTitle} style={{ color: isPink ? "pink" : "purple" }}>
            <Game gamePrice={value.gamePrice} gameTitle={value.gameTitle} />
          </div>
        );
      })}
    </div>
  );
}
