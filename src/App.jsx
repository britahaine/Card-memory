import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import { useEffect, useState } from "react";

const cardvalues = [
  "book",
  "pen",
  "pencil",
  "paper",
  "rubber",
  "chalk",
  "desk",
  "teacher",
  "book",
  "pen",
  "pencil",
  "paper",
  "rubber",
  "chalk",
  "desk",
  "teacher",
];
function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlipped] = useState([]);

  console.log(cardvalues);

  function InitializeGame() {
    const finalCards = cardvalues.map((value, index) => ({
      id: index,
      value,
      isflipped: false,
      ismatched: false,
    }));
    setCards(finalCards);

    console.log(finalCards);
  }
  useEffect(() => {
    InitializeGame();
  }, []);

  const handleClick = (clickedCard) => {
    if (clickedCard.isflipped || clickedCard.ismatched) {
      return;
    }
    const newCards = cards.map((c) => {
      if (c.id === clickedCard.id) {
        return { ...c, isflipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, clickedCard.id];
    setFlipped(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const firstCard = newCards.find((c) => c.id === newFlippedCards[0]);
      const secondCard = newCards.find((c) => c.id === newFlippedCards[1]);

      if (firstCard && secondCard) {
        if (firstCard.value === secondCard.value) {
          const matchedCards = newCards.map((c) =>
            newFlippedCards.includes(c.id) ? { ...c, ismatched: true } : c,
          );
          setCards(matchedCards);
          setFlipped([]);
        } else {
          // flip back after short delay
          setTimeout(() => {
            const flippedBack = newCards.map((c) =>
              newFlippedCards.includes(c.id) ? { ...c, isflipped: false } : c,
            );
            setCards(flippedBack);
            setFlipped([]);
          }, 800);
        }
      }
    }
  };

  return (
    <>
      <GameHeader score={3} moves={4} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default App;
