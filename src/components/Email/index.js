import React, { useState } from 'react'

const Email = ({ title, price }) => {

  const [sent, setSent] = useState(false);
  
  onsubmit = (e) => {
    e.preventDefault();
    window.emailjs.sendForm('service_v77c6hx', 'template_pdlz1d6', e.target, 'user_xcmuXoEoRTExhCQQnDkOm')
    .then((result) => {
      setSent(true);
    }, (error) => {
      setSent(true);
      console.log(error.text);
    });
  }
  
  return (
    <form id="contact-form" className="contact-form" onSubmit={onsubmit}>
      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="price" value={price} />
      <div className="row">
        <div className="col-sm-12">
          <label className="form-label">Name</label>
        </div>
      </div>
      <div className="row padding-bottom">
        <div className="col-sm-12">
          <input className="form-control" type="text" name="user_name" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2">
          <label className="form-label">Email</label>
        </div>
      </div>
      <div className="row padding-bottom">
        <div className="col-sm-12">
          <input type="email" className="form-control" name="user_email" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <label className="form-label">Message</label>
        </div>
      </div>
      <div className="row padding-bottom">
        <div className="col-md-12 p-4">
          <textarea className="form-control" name="message"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <input className="btn btn-primary" type="submit" value="Send" />
        </div>
      </div>
    </form>
  )
}

export default Email;