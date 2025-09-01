import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/assets/images/logo.svg" alt="Way2GoHolidays" className="footer-logo" />
              <p className="footer-text">
                Making your travel dreams come true.
              </p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+917303402841">+91 7303402841</a>
              </p>
              <p>
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info@way2goholidays.com">info@way2goholidays.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Way2GoHolidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
