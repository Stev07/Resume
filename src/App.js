import React from "react";
import Navigation from "./Components/Navigation";
import Hello from "./Components/Hello";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";
import bg from "../docs/gleb-kozenko-262687-unsplash-ConvertImage.63a1e498.jpg";
import { Parallax } from "react-parallax";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount(){
    this.setState({
      loading: false
    })
  }

  render() {

    if (this.state.loading) {
      return <Loading />
    }
    window.onscroll = () => {
      scrollFunction();
      document.querySelector(".parallax-bg").style.opacity =
        1 - +window.pageYOffset / 550 + "";
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
    };

    return (
      <div id="main">
        <div id="hello">
          <Navigation />
          <Parallax
            bgImage={bg}
            strength={500}
            className="parallax-bg"
            bgClassName="hello-bg"
          >
            <Hello />
          </Parallax>
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
