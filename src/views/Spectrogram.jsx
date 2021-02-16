import React from "react";
import "../css/workscss/Spectrogram.css";
import spec from "../assets/worksimg/spec.png";

export default class Spectrogram extends React.Component {
        render(){
            return (
                <div className="spectrogramContainer">

                    <h2>Spectrogram (2019)</h2>

                    <p>The objective of this project was to build a spectrogram that 
                        allowed the user to see an analysis of a loaded in .wav file along 
                        with giving the user the ability to apply some form of filtering to the audio 
                        file so they can see how this affects the spectrogram analysis. 
                        
                        <br/>
                        <br/>
                        The visuals are being handled by openFrameworks while the audio is being handled by ofxMaxim. 
                        An image and demo of the spectrogram can be seen below. The source code can be 
                        found <a href="https://github.com/taetaytae/pmc-spectrogram" target="_blank" rel="noopener noreferrer">here</a>.
                    
                    </p>

                    <img src={spec} alt={'spectrogram'}/>
                    <div className="specvideo">
                        <iframe
                        src="https://player.vimeo.com/video/333104301"
                        frameBorder="0"
                        width="1000"
                        height="500"
                        allow="autoplay; fullscreen"
                        title='spectrogram'
                        allowFullScreen
                        ></iframe>
                    </div> 



                </div>
            );
        }
}