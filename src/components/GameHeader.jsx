import React from "react";

function GameHeader({ score, moves }) {
  return (
    <>
      <header className="game-header">
        <h1>Memory Card Game</h1>
      </header>
      <div>
        <div>
          Score:
          <span>{score}</span>
        </div>
        <div>
          Moves:
          <span>{moves}</span>
        </div>

        <button className="reset-btn" onClick={onreset}>
          New Game
        </button>
      </div>
    </>
  );
}

export default GameHeader;
