import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function BookDetails() {
    const { id } = useParams();
    const books = useSelector((state) => state.books.list);
    const book = books.find((b) => b.id === parseInt(id));
    if (!book) {
        return (
            <div className="container text-center mt-5">
                <h2>Book not found 😢</h2>
                <Link to="/" className="btn btn-outline-light mt-3">Back to Home</Link>
            </div>
        )
    }
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card bg-dark text-light p-4 shadow-lg" style={{ maxWidth: '500px' }}>
                <img
                    src={book.imageUrl}
                    className="card-img-top mb-4"
                    alt={book.title}
                    style={{ height: '400px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <div className="card-body">
                    <h5 className="card-title mb-3">{book.title}</h5>
                    <p className="text-secondary mb-2">Author: {book.author}</p>
                    <p className="card-text">Category: {book.category}</p>
                    <p className="card-text">{book.description}</p>
                    <div className="text-center mt-4">
                        <Link to="/" className="btn btn-outline-light">
                            🔙 Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;