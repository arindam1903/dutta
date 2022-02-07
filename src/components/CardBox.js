import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./CardBox.css";
export default function CardBox({
  cardsEasyType,
  totalTime,
  totalFlip,
  cardsize,
  level,
}) {
  const [cards, setCards] = useState([]);
  const [time, setTime] = useState(0);
  const [match, setMatch] = useState(0);
  const [win, setWin] = useState(false);
  const [flip, setFlip] = useState(0);
  const [disable, setDisabled] = useState(false);
  const [firstSelect, setFirstSelect] = useState(null);
  const [secondSelect, setSecondSelect] = useState(null);

  //   console.log("----", cardsize);

  useEffect(() => {
    if (firstSelect && secondSelect) {
      if (firstSelect.id === secondSelect.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === firstSelect.id) {
              setMatch((pre) => pre + 1);
              checkWin();
              return { ...card, matched: true };
            } else {
              checkWin();
              return card;
            }
          });
        });

        reSchdule();
      } else {
        reSchdule();
      }
    }
  }, [firstSelect, secondSelect]);
  // console.log(cards);
  const checkWin = () => {
    // const sucessCheckCards = cards.filter((ele) => ele.matched === true);
    // if (match.length === cards.length) {
    //   //   setDisabled(true);
    //   alert("You win");
    // } else if (time >= totalTime || flip >= totalFlip - 1) {
    //   setFirstSelect(null);
    //   setSecondSelect(null);
    //   setDisabled(true);
    //   //   setFlip(0);
    //   //   setTime(0);
    //   alert("you lose the game");
    // }
    // console.log("----", time, flip);
    // if (match.length === cards.length) {
    //   setWin(true);
    // }
  };

  useEffect(() => {
    console.log(match, cardsize, win);
    if (match === cardsize) {
      setWin(true);
      console.log(match, cardsize, win);
    }
  }, [setSecondSelect]);
  const handleSelect = (card) => {
    if (flip < totalFlip) {
      if (firstSelect) {
        setSecondSelect(card);
      } else {
        setFirstSelect(card);
      }
    } else {
      alert("You Have reached Maximum limit of Flip");
      setDisabled(true);
    }
  };
  const suffle = () => {
    const cardsEasyIcons = [...cardsEasyType, ...cardsEasyType]
      .sort(() => Math.random() - 0.5)
      .map((ele) => ({ ...ele, uniqueId: Math.random() }));
    setFirstSelect(null);
    setSecondSelect(null);
    setCards(cardsEasyIcons);
    setDisabled(false);
    setFlip(0);
    setTime(0);
    handleTime();
    clearTime();
  };

  let timeDuration;

  const handleTime = () => {
    timeDuration = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const clearwintinterval = setInterval(() => {
    if (win === true) {
      alert("won");
      clearwintintervalfunc();
    } else if ((!win && flip === totalFlip) || (!win && time === totalTime)) {
      console.log(win, flip, time, totalTime, totalFlip);
      setDisabled(true);
      alert(`loose1 ${disable} ${time} ${flip}`);

      clearwintintervalfunc();
    }
  }, 100);
  const clearwintintervalfunc = () => {
    clearInterval(clearwintinterval);
  };
  const clearTime = () => {
    setTimeout(() => {
      setDisabled(true);
      checkWin();
      clearInterval(timeDuration);
    }, totalTime * 1000);
  };

  const reSchdule = () => {
    setTimeout(() => {
      setFirstSelect(null);
      setSecondSelect(null);
      setFlip((prevFlip) => prevFlip + 1);
    }, 500);
  };
  return (
    <div className="App">
      <div className="header">
        <Link
          to="/"
          style={{ color: "white", fontSize: "23px", textDecoration: "none" }}
        >
          <p>⌫back</p>
        </Link>
        <div className="start">
          <p>Memory Game</p>
          <button onClick={suffle}>New Game</button>
        </div>
        <div className="end">
          <div>Number of Flip :{flip}</div>
          <div>Time Duration :{time}</div>
        </div>
      </div>
      {!disable ? (
        <div
          className={
            level === "Easy"
              ? "card-grid-Easy"
              : level === "Medium"
              ? "card-grid-Medium"
              : "card-grid-Hard"
          }
        >
          {cards.map((card) => (
            <Card
              key={card.uniqueId}
              card={card}
              level={level}
              handleSelect={handleSelect}
              flipped={
                !!card.matched && card.matched
                  ? true
                  : !!!secondSelect &&
                    !!firstSelect &&
                    card.uniqueId === firstSelect.uniqueId
                  ? true
                  : !!secondSelect &&
                    !!firstSelect &&
                    card.uniqueId === firstSelect.uniqueId
                  ? true
                  : !!secondSelect &&
                    !!firstSelect &&
                    card.uniqueId === secondSelect.uniqueId
                  ? true
                  : false
              }
            />
          ))}
        </div>
      ) : (
        <h1>game over</h1>
      )}
    </div>
  );
}
