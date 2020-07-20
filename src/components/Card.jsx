import React from "react";
import "../css/Card.css";
import flip from "../assets/flip.svg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      float:Math.random(4)
    };
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
        <div className="flip-card" style={{animationDelay: this.state.float +'s'}}>
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
              {this.props.iframe}
            </div>
            <div className="flip-card-back">
              {this.props.info}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
