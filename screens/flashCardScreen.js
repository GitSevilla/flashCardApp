import { useState } from "react";
import { FrontCard, BackCard } from "../features/flashCard";

const FlashCard = ({ term, definition }) => {
    const [isFront, setIsFront] = useState(true);
  
    const flipCard = () => {
      setIsFront(!isFront);
    };
  
    return isFront ? (
      <FrontCard term={term} flipCard={flipCard} />
    ) : (
      <BackCard definition={definition} flipCard={flipCard} />
    );
  };

export default FlashCard;