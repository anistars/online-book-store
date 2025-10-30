import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: [
        { id: 1, 
        title: "1984", 
        author: "George Orwell", 
        category: "Dystopian Fiction",
        imageUrl: "https://m.media-amazon.com/images/I/51WIKlio9qL.jpg",
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism."
        },
        {
        id: 2,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        category: 'Software Engineering',
        imageUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
        description: 'A Handbook of Agile Software Craftsmanship',
      },
    ],
  },
  reducers: {
    addBook(state, action) {
      state.books.push({
        id: Date.now(),
        ...action.payload,
      });
    },
  },
}); 

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;