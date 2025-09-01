import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import './styles/enhanced-styles.css';
import './styles/interactions.css';

function App() {
  return (
    <Router>
      <div className="App" id="top">
        <Header />
        <Home />
        <Footer />
        <a href="#top" className="go-top" data-go-top>
          <span role="img" aria-label="go to top">⬆️</span>
        </a>
      </div>
    </Router>
  );
}

export default App
