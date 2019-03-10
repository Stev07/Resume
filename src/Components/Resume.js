import React from "react";
import '../scss/resume.scss';

class Resume extends React.Component {
  render() {
    return (
        <div id="resume">
            <section id="resume" className="resume">
              <div className="resume-title">
                <p>WORK</p>
              </div>
              <div className="resume-item1">
                  <h4>COMPANY</h4>
                  <p>blablablablabla</p>
              </div>
              <div className="resume-item2">
                  <h4>COMPANY</h4>
                  <p>blablablablabla</p>
              </div>
              <div className="separate" />
            </section>
            
            <section id="skills">
              Skills
            </section>
        </div>
        
    );
  }
}

export default Resume;
