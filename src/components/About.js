import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import Aimg from "./images/Gif.gif";

const About = () => {
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
        <section className="About">
          <div className="abt-container">
            <div className="abt-left">
              <p>About Me</p>
              <div className="abt-img">
                <img src={Aimg} alt="my logo" />
              </div>
            </div>

            <div className="abt-right">
              <div className="abt-right-txt">
                <h1 className="mb-4">I'm a Frontend developer.</h1>
                <p> My name is Kushagra sharma, I'm a Front end developer from
                  Madhya Pradesh, India. I am outgoing, dedicated, and
                  open-minded.</p>
                <p>Talking about my hobbies, i love to travel alot and cricket is
                  my favourite sports and sometimes i read books to fresh my
                  mind. Moving on to my personality, I'm honest, creative,
                  positive, courageous and dependable person.</p>
                <p> I have started my web development carrier last year and
                  currently, i am looking for new career opportunities in this
                  field as a fresher. Intrested in entire frontend development
                  and interacted with positive people.</p>
              </div>
              <div className="icons">
                <a
                  href="https://github.com/Kushagrasharma02"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kushagra-sharma-828605252/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#0097e6" }}
                  ></i>
                </a>
                <a
                  href="https://github.com/Kushagrasharma02"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#e84393" }}
                  ></i>
                </a>
                <a
                  href="https://github.com/Kushagrasharma02"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#0097e6" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default About;
