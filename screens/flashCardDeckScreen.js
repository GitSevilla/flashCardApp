import { useNavigation } from "@react-navigation/native";
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

const Decklist = ({ navigation }) => {
  const decks = useSelector((state) => state.decks);

  const renderDeck = ({ item }) => (
    <TouchableOpacity
      style={styles.deckCard}
      onPress={() => navigateToDeck(item.id)}
    >
      <Text style={styles.deckTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (decks.length === 0) {
    return <CreateDeck navigation={navigation} />; // Render CreateDeck component if decks array is empty
  } else {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <FlatList
          data={decks}
          renderItem={renderDeck}
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
  deckCard: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
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
});

export default Decklist;
