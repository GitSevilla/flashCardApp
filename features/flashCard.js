import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const FrontCard = ({ term, flipCard }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={flipCard}>
      <Text style={styles.text}>Testing</Text>
    </TouchableOpacity>
  );
};

export const BackCard = ({ definition, flipCard }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={flipCard}>
      <Text style={styles.text}>Test definition</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 150,
    padding: 100,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
