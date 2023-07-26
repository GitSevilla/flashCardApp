import { createSlice } from "@reduxjs/toolkit";

const flashCardSlice = createSlice({
  name: "flashCards",
  initialState: {},
  reducers: {
    addFlashcard: (state, action) => {
      const { deckId, id, term, definition } = action.payload;

      state[deckId].cards[id] = { id, term, definition };
    },
  },
});

export const { addFlashcard } = flashCardSlice.actions;

export default flashCardSlice.reducer;
