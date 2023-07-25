import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const decksSlice = createSlice({
  name: "decks",
  initialState: [],
  reducers: {
    createDeck: (state, action) => {
      state.push({
        id: uuidv4(),
        name: action.payload,
        cards: [],
      });
    },
  },
});

export const { createDeck } = decksSlice.actions;
export default decksSlice.reducer;
