const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/booking', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      destination,
      date,
      pax,
      child,
      childAges,
      request
    } = req.body;

    // Here you can add your booking logic
    // For example, sending an email notification

    res.status(200).json({ message: 'Booking request received successfully' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
