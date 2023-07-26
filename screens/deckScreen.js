import { KeyboardAvoidingView, Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const DeckScreen = ({ route, navigation }) => {
  const { deckId } = route.params;
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text>Test {deckId}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("CreateFlashCard", {deckId: deckId})}
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
  }
});

export default DeckScreen;
