import React, { useRef } from "react";
import { View, Text, Alert, PanResponder, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { deleteDeck } from "../slice/deckSlice";
import * as Animatable from "react-native-animatable";

const DeckItem = ({ item, navigation }) => {
  const view = useRef();
  const dispatch = useDispatch();
  const isLeftSwipe = ({ dx }) => dx < -200;

  const handledeleteDeck = (deckId) => {
    Alert.alert(
      "Delete Deck",
      "Are you sure you want to delete this deck?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Okay",
          onPress: () => {
            dispatch(deleteDeck(deckId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      view.current
        .rubberBand(1000)
        .then((endState) =>
          console.log(endState.finished ? "finished" : "canceled")
        );
    },
    onPanResponderEnd: (e, gestureState) => {
      console.log("pan responder end", gestureState);
      if (Math.abs(gestureState.dx) < 50) {
        navigation.navigate("DeckScreen", {
          deckId: item.id,
          deckTitle: item.title,
        });
      } else if (isLeftSwipe(gestureState)) {
        handledeleteDeck(item.id);
      }
    },
  });

  return (
    <Animatable.View
      style={styles.deckCard}
      ref={view}
      {...panResponder.panHandlers}
    >
      <Text style={styles.deckTitle}>{item.title}</Text>
    </Animatable.View>
  );
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
});

export default DeckItem;
