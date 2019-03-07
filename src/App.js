import React from "react";
import Navigation from "./Components/Navigation";
import Hello from "./Components/Hello";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import Contact from "./Components/Contact";

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
        document.querySelector("header").style.height = "5vh";
        document.querySelectorAll(".resizeOnScroll").style.fontSize="11px";
      } else {
        document.querySelector("nav").style.background = "transparent";
        document.querySelector("header").style.height = "12vh";
        document.querySelectorAll(".resizeOnScroll").style.fontSize="15px";
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
