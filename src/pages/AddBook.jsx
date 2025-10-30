import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    imageUrl: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (
      !newBook.title.trim() ||
      !newBook.author.trim() ||
      !newBook.category.trim() ||
      !newBook.description.trim() ||
      !newBook.imageUrl.trim()
    ) {
      alert('Please fill out all fields!');
      return;
    }

    // ✅ Add book to Redux
    dispatch(addBook(newBook));

    // ✅ Redirect to Browse Books page
    navigate('/browse');
  };

  return (
    <div className="container mt-5 pt-5 text-light">
      <h2 className="text-center mb-4 text-black-50">➕ Add a New Book</h2>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter book title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter author name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            value={newBook.category}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter category (e.g., Fiction, Sci-Fi)"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={newBook.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
            placeholder="Enter book description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={newBook.imageUrl}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
