import React from "react";
import "../css/workscss/ED003.css";

export default class ED003 extends React.Component {

    render(){
        return(
            <div className="ed003Container">
                <h2>ED-003 (Elastic Dummy) (2021)</h2>

                <p>
                    ED-003 is An interactive audiovisual webpage showcasing spatial HRTF panning through a 3D environment. 
                    The web app is being made in React using React Three Fiber for the visuals, Tone.js for the audio and zustand to handle state-management.
                    The project is currently in a barebones state, but the core functionality of using a Three.js 3d environment 
                    as an interface to control the audio engine is working.
                    <br/>
                    <br/>
                    Below is a short video of the project's current state (the audio works better with headphones). The source code can be 
                    found <a href="https://github.com/taetaytae/elastic-dummy-3" target="_blank" rel="noopener noreferrer">here</a>.
                </p>

                <div className="ed003video">
                        <iframe
                        src="https://player.vimeo.com/video/687757763?h=5e616bfa64&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        width="1000"
                        height="500"
                        allow="autoplay; fullscreen"
                        title='prototype'
                        allowFullScreen
                        ></iframe>
                </div> 
            </div>
        )
    };
}