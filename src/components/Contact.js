import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Cimg from "./images/contact.gif";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Navbar />
        <section className="contact">
          <div className="contact-container">
            <div className="contact-form">
              <header>
                <p>Get in Touch</p>
                <h1>Contact me</h1>
                <p>
                  Ambitious to work with you, if you have any question don't
                  hesitate to use the form. Let's create something together.
                </p>
              </header>
              <form action="action.php">
                <ul>
                  <li className="half form-group">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                    />
                  </li>
                  <li className="half form-group">
                    <label htmlFor="email"></label>
                    <input
                      type="email"
                      name="name"
                      id="email"
                      placeholder="Email"
                    />
                  </li>
                  <li className="form-group">
                    <label htmlFor="subject"></label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </li>
                  <li className="form-group">
                    <label htmlFor="message"></label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      cols="15"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </li>
                  <li className="form-group">
                    <input className="submit-btn" type="hidden" />
                    <div className="toggle-btn">
                      <a className="btn btn-dark contact-btn" href="/about">
                        <i></i>
                        <span>Send message</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </form>
            </div>

            <div className="contact-right">
              <img src={Cimg} alt="contact img" />
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Contact;
