import React from "react";
import "../css/Contact.css";
import github from "../assets/github.svg";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <h2>Send me an email</h2>
        <a className="email" href="mailto:msanc002@gmail.com">
          msanc002
          <span>@</span>
          gmail.com
        </a>

        {/* <h1>Socials:</h1> */}

        <div className="socialLinks">

          <a className="githubLogo" href="https://github.com/taetaytae" target="_blank" rel="noopener noreferrer">
            <img src={github} alt='github' />
          </a>

        </div>


        {/* <h3>MSanchez__</h3> */}
      </div>
    );
  }
}
