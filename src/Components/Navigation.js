import '../scss/navigation.scss';

import React from 'react';
import { Link } from 'react-scroll';

class Header extends React.Component {
    render() {
        window.addEventListener("scroll", () => {
            const about = document.querySelector("#about");
            const education = document.querySelector("#education");
            const skills = document.querySelector("#skills");
            const contact = document.querySelector("#contact");
            const link = document.querySelectorAll(".nav-link");

            window.scrollY < about.offsetTop
                ? ((document.querySelector("header").style.height = "12vh"),
                    (document.querySelector("nav").style.background = "transparent"))
                : ((document.querySelector("header").style.height = "6vh"),
                    (document.querySelector("nav").style.background = "rgba(0,0,0,0.4)"));

            if (window.scrollY < about.offsetTop) {
                link[1].style.color = "white";
                link[0].style.color = "#46a4d7";
            } else if (
                window.scrollY >= about.offsetTop &&
                window.scrollY < education.offsetTop
            ) {
                link[0].style.color = "white";
                link[2].style.color = "white";
                link[1].style.color = "#46a4d7";
            } else if (
                window.scrollY >= education.offsetTop &&
                window.scrollY < skills.offsetTop
            ) {
                link[1].style.color = "white";
                link[3].style.color = "white";
                link[2].style.color = "#46a4d7";
            } else if (
                window.scrollY >= skills.offsetTop &&
                window.scrollY < contact.offsetTop
            ) {
                link[2].style.color = "white";
                link[4].style.color = "white";
                link[3].style.color = "#46a4d7";
            } else if (window.scrollY <= contact.offsetTop) {
                link[3].style.color = "white";
                link[4].style.color = "#46a4d7";
            }
        });

        return (
            <header>
                <nav>
                    <Link
                        activeClass="nav-active"
                        to="hello"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >
                        <li>
                            <a
                                className="nav-link nav-active"
                                a
                                href="#"
                                style={{ color: "#46a4d7" }}
                            >
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
                        duration={800}
                    >
                        <li>
                            <a className="nav-link" href="#">
                                ABOUT
              </a>
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                    >
                        <li>
                            <a className="nav-link" href="#">
                                RESUME
              </a>
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                    >
                        <li>
                            <a className="nav-link" href="#">
                                SKILLS
              </a>
                        </li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={800}
                    >
                        <li>
                            <a className="nav-link" href="#">
                                CONTACT
              </a>
                        </li>
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;
