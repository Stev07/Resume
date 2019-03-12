import React from "react";
import "../scss/form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form action="https://formspree.io/your@email.com" method="POST">
            <input type="text" name="firstname" />
            <input type="text" name="lastname" />
            <input type="text" name="subject" />
            <textarea type="text" name="subject" />
        </form>
      </div>
    );
  }
}

export default Form;
