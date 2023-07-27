import { configureStore } from "@reduxjs/toolkit";
import decksReducer from '../slice/deckSlice';

export const store = configureStore({
  reducer: {
    decks: decksReducer,
  },
});
