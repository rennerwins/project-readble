import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
    <Link to="/" className="navbar-brand">
        Home
    </Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/react" className="nav-link">
              React
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/redux" className="nav-link">
              Redux
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/udacity" className="nav-link">
              Udacity
          </Link>
        </li>
      </ul>
    </div>

    <Link to="/create" className="btn btn-danger">
        New Post
    </Link>
  </nav>
);

export default Navbar;
