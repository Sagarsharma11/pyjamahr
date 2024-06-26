import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: string;
  content: string;
  image?: string | undefined;
  isPinned: boolean
}

interface CounterState {
  notes: Note[];
}

const initialState: CounterState = {
  notes: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },
      prepare: ({content, image, isPinned}:Note) => ({
        payload: {
          id: nanoid(),
          content,
          image,
          isPinned
        },
      }),
    },
  },
});

export const { addNote } = counterSlice.actions;
export default counterSlice.reducer;
