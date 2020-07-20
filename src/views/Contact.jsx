import React from "react";
import "../css/Contact.css";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import apple from "../assets/apple.svg";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <h1>Send me an email</h1>
        <a className="email" href="mailto:mario.a.sanchez199902@gmail.com">
          mario.a.sanchez199902
          <span>@</span>
          gmail.com
        </a>

        <h1>Socials:</h1>

        <div className="socialLinks">
          <a className="twitterLogo " href="https://twitter.com/">
            <img src={twitter} alt='twiiter' />
          </a>
          <a className="instagramLogo" href="https://www.instagram.com/">
            <img src={instagram} alt='instagram' />
          </a>
          <a className="youtubeLogo" href="https://www.youtube.com/">
            <img src={youtube} alt='youtube' />
          </a>
          <a
            className="appleLogo"
            href="https://www.apple.com/apple-music/"
          >
            <img src={apple} alt='apple' />
          </a>
        </div>


        <h3>MSanchez__</h3>
      </div>
    );
  }
}
