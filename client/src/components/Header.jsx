import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTimes, FaBars, FaPhone, FaSearch } from 'react-icons/fa';
import '../styles/enhanced-header.css';

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
    document.body.style.overflow = isNavbarActive ? 'auto' : 'hidden';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} data-header>
      <div className={`overlay ${isNavbarActive ? 'active' : ''}`} onClick={toggleNavbar}></div>

      <div className="header-top">
        <div className="container">
          <a href="tel:+917303402841" className="helpline-box">
            <div className="icon-box">
              <FaPhone />
            </div>
            <div className="wrapper">
              <p className="helpline-title">For Further Inquires :</p>
              <p className="helpline-number">+91 7303402841</p>
            </div>
          </a>

          <Link to="/" className="logo">
            <h3 className="h3 hero-title">Way2GoHolidays</h3>
          </Link>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <FaSearch />
            </button>

            <button 
              className="nav-open-btn" 
              aria-label="Open Menu" 
              data-nav-open-btn
              onClick={toggleNavbar}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          {/* Social Links for larger screens */}
          <ul className="social-list">
            <li>
              <a 
                href="https://wa.me/7303402841" 
                className="social-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/way2goholidays" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/share/19trXGBbaS" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>

          {/* Navigation */}
          <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
            <div className="navbar-top">
              <Link to="/" className="logo" onClick={() => setIsNavbarActive(false)}>
                <h3 className="h3">Way2GoHolidays</h3>
              </Link>
              <button 
                className="nav-close-btn" 
                aria-label="Close Menu"
                onClick={toggleNavbar}
              >
                <FaTimes />
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" onClick={toggleNavbar}>
                  Home
                </a>
              </li>
              <li>
                <a href="#destination" className="navbar-link" onClick={toggleNavbar}>
                  Destinations
                </a>
              </li>
              <li>
                <a href="#package" className="navbar-link" onClick={toggleNavbar}>
                  Packages
                </a>
              </li>
              <li>
                <a href="#gallery" className="navbar-link" onClick={toggleNavbar}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link" onClick={toggleNavbar}>
                  Contact
                </a>
              </li>
            </ul>

            {/* Social Links for mobile menu */}
            <div className="navbar-social">
              <ul className="social-list">
                <li>
                  <a 
                    href="https://wa.me/7303402841" 
                    className="social-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/way2goholidays" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/share/19trXGBbaS" 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Overlay */}
          {isNavbarActive && (
            <div className="overlay" onClick={toggleNavbar}></div>
          )}

          {/* Book Now Button */}
          <button 
            className="btn btn-primary"
            onClick={() => {
              setIsNavbarActive(false);
              // Add your booking modal logic here
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
