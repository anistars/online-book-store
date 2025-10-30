import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: [
      { id: 1,
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        imageUrl: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF894,1000_QL80_.jpg",
        description:
        "A timeless novel exploring racial injustice and childhood innocence through the eyes of Scout Finch in 1930s Alabama.",
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      imageUrl: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
      description:
        "A tragic story of love and ambition, following Jay Gatsby’s pursuit of the American dream in the Roaring Twenties.",
    },

    // 📘 Non-Fiction
    {
      id: 3,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "Non-Fiction",
      imageUrl: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg",
      description:
        "An exploration of the history of humankind, from ancient ancestors to the modern age, blending science and history.",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      category: "Non-Fiction",
      imageUrl: "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg",
      description:
        "A memoir about a young woman who grows up in a strict and isolated family in rural Idaho and eventually earns a PhD from Cambridge University.",
    },

    // 🚀 Sci-Fi
    {
      id: 5,
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/3/TX/KN/VL/148839554/dune-book.jpg",
      description:
        "A sweeping epic set on the desert planet Arrakis, where noble families fight for control of the universe’s most valuable resource — spice.",
    },
    {
      id: 6,
      title: "The Martian",
      author: "Andy Weir",
      category: "Sci-Fi",
      imageUrl: "https://m.media-amazon.com/images/I/71Tp86ptAtL._AC_UF1000,1000_QL80_.jpg",
      description:
        "An astronaut stranded on Mars must use ingenuity and determination to survive alone on the Red Planet.",
    },

    // 🔮 Fantasy
    {
      id: 7,
      title: "Harry Potter and the Sorcerer’s Stone",
      author: "J.K. Rowling",
      category: "Fantasy",
      imageUrl: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
      description:
        "The first book in the beloved Harry Potter series introduces a boy who discovers he’s a wizard destined for greatness.",
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      imageUrl: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
      description:
        "Bilbo Baggins is swept into an epic adventure to help a group of dwarves reclaim their mountain home from the dragon Smaug.",
    },

    // 🧠 Mystery / Thriller
    {
      id: 9,
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Mystery",
      imageUrl: "https://m.media-amazon.com/images/I/71xBLRBYOiL._AC_UF894,1000_QL80_.jpg",
      description:
        "A gripping psychological thriller about a husband suspected of his wife’s disappearance, full of twists and deceit.",
    },
    {
      id: 10,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Mystery",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
      description:
        "A symbologist uncovers a secret religious conspiracy that spans centuries, blending art, history, and mystery.",
    },
    ],
  },
  reducers: {
    addBook(state, action) {
      state.list.unshift({
        id: Date.now(),
        ...action.payload,
      });
    },
  },
}); 

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;