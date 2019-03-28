import React from "react";
import "../scss/contact.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import Form from "../Components/Form";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact">
        <div className="contactme">
          <p>Feel free to <span className="contact-me">contact me</span>!<br />I'm <span className="contact-avaible">available</span> for any contract/project.</p>
        </div>
      
        <Form />
        
          <footer>
            <div className="citation" data-aos="flip-up"><p>"As far as the future is concerned, it is not a question of predicting it, but of making it possible."</p></div>
            <div className="footer-info">
              <Link
                className="gotop"
                activeClass="active"
                to="hello"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
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
    );
  }
}

export default Contact;
