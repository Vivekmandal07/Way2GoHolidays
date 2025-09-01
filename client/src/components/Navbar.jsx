import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.svg" alt="Way2GoHolidays" />
        </Link>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/packages" className="navbar-link">Packages</Link></li>
            <li><Link to="/gallery" className="navbar-link">Gallery</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
          </ul>
        </nav>

        <button 
          className="booking-btn" 
          onClick={() => setIsModalOpen(true)}
        >
          Book Now
        </button>

        <button 
          className="nav-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ion-icon name={isMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </button>
      </div>

      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </header>
  );
};

export default Navbar;
