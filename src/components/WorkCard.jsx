import React from "react";
import "../css/WorkCard.css";
import flip from "../assets/flip.svg";

 class WorkCard extends React.Component {
  constructor(props) {
    super(props);

    const {navigate, ...rest} = props;
    this.rest = rest;

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
      <div className="workcardContainer">
        <div className="flip-card" style={{animationDelay: this.state.float +'s'}}>
            <a ref={this.rest.innerref} {...this.rest} >
                <div className="flip-icon">
                    <img
                    src={flip}
                    alt="flip icon"
                    onClick={() => {
                        /*this.handleFlip();*/
                    }}
                    />
                </div>

                <div className="flip-card-inner" style={this.state.cardStyle}>
                    <div className="flip-card-front">
                    {this.props.info}
                    </div>
                    <div className="flip-card-back">
                    {this.props.info}
                    </div>
                </div>
                {this.rest.children}
            </a>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => <WorkCard

    innerref={ref} {...props}

/>);