import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./flashCardDeckScreen";
import FlashCard from "./flashCardScreen";
import CreateDeck from "../features/createDeck";

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
        options={{ title: "Decks" }}
      />
      <Stack.Screen
        name="CreateDeck"
        component={CreateDeck}
        options={{ title: "Create Deck" }}
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
