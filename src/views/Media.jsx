import React from "react";
import "../css/Media.css";
import Card from '../components/Card';

export default class Media extends React.Component {
  render() {
    return (
      <div className="mediaContainer">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}
