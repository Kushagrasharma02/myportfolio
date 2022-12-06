import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Himg from "./images/home image.jpg";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <section className="Home">
        <div className="top">
          <p>Kushagra sharma</p>
          <span className="line"></span>
        </div>

        <div className="center">
          <div className="toggle-btn">
            <h1>Frontend Developer</h1>
            <a className="btn btn-dark" href="/about">
              <i></i>
              <span>Let's Go !</span>
            </a>
          </div>
          <div className="center-img">
            <img src={Himg} alt="Coding" />
          </div>
        </div>

        <div className="bottom">
          <h1>Portfolio</h1>
          <div className="btm-txt">
            <span className="line"></span>
            <p>Designer / Developer</p>
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
