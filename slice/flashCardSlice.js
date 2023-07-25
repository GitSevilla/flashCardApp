import { createSlice } from "@reduxjs/toolkit";

const flashCardSlice = createSlice({
    name: 'flashCards',
    initialState: {},
    reducers: {
        addFlashcard: (state, action) => {
            const { id, term, definition } = action.payload;
            state[id] = { id, term, definition };
        },
        updateFlashcard: (state, action) => {
            const { id, term, definition } = action.payload;
            if (state[id]) {
                if (term) {
                    state[id].term = term;
                }
                if (definition) {
                    state[id].definition = definition;
                }
            }
        }
    }
})

export const { addFlashcard, updateFlashcard } = flashCardSlice.actions;

export default flashCardSlice.reducer;
