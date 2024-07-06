import React, { useState } from 'react';
import './InquireForm.css';  

function Journal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    itemsOfInterest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="inquire-form">
      <h2>INQUIRE</h2>
      <p>All of our products are made to order and can be customized. Please give us the following information:</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="itemsOfInterest">ITEM(S) OF INTEREST</label>
          <textarea 
            id="itemsOfInterest" 
            name="itemsOfInterest" 
            value={formData.itemsOfInterest} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit">SUBMIT</button>
      </form>

      <div className="contact-info">
        <h3>CONTACT</h3>
        <p>+1 213 522 4798</p>
        <p>3469 Casitas Ave. Los Angeles CA, 90039</p>
      </div>
    </div>
  );
}

export default Journal;