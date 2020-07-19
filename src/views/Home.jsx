import React from "react";
import "../css/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <iframe
          width="800"
          height="400"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/537965922&color=%23f2545b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
       
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          recusandae magni, ea earum minus in quas et, rem debitis voluptatem
          nostrum blanditiis ipsum architecto, aliquid praesentium. Fuga nostrum
          praesentium voluptates facilis molestias velit ex, voluptas
          exercitationem porro neque nulla officiis minus, ducimus possimus esse
        </p>
      </div>
    );
  }
}
