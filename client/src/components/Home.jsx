import React from 'react';
import Hero from './Hero';
import TourSearch from './TourSearch';
import Popular from './Popular';
import Package from './Package';
import Gallery from './Gallery';

const Home = () => {
  return (
    <main>
      <article>
        <Hero />
        <TourSearch />
        <Popular />
        <Package />
        <Gallery />
        
        {/* CTA Section */}
        <section className="cta" id="contact">
          <div className="container">
            <div className="cta-content">
              <p className="section-subtitle">Call To Action</p>
              <h2 className="h2 section-title">Ready For Unforgettable Travel with Way2GoHolidays. Remember Us!</h2>
              <p className="section-text">
                Start planning your dream vacation today. Let us help you create memories that last a lifetime.
              </p>
            </div>
            <button className="btn btn-secondary">Contact Us!</button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
