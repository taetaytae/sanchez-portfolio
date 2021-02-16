import React from "react";
import "../css/workscss/Synth.css";
import synth from "../assets/worksimg/synth.png";

export default class Synth extends React.Component {
        render(){
            return (
                <div className="synthContainer">

                    <h2>Polyphonic Max/MSP Synthesizer (2017)</h2>

                    <img src={synth} alt={'maxsynth'}/>

                    <p>A simple Max/MSP synthesizer comprising of two modules. One of a monophonic synthesizer with five oscillators (sine, triangle, 
                        saw, square, and noise) and a second one of a polyphonic FM synthesizer. Both modules are controlled through the same MIDI input. The
                        available audio clip is an example of the types of timbres the synth produces.</p>


                    <div className="synthdemo">
                        <iframe
                        width="100%"
                        height="100%"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/985429873%3Fsecret_token%3Ds-D4xofpXigy5&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                        title="synthdemo"
                        ></iframe>
                    </div> 



                </div>
            );
        }
}