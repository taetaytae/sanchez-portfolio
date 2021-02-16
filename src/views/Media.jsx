import React from "react";
import "../css/Media.css";
import MediaCard from "../components/MediaCard";

import {
  Card1Iframe,
  Card2Iframe,
  Card3Iframe,
  Card4Iframe,
  Card1Info,
  Card2Info,
  Card3Info,
  Card4Info,
} from "../components/Cards";

export default class Media extends React.Component {
  render() {
    return (
      <div className="mediaContainer">
        <p>Some select recordings.</p>
        <MediaCard iframe={<Card1Iframe />} info={<Card1Info />} />
        <MediaCard iframe={<Card2Iframe />} info={<Card2Info />} />
        <MediaCard iframe={<Card3Iframe />} info={<Card3Info />} />
        <MediaCard iframe={<Card4Iframe />} info={<Card4Info />} />
      </div>
    );
  }
}
