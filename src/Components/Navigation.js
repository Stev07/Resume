import React from "react";
import "../scss/navigation.scss";
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Link
            activeClass="active"
            to="hello"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>
              <a a href="#" class="resizeOnScroll">
                HELLO
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li>
              <a href="#" class="resizeOnScroll">ABOUT</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <li>
              <a href="#" class="resizeOnScroll">RESUME</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={850}
          >
            <li>
              <a href="#" class="resizeOnScroll">WORKS</a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <li>
              <a href="#" className="resizeOnScroll">CONTACT</a>
            </li>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
