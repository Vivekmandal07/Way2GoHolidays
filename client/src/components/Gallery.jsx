import '../styles/Gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      src: '/assets/images/gallery-1.jpg',
      title: 'Kerala Backwaters'
    },
    {
      src: '/assets/images/gallery-2.jpg',
      title: 'Taj Mahal at Sunrise'
    },
    {
      src: '/assets/images/gallery-3.jpg',
      title: 'Himalayan Mountains'
    },
    {
      src: '/assets/images/gallery-4.jpg',
      title: 'Rajasthan Desert Safari'
    },
    {
      src: '/assets/images/gallery-5.jpg',
      title: 'Goa Beach Sunset'
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Travel Moments</h2>
        <p className="section-description">Explore the beautiful destinations through our travelers' eyes</p>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
