import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
export default function CardBox({ cardsEasyType, totalTime, totalFlip }) {
  const [cards, setCards] = useState([]);
  const [time, setTime] = useState(0);
  const [match, setMatch] = useState(0);
  const [flip, setFlip] = useState(0);
  const [disable, setDisabled] = useState(false);
  const [firstSelect, setFirstSelect] = useState(null);
  const [secondSelect, setSecondSelect] = useState(null);
  useEffect(() => {
    if (firstSelect && secondSelect) {
      if (firstSelect.id === secondSelect.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === firstSelect.id) {
              setMatch((pre) => pre + 2);
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
    if (match.length === cards.length) {
      alert("You win");
    } else if (time > totalTime || flip >= totalFlip - 1) {
      alert("you lose the game");
    }
    console.log("----", time, flip);
  };
  const handleSelect = (card) => {
    if (flip < totalFlip) {
      if (firstSelect) {
        setSecondSelect(card);
        checkWin();
      } else {
        setFirstSelect(card);
      }
    } else {
      alert("You Have reached Maximum limit of Flip");
      checkWin();
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
    setFlip(0);
    setTime(0);
    handleTime();
    clearTime();
  };

  //   useEffect(() => {
  //     suffle();
  //   }, []);

  useEffect(() => {}, []);

  let timeDuration;

  const handleTime = () => {
    timeDuration = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const clearTime = () => {
    setTimeout(() => {
      checkWin();
      clearInterval(timeDuration);
    }, 10 * 1000);
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
      <h1>Memory Game</h1>
      <button onClick={suffle}>New Game</button>
      <h2>Number of Flip :{flip}</h2>
      <h2>Time Duration :{time}</h2>
      <div className="card-grid-Easy">
        {cards.map((card) => (
          <Card
            key={card.uniqueId}
            card={card}
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
            disabled={disable}
          />
        ))}
      </div>
    </div>
  );
}
