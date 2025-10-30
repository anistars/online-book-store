import { use } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "../index.css"
function Home() {
  const books = useSelector((state) => state.books.list);

  // Extract unique categories
  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="container mt-5 pt-4">
      <h1 className="text-center mb-5 text-primary fw-bold">
        🏠 Welcome to My Book Library
      </h1>

      {categories.map((category) => (
        <div key={category} className="mb-5">
          {/* Category Heading */}
          <h3 className="mb-3 text-light bg-dark p-3 rounded">
            {category}
          </h3>

          {/* Books under that category */}
          <div className="row">
            {books
              .filter((book) => book.category === category)
              .map((book) => (
                <div key={book.id} className="col-md-4 mb-4">
                  <Link
                    to={`/books/${book.id}`}
                    className="text-decoration-none text-light"
                  >
                    <div className="card bg-dark text-light h-100 shadow-sm border border-secondary">
                      <img
                        src={book.imageUrl}
                        className="card-img-top"
                        alt={book.title}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{book.title}</h5>
                        <p className="card-text mb-1">Author: {book.author}</p>
                        <p className="card-text text-info">
                          Category: {book.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home