import React, { useContext } from "react";
import "./Card.css";
import { Context } from "../../context/context";

const Card = ({ text, image }) => {
  const { setRecentPrompt, onSent, setPreviousPrompt } = useContext(Context);

  const loadCardPrompt = async (prompt) => {
    setPreviousPrompt((prev) => [...prev, prompt]);
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="card" onClick={() => loadCardPrompt(text)}>
      <p>{text}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
