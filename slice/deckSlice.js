import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const decksSlice = createSlice({
  name: "decks",
  initialState: [],
  reducers: {
    createDeck: (state, action) => {
      state.push({
        id: uuid.v4(),
        title: action.payload,
        cards: {},
      });
    },
    addFlashcard: (state, action) => {
      const { deckId, id, term, definition } = action.payload;

      const deck = state.find((deck) => deckId === deck.id);
      if (deck) {
        deck.cards[id] = { id, term, definition };
      }
    },
  },
});

export const { createDeck, addFlashcard } = decksSlice.actions;
export default decksSlice.reducer;
