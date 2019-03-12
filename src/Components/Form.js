import React from "react";
import "../scss/form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form action="https://formspree.io/steve.dossin@gmail.com" method="POST">
            <input type="text" name="firstname" />
            <input type="text" name="lastname" />
            <input type="email" name="_replyto" />
            <input type="text" name="subject" />
            <textarea type="text" name="text" />
            <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Form;
