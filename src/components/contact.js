import React from 'react';
import '../scripts/fancyInputs.js';
import '../scripts/mailer.js'

const Contact = () => {
  return (
    <div id="contact"  className="section">
      <h1>Contact</h1>
      <form action="/src/contact.php" method="post">
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="text" name="subject" id="subject" required/>
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="text" name="name" id="name" required/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="text" name="email" id="email" required/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="tel" name="phone" id="phone" />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <textarea className="z-input" name="message" id="message" required></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" value="send" className="btn btn-default">Submit</button>
      </form>
    </div>
  )
};

export default Contact;
