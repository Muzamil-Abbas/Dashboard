import React, { useState } from 'react';
import '../../styles/ContactManagement.css';

const ContactManagement = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    category: 'Personal',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-management-container">
      <header className="contact-management-header">
        <h2>Contact Management</h2>
        <p>Manage and configure your contact details here.</p>
      </header>
      <main className="contact-management-main">
        <section className="contact-list">
          <h3>Contact List</h3>
          <ul>
            <li>
              <strong>John Doe</strong> - johndoe@example.com
            </li>
            <li>
              <strong>Jane Smith</strong> - janesmith@example.com
            </li>
            <li>
              <strong>Robert Johnson</strong> - robertjohnson@example.com
            </li>
          </ul>
        </section>

        <section className="contact-us-form">
          <h3>Add New Contact</h3>
          <form onSubmit={handleSubmit} className="grid-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="notes">Notes:</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Enter additional notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Add Contact</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactManagement;
