import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { addFlashcard } from "../slice/deckSlice";
import { baseUrl, OPENAIKEY } from "./openai";
import uuid from "react-native-uuid";
import Toast from "react-native-toast-message";

// Create OpenAI instance
const openAIAPI = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${OPENAIKEY}`,
    "Content-Type": "application/json",
  },
});

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

  const defineTerm = async (term) => {
    try {
      const response = await openAIAPI.post("", {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `You are a flashcard generator. You will be given a term that goes on the front of the card, and your task is to fill the back of the card. You can be given words, questions, statements that require an answer. If given a word, you will define it and structure it like this, word (word class): definition. If given a question, you will answer it. If given a statement, you will answer it. For the statement, think of it like trivia. An example would be "The biggest planet in our solar system." and you would generate the answer. The term is ${term}.`,
          },
        ],
        temperature: 0.3,
      });
      setDefinition(response.data.choices[0].message.content.trim());
    } catch (error) {
      console.error(error);
    }
  };

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
          onSubmitEditing={() => defineTerm(term)}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.inputDefinition}
          multiline
          numberOfLines={6}
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
  inputDefinition: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default CreateFlashCard;
