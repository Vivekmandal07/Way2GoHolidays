import { useState } from 'react';
import axios from 'axios';

const BookingModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    pax: '',
    child: '0',
    request: ''
  });

  const [childAges, setChildAges] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'child') {
      const numChildren = parseInt(value) || 0;
      setChildAges(new Array(numChildren).fill(''));
    }
  };

  const handleChildAgeChange = (index, value) => {
    const newAges = [...childAges];
    newAges[index] = value;
    setChildAges(newAges);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    let msg = `Booking Request\n`;
    msg += `Name: ${formData.name}\n`;
    msg += `Email: ${formData.email}\n`;
    msg += `Phone: ${formData.phone}\n`;
    msg += `Destination: ${formData.destination}\n`;
    msg += `Date of Travel: ${formData.date}\n`;
    msg += `No. of Pax: ${formData.pax}\n`;
    msg += `Number of Children: ${formData.child}\n`;
    childAges.forEach((age, index) => {
      msg += `Child ${index + 1} Age: ${age}\n`;
    });
    msg += `Special Request: ${formData.request}`;

    // Open WhatsApp with the message
    const whatsappMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/7303402841?text=${whatsappMsg}`, '_blank');

    // Optional: Send to backend
    try {
      await axios.post('http://localhost:5000/api/booking', {
        ...formData,
        childAges
      });
    } catch (error) {
      console.error('Error sending booking:', error);
    }

    onClose();
  };

  return (
    <div className="modal" id="bookingModal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form id="bookingForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            required
            value={formData.destination}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="number"
            name="pax"
            placeholder="No. of Pax"
            min="1"
            required
            value={formData.pax}
            onChange={handleChange}
          />
          <input
            type="number"
            name="child"
            placeholder="Number of Children"
            min="0"
            value={formData.child}
            onChange={handleChange}
          />
          {childAges.map((age, index) => (
            <input
              key={index}
              type="number"
              placeholder={`Child ${index + 1} Age`}
              min="0"
              max="18"
              value={age}
              onChange={(e) => handleChildAgeChange(index, e.target.value)}
            />
          ))}
          <textarea
            name="request"
            placeholder="Special Request"
            value={formData.request}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
