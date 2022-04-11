import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [Score, setScore] = useState(76);
  const [Wicket, setWicket] = useState(2);
  const [Over, setOver] = useState(5);
  const [Ball, setBall] = useState(0);

  const [Won, setWon] = useState("");

  const changeScore = (value) => {
    if (Score < 0) {
      return;
    }
    won();
    setScore(Score + value);
  };

  const changeWicket = (value) => {
    if (Wicket < 0 || Wicket >= 12) {
      return;
    }
    setWicket(Wicket + value);
  };

  // const changeOver = (value) => {
  //   setOver(Over + value);
  // };

  const changeBall = (value) => {
    setBall(Ball + value);
    if (Ball >= 6) {
      setBall(0 + value);
      setOver(Over + value);
    }
  };

  const won = (el) => {
    if (Score >= 99) {
      setWon("India Won");
    }
  };

  return (
    <>
      <div className="App">
        <h3>India:</h3>
        <div className="banner">
          <div>
            Score: <h1 className="scoreCount">{Score}</h1>
          </div>
          <div>
            Wicket: <h1 className="wicketCount">{Wicket}</h1>
          </div>

          <div>
            Over:{" "}
            <h1 className="overCount">
              {
                // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                // if 1 more ball is thrown then over is now 5.0
                // you have to write logic to form this string from current ball number.
                Over + "." + Ball
              }
            </h1>
          </div>
        </div>

        <div className="addScore">
          <h2>Add Score</h2>
          {/* these buttons should add the respective amount in the score */}
          <button className="addScore1" onClick={() => changeScore(1)}>
            Add 1
          </button>
          <button className="addScore4" onClick={() => changeScore(4)}>
            Add 4
          </button>
          <button className="addScore6" onClick={() => changeScore(6)}>
            Add 6
          </button>
        </div>

        <div className="addWicket" onClick={() => changeWicket(1)}>
          <h2>Add Wicket</h2>
          {/* Increase the count of wicket */}
          <button>Add 1 wicket</button>
        </div>

        <div className="addBall" onClick={() => changeBall(1)}>
          <h2>Add ball</h2>
          {/* Increase the total number of balls thrown here. */}
          <button>Add 1</button>
        </div>

        {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}

        <div className="won-part">
          <h1>{Won}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
