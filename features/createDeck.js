import { useDispatch } from "react-redux";
import { createDeck } from "../slice/deckSlice";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const CreateDeck = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createDeck(title));
    setTitle("");
    navigation.navigate("DeckList");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Deck Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Create Deck" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default CreateDeck;
