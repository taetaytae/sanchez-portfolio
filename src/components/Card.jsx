import React from "react";
import "../css/Card.css";

export default class Card extends React.Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="soundcloud">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/537965922&color=%23f2545b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="Akiko"
          ></iframe>
        </div>

        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magni
            quo quasi beatae necessitatibus? Velit sit quisquam et similique
            laudantium obcaecati optio, cumque assumenda unde facere! Quisquam
            sed facilis iste sunt vel quaerat veritatis. Omnis qui iure, eos
            cumque incidunt dignissimos exercitationem reiciendis debitis
            officiis obcaecati, saepe quibusdam voluptatem tempora.
          </p>
        </div>
      </div>
    );
  }
}