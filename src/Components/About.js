import React from "react";
import '../scss/about.scss';

class About extends React.Component {
  render() {
    return (
        <div id="about">    
            <section className="about">
                <div className="about-img">
                  
                </div>
                  <div className="about-me">
                    <h4>About me</h4><br/>
                    <p>I have finished my B.E. in Computer Science and have been working in industry for past few years.</p>
                  </div>
                    <div className="about-details">
                    <h4>Contact details</h4><br/>
                    <p>Steve Dossin</p>
                    <p>Belgium, Liège</p>
                    <p>https:www.stevedossin.me</p>
                  </div>
            </section>

            <section id="education" className="education">
              <div className="education-title">
                <p>EDUCATION</p>
              </div>
              <div className="education-item1">
                  <h3>Certificate relating to basic management knowledge</h3>
                  <h5><em>Saint-Lambert Herstal | 2012 - 2013</em></h5>
                  <p>blablablablabla</p>
              </div>
              <div className="education-item2">
                  <h3>Accounting technician</h3>
                  <h5><em>Saint-Lambert Herstal | 2009 - 2013</em></h5>
                  <p>blablablablabla</p>
              </div>
              <div className="separate" />
            </section>
            
        </div>
        
    );
  }
}

export default About;
