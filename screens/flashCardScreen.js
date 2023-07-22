import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { FrontCard, BackCard } from "../features/flashCard";

export const FlashCard = ({ term, definition }) => {
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