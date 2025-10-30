import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function CategoryBooks() {
    const { category } = useParams();
    const books = useSelector((state) => state.books.list);
    const categoryBooks = books.filter((book) => book.category.toLowerCase() === category.toLowerCase());
    return (
        <div className="container  mt-5">
            <h1 className="text-center mb-4 text-light bg-dark p-3 rounded">
                📚      Books in "{category}" Category
            </h1>
            {filteredBooks.length === 0 ? (
                <p className="text-center">No books found in this category.</p>
            ) : (
                <div className="row">
                    {categoryBooks.map((book) => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <div className="card bg-dark text-light h-100 shadow">
                                <img
                                    src={book.imageUrl}
                                    className="card-img-top"
                                    alt={book.title}
                                    style={{ height: '250px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">Author: {book.author}</p>
                                    <p className="card-text">Category: {book.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="text-center mt-4">
                <Link to="/" className="btn btn-outline-light">
                    🔙 Back to Home
                </Link>
            </div>
        </div>
    );
}

export default CategoryBooks;