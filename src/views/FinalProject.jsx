import React from "react";
import "../css/workscss/FinalProject.css";
import track from "../assets/worksimg/trackinterface.png";
import prototype from "../assets/worksimg/prototypeinterface.png";

export default class FinalProject extends React.Component {
        render(){
            return (
                <div className="finalprojectContainer">

                    <h2>Remote Colaboratory (2020)</h2>

                    <p>This project is an exploration of real-time collaborative music making programs as part of my final 
                        project for my undergraduate degree at Goldsmiths, University of London. Research around designing
                        multi-user and music production interfaces was used to inform and plan the development of a collaborative 
                        music-making platform using the WebSocket protocol (through Node.js) and the JUCE framework.
                        <br/>
                        <br/>The proposed program is a software sequencer/sampler that models its functionality after hardware samplers but allows 
                        for any number of users to control the program from remote locations at the same time. The
                        project got as far as to develop a proof of concept sequencer in C++ using the Juce framework and Tracktion
                        engine along with a user-tested functional prototype in Max/MSP, laying down the groundwork for developing a more robust
                        iteration of the program in C++.
                        <br/>
                        <br/>
                        The first video below showcases two versions of the proof of concept sequencer communicating with each other. 
                        <br/>

                    </p>

                    <div className="seqvideo">
                        <iframe
                        src="https://player.vimeo.com/video/394998467"
                        frameBorder="0"
                        width="1000"
                        height="500"
                        allow="autoplay; fullscreen"
                        title='sequencer'
                        allowFullScreen
                        ></iframe>
                    </div> 

                    <p>
                        <br/>
                        The prototype is comprised of a four track sample player/sequencer with a selection of samples that were
                        packaged into the program. Each track can be toggled between the looping or sequencer mode. The looping mode loops the selected 
                        sample and allows for control of the sample playback speed and pitch. The sequencer mode only allows you to edit the audio file by
                        changing the start and end points. An image of an individual track can be seen below.
                        <br/>
                    </p>

                    <img src={track} alt={"trackinterface"}/>
                    
                    <p>    
                        <br/>
                        And here's an image of the entire prototype.
                    </p>

                    <img src={prototype} alt={"prototypeinterface"}/>
                    
                    <p>
                        <br/>
                        <br/>
                        This second video showcases a short clip of a 15 minute jam two users made using the the prototype.
                    </p>

                    <div className="protovideo">
                        <iframe
                        src="https://player.vimeo.com/video/424663155"
                        frameBorder="0"
                        width="1000"
                        height="500"
                        allow="autoplay; fullscreen"
                        title='prototype'
                        allowFullScreen
                        ></iframe>
                    </div> 
                    
                    <p>
                        <br/>
                        <br/>
                        The project's research report detailing the entire process and how the program works in more detail can be 
                        found <a href="https://drive.google.com/file/d/1rNJjAfrRJtVbXLQz8HR7S-VcVanZpPJ6/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>. 
                        The project source code can be found <a href="https://github.com/taetaytae/remote-colaboratory" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>


                </div>
            );
        }
}