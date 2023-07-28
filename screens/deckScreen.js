import {
  KeyboardAvoidingView,
  Button,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import FlashCard from "./flashCardScreen";

const DeckScreen = ({ route, navigation }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const { deckId } = route.params;
  const deck = useSelector((state) =>
    state.decks.find((deck) => deckId === deck.id)
  );

  const cardsKeyArr = Object.keys(deck?.cards || []);
  const currentCardKey = cardsKeyArr[currentCardIndex];
  const currentCard = deck.cards[currentCardKey];

  const handleNext = () => {
    if (currentCardIndex < cardsKeyArr.length - 1) { // Check if it's the last card
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };
  
  // Function to handle 'Previous' button click
  const handlePrevious = () => {
    if (currentCardIndex > 0) { // Check if it's the first card
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {cardsKeyArr.length > 0 ? (
        <View>
        <FlashCard term={currentCard.term} definition={currentCard.definition} />
        <Button title="Previous" onPress={handlePrevious} />
        <Button title="Next" onPress={handleNext} />
      </View>
      ) : (
        <View>
          <Text>No Cards in this deck yet</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate("CreateFlashCard", { deckId: deckId })
          }
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: "#ff6347", // tomato color, you can change it as you wish
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: 2 },
    shadowRadius: 3,
    elevation: 4, // for Android shadow
  },
  addButtonText: {
    color: "#fff",
    fontSize: 30,
  },
  container: {
    flex: 1,
  },
});

export default DeckScreen;
