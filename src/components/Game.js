import { useState, useCallback } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import "../styles/Game.css";

function Game() {
  // eslint-disable-next-line
  const [cardList, setCardList] = useState([
    { image: "1", description: "Giyu", id: uniqid() },
    { image: "2", description: "Gyomei", id: uniqid() },
    { image: "3", description: "Kyojuro", id: uniqid() },
    { image: "4", description: "Mitsuri", id: uniqid() },
    { image: "5", description: "Muichiro", id: uniqid() },
    { image: "6", description: "Nezuko", id: uniqid() },
    { image: "7", description: "Obanai", id: uniqid() },
    { image: "8", description: "Sanemi", id: uniqid() },
    { image: "9", description: "Shinobu", id: uniqid() },
    { image: "10", description: "Tanjiro", id: uniqid() },
    { image: "11", description: "Tengen", id: uniqid() },
    { image: "12", description: "Yuiichiro", id: uniqid() },
  ]);

  const [clickedCardList, setClickedCardList] = useState([]);

  const [score, setScore] = useState([0, 0]);

  let topScore = 0;

  function getCardId(clickedElement) {
    let clickedCardId = clickedElement.id;
    if (clickedCardId === "") {
      clickedCardId = clickedElement.parentElement.id;
    }
    return clickedCardId;
  }

  function checkClickedCardList(cardId) {
    const checkCard = clickedCardList.filter((card) => card.id === cardId);
    return checkCard.length === 0
      ? cardList.filter((card) => card.id === cardId)
      : false;
  }

  const handleCardClick = useCallback((event) => {
    const clickedCardId = getCardId(event.target);
    const checkedCard = checkClickedCardList(clickedCardId);

    if (checkedCard) {
      setClickedCardList([...clickedCardList, checkedCard[0]]);
      setScore(score + 1);
    } else {
      if (score > topScore) {
        topScore = score;
      }
      setScore(0);
      setClickedCardList([]);
      console.log(`Top score is ${topScore}`);
    }
  });

  function shuffleArray(array) {
    const newArray = array;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  return (
    <div className="game">
      <div className="board-wrapper">
        {shuffleArray(cardList).map((card) => (
          <Card
            image={card.image}
            description={card.description}
            cardId={card.id}
            handleCardClick={handleCardClick}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
