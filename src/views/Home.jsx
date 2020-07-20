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
          title="Akiko"
        ></iframe>

        <p>
          <span>R</span>ecently graduated undergraduate student with a BSc/BMus
          degree in Music Computing (Electronic Music, Computing and Technology)
          from Goldsmiths, University of London. The bachelor is a computing
          degree with a specialized focus on audio programming and managing
          digital audio systems. I was able to graduate with First Class Honours
          and am now looking to expand my work experience as a programmer.
        </p>
      </div>
    );
  }
}
