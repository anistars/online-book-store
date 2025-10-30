import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
function BrowseBooks() {
    const {category} = useParams();
    const books=useSelector((state)=>state.books.list);
    const [searchTerm,setSearchTerm]=useState("");
    const categoryBooks=category?books.filter((book)=>book.category.toLowerCase()===category.toLowerCase()):books;
    const filteredBooks=categoryBooks.filter((book)=>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const categories=[...new Set(books.map((book)=>book.category))];
  return (
    <div className="container mt-5 pt-4">
        <h1 className="text-center mb-4 fw-bold text-primary">
            📚 Browse Books
        </h1>
        <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mb-4 text-center">
        <Link to="/browse" className="btn btn-outline-primary me-2 mb-2">
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/book/${cat}`}
            className={`btn ${
              category === cat ? "btn-primary" : "btn-outline-primary"
            } me-2 mb-2`}
          >
            {cat}
          </Link>
        ))}
      </div>
      <div className="row">
        {filteredBooks.length === 0 ? (
          <p className="text-center">No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card h-100 bg-dark text-light shadow-sm">
                <img
                  src={book.imageUrl}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Author: {book.author}</p>
                  <p className="card-text text-info">Category: {book.category}</p>
                  <Link
                    to={`/books/${book.id}`}
                    className="btn btn-outline-light mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default BrowseBooks