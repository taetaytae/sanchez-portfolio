import React from "react";
import "../css/Home.css";
import github from "../assets/github.svg"

export default class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <iframe
          width="800"
          height="400"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/985053841%3Fsecret_token%3Ds-IMJBSxBbaao&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          title="AkikoGirlMagic"
        ></iframe>
        
        <p>
          <span>W</span>elcome to my page. Take a look around to see some of my audio/sound related projects. 
          Go ahead and send me an email if you wish to contact me.
        </p>

        <div className="socialLinks">
            <a className="githubLogo" href="https://github.com/taetaytae" target="_blank" rel="noopener noreferrer">
              <img src={github} alt='github' />
            </a>
        </div>
      </div>
    );
  }
}
