import React from "react";
import "../scss/works.scss";
// import Card from "../Components/Card";
import pomodoro from "../img/projects/pomodoro-ConvertImage.jpg";
import bookshelf from "../img/projects/bookshelf.png";
import visages from "../img/projects/visages.png";
import messenger from "../img/projects/messenger.png"

class Works extends React.Component {
  render() {
    return (
      <div id="works">
        <div className="works-box">
          <div className="works-item">
            <a target="_blank" href="https://stev07.github.io/React_Pomodoro/">
              <img src={pomodoro} className="pomodoro" />
            </a>
          </div>
          <div className="works-item">
            <a target="_blank" href="https://github.com/Stev07/Bookshelf/tree/develop">
              <img src={bookshelf} className="bookshelf" />
            </a>
          </div>
          <div className="works-item">
          <a target="_blank" href="http://www.visagesetcouleurs.be">
              <img src={visages} className="bookshelf" />
            </a>
          </div>
          <div className="works-item">
          <a target="_blank" href="https://github.com/Stev07/php-messenger">
            <img src={messenger} className="pomodoro" />
          </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Works;
