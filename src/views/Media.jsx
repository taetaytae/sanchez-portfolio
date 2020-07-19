import React from "react";
import "../css/Media.css";
import Card from "../components/Card";

import {
  Card1Iframe,
  Card2Iframe,
  Card3Iframe,
  Card4Iframe,
  Card5Iframe,
  Card6Iframe,
  Card1Info,
  Card2Info,
  Card3Info,
  Card4Info,
  Card5Info,
  Card6Info,
} from "../components/Cards";

export default class Media extends React.Component {
  render() {
    return (
      <div className="mediaContainer">
        <Card iframe={<Card1Iframe />} info={<Card1Info />} />
        <Card iframe={<Card2Iframe />} info={<Card2Info />} />
        <Card iframe={<Card3Iframe />} info={<Card3Info />} />
        <Card iframe={<Card4Iframe />} info={<Card4Info />} />
        <Card iframe={<Card5Iframe />} info={<Card5Info />} />
        <Card iframe={<Card6Iframe />} info={<Card6Info />} />
      </div>
    );
  }
}
