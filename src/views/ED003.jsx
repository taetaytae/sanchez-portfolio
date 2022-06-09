import React from "react";
import "../css/workscss/ED003.css";
import ed003img from "../assets/worksimg/ed003.png";

export default class ED003 extends React.Component {

    render(){
        return(
            <div className="ed003Container">
                <h2>ED-003 (Elastic Dummy) (2022)</h2>

                <p>
                    ED-003 is a web-based granular synthesizer with a React Three based user interface.
                    The project utilizes Tone.js to handle the audio, React Three Fiber and Material UI for the interface,
                    axios to handle api requests, and zustand for state management.
                    <br/>
                    <br/>
                <p>
                <img src={ed003img} alt={'ed003-img'}/>
                </p>
                    The project can be accessed by visiting the following URL:
                    <a href='https://elastic-dummy-3.vercel.app/' target="_blank" rel="noopener noreferrer">https://elastic-dummy-3.vercel.app/</a>.
                    While the source code can be found <a href="https://github.com/taetaytae/elastic-dummy-3" target="_blank" rel="noopener noreferrer">here</a>.
                    <br/>
                    <br/>
                    The React Three UI allows for control of seven parameters by moving the objects found in the scene with the mouse.
                    Five of them relate to the quality of each grain:
                </p>
                
                        <ul>
                            <li>Attack: grain fade-in</li>
                            <li>Release: grain fade-out</li>
                            <li>Pitch Deviation: how much each grain's pitch will deviate randomly from the base pitch</li>
                            <li>Distribution Offset: how much each grain's file position will deviate from the current file position</li>
                            <li>File Position: the base file position for each grain</li>
                        </ul>
                    <p>The remaining two parameters relate to the synth's overrall output:</p>
                        <ul>
                            <li>Density: the amount of grains triggered per second</li>
                            <li>Pan: the x/y spatialized panning position of the overrall audio</li>
                        </ul>
                <p>
                    The Material UI interface allows for playing and pausing the audio, fetching a new random audio file, setting the file's playback speed,
                    and selecting/submitting any user selected audio files from the user's local file system.
                    <br/>
                    <br/>
                    The audio files used as the sound source for the synthesizer are primarily fetched from FreeSound using
                    the FreeSound API. The random file search was set up using the Words API.
                    
                    <br/>
                    <br/>
                    Below is a short demo video.
                </p>

                <div className="ed003video">
                        <iframe
                        src="https://player.vimeo.com/video/718556269?h=8440f111b2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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