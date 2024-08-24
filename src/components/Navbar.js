import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="nav-link">
            <img src="cupcake.png" alt="Profile" />
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/light" className="nav-link">Light a Candle</Link>
          <Link to="/memories" className="nav-link">Memories</Link>
          <Link to="/notes" className="nav-link">Notes</Link>
          <Link to="/memes" className="nav-link">Memes</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;