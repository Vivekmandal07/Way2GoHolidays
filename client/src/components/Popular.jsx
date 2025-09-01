import '../styles/Popular.css';

const Popular = () => {
  const destinations = [
    {
      id: 1,
      image: '/assets/images/popular-1.jpg',
      place: 'Thailand',
      title: 'Bangkok & Phuket',
      description: 'Discover the vibrant street life, stunning beaches, and rich culture of Thailand. Perfect for adventure and relaxation.'
    },
    {
      id: 2,
      image: '/assets/images/popular-2.jpg',
      place: 'Dubai',
      title: 'Burj Khalifa & Desert Safari',
      description: 'Experience luxury shopping, iconic skyscrapers, and thrilling desert adventures in dazzling Dubai.'
    },
    {
      id: 3,
      image: '/assets/images/popular-3.jpg',
      place: 'Bali',
      title: 'Ubud & Seminyak',
      description: 'Enjoy Bali\'s lush landscapes, tranquil beaches, and vibrant arts scene. A paradise for every traveler.'
    },
    {
      id: 4,
      image: '/assets/images/gallery-4.jpg',
      place: 'Vietnam',
      title: 'Hanoi & Ho Chi Minh',
      description: 'Explore Vietnam\'s ancient cities, breathtaking bays, and delicious cuisine. A journey through history and nature.'
    },
    {
      id: 5,
      image: '/assets/images/gallery-5.jpg',
      place: 'Singapore',
      title: 'Marina Bay & Sentosa',
      description: 'Discover Singapore\'s futuristic skyline, world-class attractions, and multicultural charm. Perfect for families and explorers.'
    }
  ];

  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destination</h2>
        <p className="section-text">
          Explore our carefully curated selection of the most sought-after destinations worldwide.
          From pristine beaches to bustling cities, we have something for every traveler.
        </p>

        <ul className="popular-list">
          {destinations.map((dest) => (
            <li key={dest.id}>
              <div className="popular-card">
                <figure className="card-img">
                  <img src={dest.image} alt={dest.place} loading="lazy" />
                </figure>
                <div className="card-content">
                  <div className="card-rating">
                    {[...Array(5)].map((_, i) => (
                      <ion-icon key={i} name="star"></ion-icon>
                    ))}
                  </div>
                  <p className="card-subtitle">
                    <a href="#">{dest.place}</a>
                  </p>
                  <h3 className="h3 card-title">
                    <a href="#">{dest.title}</a>
                  </h3>
                  <p className="card-text">{dest.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary">More destinations</button>
      </div>
    </section>
  );
};

export default Popular;
