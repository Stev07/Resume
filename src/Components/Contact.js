import React from "react";
import "../scss/contact.scss";
import { Link, animateScroll as scroll } from "react-scroll";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="form">Formulaire</div>
        <div className="more">
          more
          <footer>
            <p>logos</p>
            <div className="footer-info">
              <Link
                className="gotop"
                activeClass="active"
                to="hello"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <i className="fas fa-arrow-alt-circle-up" />
              </Link>
              <div className="social">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/steve-dossin/"
                >
                  <i className="fab fa-linkedin-in social-icon" />
                </a>
                <a target="_blank" href="https://github.com/Stev07">
                  <i className="fab fa-github social-icon" />
                </a>
                <a target="_blank" href="https://www.npmjs.com/~stevoxxx">
                  <i className="fab fa-npm social-icon" />
                </a>
              </div>
              <p className="made">
                Made with <i className="fas fa-heart" /> by{" "}
                <strong>Steve D.</strong>
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Contact;
