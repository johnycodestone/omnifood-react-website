import React from "react";
import "../Styles/Form.css";

const Form = () => {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-item name">
        <label htmlFor="name">Name</label>
        <input placeholder="Your Name" className="input-box" type="text" id="name" name="name" required />
      </div>

      <div className="form-item email">
        <label htmlFor="email">Email</label>
        <input placeholder="example@email.com" className="input-box" type="email" id="email" name="email" required />
      </div>

      <div className="form-item dropdown">
        <label htmlFor="dropdown">How did you find about us?</label>
        <select className="input-box" id="dropdown" name="dropdown" required>
          <option value="friend">Friend</option>
          <option value="website">Website</option>
          <option value="facebook" selected>
            Facebook
          </option>
          <option value="advertisement">Advertisement</option>
        </select>
      </div>

      <div className="form-item checkbox">
        <label>Newsletter</label>
        <div className="checkbox-group">
          <input className="input-box" type="checkbox" id="newsletter" name="newsletter" defaultchecked/>
          <label htmlFor="newsletter">Yes, please</label>
        </div>
      </div>

      <div className="form-item message">
        <label htmlFor="message">Drop us a line</label>
        <textarea placeholder="Your message" className="input-box" id="message" name="message" rows="4" required></textarea>
      </div>

      <div className="submit-button">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
