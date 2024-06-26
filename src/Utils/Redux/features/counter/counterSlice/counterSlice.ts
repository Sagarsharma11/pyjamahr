import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Note {
  id: string;
  content: string;
  image?: string | undefined;
  isPinned: boolean;
  title: string;
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
      prepare: ({content, image, isPinned, title}:Note) => ({
        payload: {
          id: nanoid(),
          content,
          image,
          isPinned,
          title
        },
      }),
    },
    pinnedNote: (state, action: PayloadAction<string>) => {
      const note = state.notes.find(note => note.id === action.payload);
      if (note) {
        note.isPinned = true;
      }
    }
  },
});

export const { addNote, pinnedNote } = counterSlice.actions;
export default counterSlice.reducer;
