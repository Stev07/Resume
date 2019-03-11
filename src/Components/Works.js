import React from "react";
import "../scss/works.scss";
import pomodoro from "../img/projects/pomodoro.png";

class Works extends React.Component {

    

    render() {
        
        return (
            <div id="works">
                <div className="works-box">
                    <div className="works-item"><a target="_blank" href="https://stev07.github.io/React_Pomodoro/"><img src={pomodoro} className="pomodoro"/></a></div>
                    <div className="works-item">Project2</div>
                    <div className="works-item">Project3</div>
                    <div className="works-item">Project4</div>
                </div>
                
            </div>
            );
        }
    }

export default Works