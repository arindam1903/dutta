import "./App.css";
import { IoAccessibilityOutline } from "react-icons/io5";
import { IoAccessibilitySharp } from "react-icons/io5";
import { IoAmericanFootballOutline } from "react-icons/io5";
import { IoAmericanFootballSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Card from "./components/Card";
const cardsEasyType = [
  { icon: <IoAccessibilityOutline />, id: 1, matched: false },
  { icon: <IoAccessibilitySharp />, id: 2, matched: false },
  { icon: <IoAmericanFootballOutline />, id: 3, matched: false },
  { icon: <IoAmericanFootballSharp />, id: 4, matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(0);
  const [firstSelect, setFirstSelect] = useState(null);
  const [secondSelect, setSecondSelect] = useState(null);
  useEffect(() => {
    if (firstSelect && secondSelect) {
      if (firstSelect.id === secondSelect.id) {
        // console.log("matched");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === firstSelect.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        //reSchdule();
      } else {
        reSchdule();
      }
    }
  }, [firstSelect, secondSelect]);
  console.log(cards);
  const handleSelect = (card) => {
    setFlip((prevFlip) => prevFlip + 1);
    if (firstSelect) {
      setSecondSelect(card);
    } else {
      setFirstSelect(card);
    }
  };
  const suffle = () => {
    const cardsEasyIcons = [...cardsEasyType, ...cardsEasyType]
      .sort(() => Math.random() - 0.5)
      .map((ele) => ({ ...ele, uniqueId: Math.random() }));

    setCards(cardsEasyIcons);
    setFlip(0);
  };

  const reSchdule = () => {
    setTimeout(()=>{
      setFirstSelect();
      setSecondSelect();
    },500)
  };
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={suffle}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.uniqueId}
            card={card}
            handleSelect={handleSelect}
            flipped={ !!card.matched && card.matched ? true
                      : !(!!secondSelect) && !!firstSelect && card.uniqueId === firstSelect.uniqueId ? true 
                      : !!secondSelect && !!firstSelect && card.uniqueId === firstSelect.uniqueId ? true 
                      : !!secondSelect && !!firstSelect && card.uniqueId === secondSelect.uniqueId ? true 
                      : false
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
