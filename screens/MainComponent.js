import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./flashCardDeckScreen";
import FlashCard from "./flashCardScreen";
import CreateDeck from "../features/createDeck";
import DeckScreen from "./deckScreen";
import CreateFlashCard from "../features/createFlashCard";

// Create Drawer Navigator
const Drawer = createDrawerNavigator();

// Create Stack Navigator
const Stack = createStackNavigator();

const DeckListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DeckList">
      <Stack.Screen
        name="DeckList"
        component={DeckList}
        options={{ title: "Deck List" }}
      />
      <Stack.Screen
        name="CreateDeck"
        component={CreateDeck}
        options={{ title: "Create Deck" }}
      />
      <Stack.Screen
        name="DeckScreen"
        component={DeckScreen}
        options={{ title: "Deck" }}
      />
      <Stack.Screen
        name="CreateFlashCard"
        component={CreateFlashCard}
        options={{ title: "Create Card" }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="DeckListNavigator">
        <Drawer.Screen
          name="DeckList"
          component={DeckListNavigator}
          options={{ title: "Decks" }}
        />
        <Drawer.Screen
          name="FlashCard"
          component={FlashCard}
          options={{ title: "Flashcard" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
