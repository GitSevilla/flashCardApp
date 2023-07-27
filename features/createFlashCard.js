import { useDispatch, useSelector } from "react-redux";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { addFlashcard } from "../slice/deckSlice";
import uuid from "react-native-uuid";
import Toast from "react-native-toast-message";

const CreateFlashCard = ({ route }) => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const dispatch = useDispatch();
  // Used to find the correct deck
  const { deckId } = route.params;
  // Access the deck to insert card in on submit
  const deck = useSelector((state) =>
    state.decks.find((deck) => deckId === deck.id)
  );

  const handleSubmit = () => {
    const id = uuid.v4();
    dispatch(addFlashcard({ deckId, id, term, definition }));
    Toast.show({
      type: "success",
      position: "bottom",
      text1: "Success",
      text2: "Flashcard Added!",
    });
    setTerm("");
    setDefinition("");
  };

  return (
    <>
      <View style={styles.container}>
        <Text>{deck.title}</Text>
        <Text>{Object.keys(deck.cards).length}</Text>
        <TextInput
          style={styles.input}
          placeholder="Term"
          value={term}
          onChangeText={(text) => setTerm(text)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Definition"
          value={definition}
          onChangeText={(text) => setDefinition(text)}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default CreateFlashCard;
