import React from "react";
import "../scss/works.scss";
import pomodoro from "../img/projects/pomodoro-ConvertImage.jpg";
import bookshelf from "../img/projects/bookshelf.png";
import visages from "../img/projects/visages.png";
import messenger from "../img/projects/messenger.png";
import apArt from "../img/projects/Screenshot_2019-11-04 AP-Art - Digital Artist.png";

class Works extends React.Component {
  render() {
    return (
      <div id="works">
        <div className="works-container">
          <div className="box">
            <a
              target="_blank"
              href="http://www.ap-art.me"
            >
              <div className="imgBx">
                <img src={apArt} alt="project" />
              </div>
              <div className="contentBx">
                <div>
                  <h3>AP-Art</h3>
                  <br />
                  <ul>
                    <li>React</li>
                    <li>GSAP</li>
                    <li>SVG</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a
              target="_blank"
              href="https://github.com/Stev07/Bookshelf/tree/develop"
            >
              <div className="imgBx">
                <img src={bookshelf} alt="project" />
              </div>
              <div className="contentBx">
                <div>
                  <h3>BookShelf</h3>
                  <br />
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a target="_blank" href="https://www.visagesetcouleurs.be">
              <div className="imgBx">
                <img src={visages} alt="project" />
              </div>
              <div className="contentBx">
                <div>
                  <h3>Headless CMS</h3>
                  <br />
                  <ul>
                    <li>React</li>
                    <li>Wordpress</li>
                    <li>Javascript</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <div className="box">
            <a target="_blank" href="https://github.com/Stev07/php-messenger">
              <div className="imgBx">
                <img src={messenger} alt="project" />
              </div>
              <div className="contentBx">
                <div>
                  <h3>PHP Messenger</h3>
                  <br />
                  <ul>
                    <li>HTML</li>
                    <li>Css</li>
                    <li>Php</li>
                    <li>Mysql</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Works;
