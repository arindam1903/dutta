import React from "react";
import "./Card.css";
export default function Card({ card, handleSelect, flipped }) {
  const handleClick = () => {
    handleSelect(card);
  };
  return (
    <div>
      <div className={flipped ? "flipped" : ""}>
        <div className="card">
          <div className="front-Easy">{card.icon}</div>
          <div className="back-Easy" onClick={handleClick}></div>
        </div>
      </div>
    </div>
  );
}
