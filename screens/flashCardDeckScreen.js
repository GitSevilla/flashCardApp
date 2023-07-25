import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Decklist = ({ navigateToDeck }) => {
  const decks = useSelector((state) => state.decks);
  const renderDeck = ({ item }) => (
    <TouchableOpacity style={styles.deckCard} onPress={() => navigateToDeck(item.id)}>
      <Text style={styles.deckTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={decks}
        renderItem={renderDeck}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};;

const styles = StyleSheet.create({
    deckCard: {
      backgroundColor: '#fff',
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
      fontWeight: 'bold'
    }
  });

export default Decklist;