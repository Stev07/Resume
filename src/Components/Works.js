import React from "react";
import "../scss/works.scss";
// import Card from "../Components/Card";
import pomodoro from "../img/projects/pomodoro.png";
import bookshelf from "../img/projects/bookshelf.png";

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
            <img src={bookshelf} className="bookshelf" />
          </div>
          <div className="works-item">
            <img src={pomodoro} className="pomodoro" />
          </div>
          <div className="works-item">
            <img src={bookshelf} className="bookshelf" />
          </div>

          {/* <div clasName="works-item">
                <Card img={pomodoro} content="Pomodoro" imgClassName="pomodoro"/>
            </div>
            <div clasName="works-item">
                <Card img={bookshelf} content="Bookshelf"/>
            </div>
            <div clasName="works-item">
                <Card img={pomodoro} content="Pomodoro"/>
            </div>
            <div clasName="works-item">
                <Card img={bookshelf} content="Bookshelf"/>
            </div> */}
        </div>
      </div>
    );
  }
}
export default Works;
