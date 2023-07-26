import { useDispatch } from "react-redux";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const CreateFlashCard = ({ route }) => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const { deckId } = route.params;

  return (
    <>
      <View style={styles.container}>
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
      <Button title="Submit" />
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
