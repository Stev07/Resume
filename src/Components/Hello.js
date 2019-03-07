import React from "react";
import "../scss/hello.scss";
import { Link, animateScroll as scroll } from "react-scroll";

class Hello extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="infoBox">
          <div>
            <h1>
              <span className="developer">I am</span> Steve Dossin
            </h1>
          </div>
          <div className="">
            <h2>
              Junior Web <span className="developer">Developer</span>
            </h2>
          </div>
          <div>
            <p>
              I like dabbling in various parts of frontend development and like
              to learn about new technologies, write technical articles or
              simply play games in my free time.
            </p>
          </div>
          <div className="separate" />
          <div className="social">
            <a target="_blank" href="https://www.linkedin.com/in/steve-dossin/">
              <i className="fab fa-linkedin-in social-icon" />
            </a>
            <a target="_blank" href="https://github.com/Stev07">
              <i className="fab fa-github social-icon" />
            </a>
            <a target="_blank" href="https://www.npmjs.com/~stevoxxx">
              <i className="fab fa-npm social-icon" />
            </a>
          </div>
        </div>
        <div className="down">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            <a href="#about">
              <i className="fas fa-chevron-circle-down" />
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Hello;
