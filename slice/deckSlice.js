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
        cards: [],
      });
    },
  },
});

export const { createDeck } = decksSlice.actions;
export default decksSlice.reducer;
