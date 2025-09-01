import '../styles/Package.css';

const Package = () => {
  const packages = [
    {
      id: 1,
      title: "Enchanting Kerala Backwaters",
      image: "/assets/images/packege-1.jpg",
      description: "Experience the serene beauty of Kerala's backwaters with traditional houseboat stays, ayurvedic spa treatments, and cultural performances.",
      price: "Starting from ₹24,999",
      duration: "5 days"
    },
    {
      id: 2,
      title: "Mystical North India Journey",
      image: "/assets/images/packege-2.jpg",
      description: "Discover the magnificent Taj Mahal, explore royal palaces of Rajasthan, and experience the spiritual essence of Varanasi.",
      price: "Starting from ₹49,999",
      duration: "8 days"
    },
    {
      id: 3,
      title: "Himalayan Adventure Trek",
      image: "/assets/images/packege-3.jpg",
      description: "Trek through the breathtaking Himalayan trails, visit ancient monasteries, and experience local mountain culture.",
      price: "Starting from ₹34,999",
      duration: "7 days"
    },
    // Add more packages as needed
  ];

  return (
    <section className="packages" id="packages">
      <div className="container">
        <h2 className="section-title">Our Packages</h2>
        <div className="packages-grid">
          {packages.map(pkg => (
            <div key={pkg.id} className="package-card">
              <img src={pkg.image} alt={pkg.title} />
              <div className="package-content">
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <div className="package-info">
                  <span className="price">{pkg.price}</span>
                  <span className="duration">{pkg.duration}</span>
                </div>
                <button className="btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
