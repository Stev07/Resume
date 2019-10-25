import React from "react";
import "../scss/about.scss";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <section className="about">
          <div className="about-img" />
          <div className="about-me">
            <div className="about-me-about">
              <h4>About me</h4>
              <br />
              <p>
                IT passionate who loves sharing his knowledge, I became a
                professional web developer with the Becode training. Empath by
                nature, my listening and communication skills are always
                appreciated by teams and clients.
              </p>
            </div>
            <div className="about-me-details">
              <h4>Contact details</h4>
              <br />
              <p>Steve Dossin</p>
              <p>Belgium, Liège</p>
              <p>steve.dossin@gmail.com</p>
              <p>https://www.stevedossin.me</p>
            </div>
          </div>
        </section>

        <section id="education" className="education">
          <div className="education-title">
            <p>EDUCATION</p>
          </div>
          <div className="education-item1">
            <h3>Certificate relating to basic management knowledge</h3>
            <h5>
              <em>Saint-Lambert Herstal | 2013</em>
            </h5>
          </div>
          <div className="education-item2">
            <h3>Accounting technician</h3>
            <h5>
              <em>Saint-Lambert Herstal | 2013</em>
            </h5>
          </div>
          <div className="separate" />
        </section>
      </div>
    );
  }
}

export default About;
