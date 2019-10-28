import React from "react";
import "../scss/about.scss";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.animAbout = new TimelineLite();

  }

  componentDidMount() {
    this.animAbout
      .from('h4', 1, {x:'+100vw'},0)
      .from('.about-me-about p', 1, {x:'+100vw'}, 0.3)
      .from('.about-me-details p', 1, {x:'+100vw'}, 0.3)

 

    new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: "onLeave",
      ease: Back.easeOut.config(3),
      // duration: 300, // scroll distance
      offset: -300 // start this scene after scrolling for 50px
    })
      .setTween(this.animAbout)
      .addTo(this.controller) // assign the scene to the controller
      .addIndicators()
      // .setPin(".about-me-about") // pins the element for the the scene's duration


  }


  render() {
    return (
      <div id="about">
        <section className="about">
          <div className="about-img" />
          <div className="about-me">
            <div className="about-me-about">
              <h4 id="aboutMe">About me</h4>
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
      </div>
    );
  }
}

export default About;
