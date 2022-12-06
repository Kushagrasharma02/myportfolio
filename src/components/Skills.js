import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Sgif from "./images/skill gif.gif";

const Skills = () => {
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
        <section className="skills">
          <div className="skill-container">
            <div className="skill-left">
              <div className="skill-details">
                <div className="skill-items">
                  <span>Html</span>
                  <footer>
                    <div data-width="95%" style={{ width: "95%" }}></div>
                  </footer>
                </div>

                <div className="skill-items">
                  <span>Css</span>
                  <footer>
                    <div
                      data-width="75%"
                      style={{ width: "75%", background: "rgb(255, 34, 83)" }}
                    ></div>
                  </footer>
                </div>

                <div className="skill-items">
                  <span>JavaScript</span>
                  <footer>
                    <div
                      data-width="70%"
                      style={{ width: "70%", background: "#FF9933" }}
                    ></div>
                  </footer>
                </div>

                <div className="skill-items">
                  <span>React Js</span>
                  <footer>
                    <div
                      data-width="60%"
                      style={{ width: "60%", background: "#b8e7f4" }}
                    ></div>
                  </footer>
                </div>
              </div>
              <div className="skill-txt">
                <p>
                    Ever since the beginning of my journey as a Frontend
                    developer, in last 1 year i have learn many things related to
                    this field and build some project with best practices that are
                    easy to use. I like designing the webpages the most that shows
                    how creative and open minded i am.
                </p>
                <p>
                  My expertise in front-end development are HTML, CSS and JS.
                  Everytime i make a website i think alot on the design and come
                  with the best innovative ideas that's make my website
                  attractive and creative.
                </p>
              </div>
            </div>
            <div className="skill-right">
              <div className="text">
                <p>What i can do</p>
                <h1>Skills & Proficiencies</h1>
              </div>
              <div className="skill-gif">
                <img src={Sgif} alt="animated gif" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Skills;
