import React, {Component} from 'react';
import '../scripts/fancyInputs.js';
import '../scripts/mailer.js'

const Contact = () => {
  return (
    <div id="contact"  className="section">
      <h1>Contact</h1>
      <form action="mailer.php" method="post">
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="text" name="subject" required/>
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="text" name="name" required/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="text" name="_replyto" required/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <input className="z-input" type="tel" name="phone" />
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="form-group fade-in fade-in-center">
          <textarea className="z-input" type="message"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" value="send" className="btn btn-default">Submit</button>
      </form>
    </div>
  )
};

export default Contact;