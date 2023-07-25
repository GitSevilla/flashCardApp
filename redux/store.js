import { configureStore } from "@reduxjs/toolkit";
import decksReducer from '../slice/deckSlice';
import flashcardsReducer from '../slice/flashCardSlice';

export const store = configureStore({
  reducer: {
    decks: decksReducer,
    flashcards: flashcardsReducer
  },
});
