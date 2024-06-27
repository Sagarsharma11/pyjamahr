import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  content: string;
  image?: string | undefined;
  isPinned: boolean;
  title: string;
  backgroundColor: string;
}

interface CounterState {
  notes: Note[];
}

const initialState: CounterState = {
  notes: [],
};

export const counterSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },
      prepare: ({
        content,
        image,
        isPinned,
        title,
        backgroundColor,
      }: Note) => ({
        payload: {
          id: nanoid(),
          content,
          image,
          isPinned,
          title,
          backgroundColor,
        },
      }),
    },
    pinnedNote: (state, action: PayloadAction<string>) => {
      const note = state.notes.find((note) => note.id === action.payload);
      if (note) {
        note.isPinned = !note.isPinned;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateColor: (state, action: PayloadAction<{ id: string, color: string }>) => {
      const { id, color } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.backgroundColor = color;
      }
    },
    updateImage: (state, action: PayloadAction<{ id: string, image: string | undefined }>) => {
      const { id, image } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.image = image;
      }
    }
  },
});

export const { addNote, pinnedNote, deleteNote, updateColor, updateImage } = counterSlice.actions;
export default counterSlice.reducer;
