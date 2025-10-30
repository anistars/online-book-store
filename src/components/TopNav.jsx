import { NavLink } from 'react-router-dom';

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100 shadow-sm">
      <div className="container-fluid px-4">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          <i className="bi bi-book-half me-2 text-primary"></i>
          My Library
        </NavLink>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/browse" className="nav-link">
                Browse Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link">
                Add Book
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
