import React from "react";
import "../css/Card.css";
import flip from "../assets/flip.svg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    let x;
    if (!this.state.flipped) {
      x = { transform: "rotateY(180deg)" };
    } else {
      x = { transform: "rotateY(0deg)" };
    }

    this.setState({ flipped: !this.state.flipped, cardStyle: x });
  }

  componentDidMount() {
    this.setState({ flipped: false });
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="flip-card">
          <div className="flip-icon">
            <img
              src={flip}
              alt="flip icon"
              onClick={() => {
                this.handleFlip();
              }}
            />
          </div>

          <div className="flip-card-inner" style={this.state.cardStyle}>
            <div className="flip-card-front">
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/537965922&color=%23f2545b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                title="Akiko"
              ></iframe>
            </div>
            <div className="flip-card-back">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                magni quo quasi beatae necessitatibus? Velit sit quisquam et
                similique laudantium obcaecati optio, cumque assumenda unde
                facere! Quisquam sed facilis iste sunt vel quaerat veritatis.
                Omnis qui iure, eos cumque incidunt dignissimos exercitationem
                reiciendis debitis officiis obcaecati, saepe quibusdam
                voluptatem tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*



<figure className="front">
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/537965922&color=%23f2545b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              title="Akiko"
            ></iframe>


<p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magni
              quo quasi beatae necessitatibus? Velit sit quisquam et similique
              laudantium obcaecati optio, cumque assumenda unde facere! Quisquam
              sed facilis iste sunt vel quaerat veritatis. Omnis qui iure, eos
              cumque incidunt dignissimos exercitationem reiciendis debitis
              officiis obcaecati, saepe quibusdam voluptatem tempora.
            </p>
          
*/
