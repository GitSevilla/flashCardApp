import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";
import CreateDeck from "../features/createDeck";
import DeckItem from "../features/deckItem";

const Decklist = ({ navigation }) => {
  const decks = useSelector((state) => state.decks);

  if (decks.length === 0) {
    return <CreateDeck navigation={navigation} />;
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <DeckItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("CreateDeck")}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
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
});

export default Decklist;
