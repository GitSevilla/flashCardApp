import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";
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
    if (currentCardIndex < cardsKeyArr.length - 1) {
      // Check if it's the last card
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  // Function to handle 'Previous' button click
  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      // Check if it's the first card
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
          <FlashCard
            term={currentCard.term}
            definition={currentCard.definition}
          />
          <View style={styles.buttonsContainer}>
            <Button
              icon={
                <Icon
                  name="chevron-left"
                  type="font-awesome"
                  size={22}
                  color="white"
                />
              }
              title=""
              onPress={handlePrevious}
              buttonStyle={styles.button}
            />
            <Button
              icon={
                <Icon
                  name="chevron-right"
                  type="font-awesome"
                  size={22}
                  color="white"
                />
              }
              title=""
              onPress={handleNext}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text>No Cards in this deck yet</Text>
        </View>
      )}
      <View style={styles.addButtonContainer}>
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
  addButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: "#ff6347",
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  button: {
    backgroundColor: "blue",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DeckScreen;
