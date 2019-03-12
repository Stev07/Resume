import React from "react";
import "../scss/form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form action="https://formspree.io/steve.dossin@gmail.com" method="POST">
            <div className="form-name"><input type="text" name="name" placeholder="Your name" /></div>
            <div className="form-email"><input type="email" name="_replyto" placeholder="Email"/></div>
            <div className="form-subject"><input type="text" name="subject" placeholder="Subject" /></div>
            <div className="form-message"><textarea name="message" placeholder="Your message" /></div>
            <div className="form-submit"><input type="submit" value="Send" /></div>
        </form>
      </div>
    );
  }
}

export default Form;
