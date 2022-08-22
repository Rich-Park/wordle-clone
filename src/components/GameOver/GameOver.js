import { useContext } from "react";
import { AppContext } from "../../App";

// Style import
import "./GameOver.scss";

const GameOver = () => {
  const { gameOver, randomWord, curGuess } = useContext(AppContext);

  return (
    <div className="footer-wrapper">
      <div className="gameOver">
        <h3>
          {gameOver.guessedWord
            ? "Congratulation, you correctly guessed the word!"
            : "Sorry, you failed!"}
        </h3>
        <h1>The correct word was {randomWord}</h1>

        {gameOver.guessedWord && (
          <h3>
            You guessed in {curGuess.row}
            {curGuess.row === 1 ? " attempt" : " attempts"}
          </h3>
        )}
      </div>
    </div>
  );
};

export default GameOver;
