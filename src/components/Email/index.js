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
    <div>
      <form id="contact-form" onSubmit={onsubmit}>
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="price" value={price} />
        <div className="row">
          <div className="col-sm-2">
            <label className="form-label">Name</label>
          </div>
          <div className="col-sm-8">
            <input className="form-control" type="text" name="user_name" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <label className="form-label">Email</label>
          </div>
          <div className="col-sm-10">
            <input type="email" className="form-control" name="user_email" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <label className="form-label">Message</label>
          </div>
          <div className="col-md-10 p-4">
            <textarea className="form-control" name="message"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-md-10">
            <input className="btn btn-primary" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Email;