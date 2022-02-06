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
          <div className="front">{card.icon}</div>
          <div className="back" onClick={handleClick}></div>
        </div>
      </div>
    </div>
  );
}
