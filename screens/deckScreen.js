import { View, Button, Text } from "react-native";

const DeckScreen = ({ route }) => {
  const { deckId } = route.params;
  return (
    <View>
      <Text>Test {deckId}</Text>
    </View>
  );
};

export default DeckScreen;
