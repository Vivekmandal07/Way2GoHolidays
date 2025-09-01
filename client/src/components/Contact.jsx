const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions? We'd love to hear from you.</p>
            <div className="contact-details">
              <div className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <p>+91 7303402841</p>
              </div>
              <div className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <p>info@way2goholidays.com</p>
              </div>
              <div className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <p>123 Travel Street, Tourism City</p>
              </div>
            </div>
          </div>
          
          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
