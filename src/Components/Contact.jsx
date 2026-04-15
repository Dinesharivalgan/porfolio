import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>
         
          <p>Email: <a  href="mailto:dinesharivalagan522@gmail.com" className="text-blue-400">dinesharivalagan522@gmail.com</a></p>
          <p>Phone: <a href="tel:9360686485" className="text-blue-400">+91 9360686485</a></p>
          <p>GitHub: <a href="https://github.com/Dinesharivalgan" target="_blank" rel="noreferrer" className="text-blue-400">github.com/yourusername</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/dinesh-arivalagan-7263513a6" target="_blank" rel="noreferrer" className="text-blue-400">linkedin.com/in/yourprofile</a></p>
      
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;