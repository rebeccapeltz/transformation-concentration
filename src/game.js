import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle
} from "@mui/material";
import Card from "./card";
import "./app.scss";

const logo = "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_500,c_pad,e_replace_color:blue/v1625159580/logo.png";

const data = [
  {
    type: "cartoonify",
    image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_cartoonify/chicken.jpg",
    image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Cartoonify/1px.png"
  },
  {
    type: "grayscale",
    image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_grayscale/rocket.jpg",
    image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Grayscale/1px.png"
  },
  {
    type: "outline",
    image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_outline:20,co_green/unicorn-head.png",
    image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Outline/1px.png"
  },
  {
    type: "sepia",
    image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_sepia/cld-sample",
    image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Sepia/1px.png"
  },
  {
    type: "blur-faces",
    image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_fill,e_blur_faces/tutoring",
    image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Blur%20Faces/1px.png"
  },
  {
    type: "oil-paint",
    image1: "https://res.cloudinary.com/picturecloud7/image/upload/h_500,w_600,c_pad,b_auto,e_oil_paint/rose-peach",
    image2: "https://res.cloudinary.com/cloudinary-training/image/upload/h_500,w_600,c_fill/l_text:arial_100_bold:Oil%20Paint/1px.png"
  }
];

let result = data.reduce((array, obj) => {
  array.push({ type: obj.type, image: obj.image1 });
  array.push({ type: obj.type, image: obj.image2 });
  return array;
}, []);
// console.log(JSON.stringify(result, null, 2))

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
export default function Game() {
  const [cards, setCards] = useState(() =>
    shuffleCards(result)
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === data.length) {

      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  });


  useEffect(() => {
    checkCompletion();
  });

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(result));
  };

  return (
    <div className="App">
      <header>
        <h1 className="intro">Play Tranformation Concentration</h1>
        <p>
          Select two cards with same transformation effect applied.
        </p>
        <div className="intro" >
          <Link to="/">Learn more!</Link>
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
              logo={logo}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>

      </footer>
      <Dialog
        open={showModal}

        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
