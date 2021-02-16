import React from "react";
import "../css/workscss/Waveforms.css";
import waveforms from "../assets/worksimg/waveforms.png"

export default class Waveforms extends React.Component {
        render(){
            return (
                <div className="waveformsContainer">

                    <h2>Wavy Waveforms (2018)</h2>

                    <p>
                        The whole purpose of this program was to showcase the user some information regarding the 
                        human hearing range and folded frequencies in an interactive visual and auditive manner, 
                        while also explaining really briefly how different waveforms are built through the use of sine waves and summations. 
                        <br/>
                        <br/>It allows the user to build either a square wave, a saw wave, or a triangle wave by adding up the harmonics one by one, 
                        giving them a visual and auditive representation of what’s going on, while also letting them change the waveform’s frequency.
                        The program was made with openFrameworks, using ofxMaxim as the audio engine. A brief video demo of the program can be seen below.
                        The source code can be found <a href="https://github.com/taetaytae/wavywaveforms" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>

                    <img src={waveforms} alt={'waveformsdisplay'}/>

                    <div className="waveformvideo">
                        <iframe
                        src="https://player.vimeo.com/video/512095109"
                        frameBorder="0"
                        width="1000"
                        height="500"
                        allow="autoplay; fullscreen"
                        title='prototype'
                        allowFullScreen
                        ></iframe>
                    </div> 



                </div>
            );
        }
}