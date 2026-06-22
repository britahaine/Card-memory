import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import { useState } from "react";


 const cardvalues = [
    "book", "pen", "pencil", "paper",
    "rubber", "chalk", "desk", "teacher",
    "book", "pen", "pencil", "paper",
    "rubber", "chalk", "desk", "teacher"
  ];
function App() {
  const [cards, setCards] = useState([]);

  function InitializeGame() {
    const finalCards = cardvalues.map((value, index) => ({
      id: index,
      value,
      isflipped: false,
      ismatched: false,
    }));
  }
  
  

  return (
    <>
      <GameHeader score={3} moves={4} />

      <div className="cards-grid">
        {cardvalues.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </>
  );
}

export default App;