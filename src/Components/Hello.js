import React from "react";
import "../scss/hello.scss";
import { Link, animateScroll as scroll } from "react-scroll";

class Hello extends React.Component {

  render() {

    window.onscroll = () => {
      document.querySelector(".parallax-bg").style.opacity = 1 - +window.pageYOffset / 550 + "";
      
      for (let i = 0 ; i < document.getElementsByClassName('hello-textExtend').length ; i ++){
        document.getElementsByClassName('hello-textExtend')[i].style.letterSpacing = window.pageYOffset /100 + 'px';
      }
    };

    return (
      <div className="content">
        <div className="infoBox">
          <div className="hello-name">
            <h1>
              <span className="developer hello-textExtend">I am</span> <span className="hello-textExtend">Steve Dossin</span>
            </h1>
          </div>
          <div className="hello-dev">
            <h2>
              <span className="hello-textExtend">Junior Web</span> <span className="developer hello-textExtend">Developer</span>
            </h2>
          </div>
          <div>
            <p>
              Fullstack Junior Web Developer is looking for an opportunity to extend my web development and multimedia editing skills and knowledge.
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
            duration={1000}
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
