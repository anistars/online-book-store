import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
function NotFound() {
    const location = useLocation();
    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-light ">
            <h1 className="display-3 fw-bold mb-3 text-danger">404 - Page Not Found</h1>
            <p className='text-dark'>The page "{location.pathname}" does not exist.</p>
            <Link to="/" className="btn btn-primary mt-3">
                Go to Home
            </Link>
        </div>

    );
}

export default NotFound;