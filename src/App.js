import React from "react";
import Navigation from "./Components/Navigation";
import Hello from "./Components/Hello";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

class App extends React.Component {


  render() {
    window.onscroll = () => {
      scrollFunction();
    };

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.querySelector("nav").style.background = "rgba(0,0,0,0.4)";
        document.querySelector("header").style.height = "6vh";
      } else {
        document.querySelector("nav").style.background = "transparent";
        document.querySelector("header").style.height = "12vh";
      }
    }

    return (
      <div id="main">
        <div id="hello">
          <Navigation />
          <Hello />
        </div>
        <About />
        <Resume />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App;
