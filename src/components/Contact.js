import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Cimg from "./images/contact.gif";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zkn72sk",
        "template_9sucd2j",
        form.current,
        "HTwyGBpKm-_GyFxYb"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const togglebutton = () => {
    alert('your message has been sent')
  }

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

              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half form-group">
                    <input type="text" name="user_name" placeholder="Full Name" />
                  </li>
                  <li className="half form-group">
                    <input type="email" name="user_email" placeholder="Email" />
                  </li>
                  <li className="form-group">
                    <input
                      type="text"
                      name="user_subject"
                      placeholder="Subject"
                    />
                  </li>
                  <li>
                    <textarea name="message" placeholder="Message" />
                    </li>
                    <li>
                    <div className="toggle-btn">
                      <a className="btn btn-dark contact-btn" href="/">
                        <i></i>
                    <input type="submit" value="Send Message" onClick={togglebutton} />
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
