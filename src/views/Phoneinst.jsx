import React from "react";
import "../css/workscss/Phoneinst.css";

export default class Phoneinst extends React.Component {
        render(){
            return (
                <div className="phoneinstContainer">

                    <h2>MiraWeb Phone Instrument (2019)</h2>

                    <p>The concept of the patch involved wanting to use a few of the many sensors most modern smartphones have inside of them
                        in order to control parameters on an electronic musical system. The three sensors that were used in this case were 
                        the touch screen, the accelerometer, and the gyroscope. This was accomplished by using the MiraWeb Max package,
                        which allows you to access a smartphone's many sensors throgh a web browser.
                        
                    <br/>
                    <br/>
                        The audio that the data is altering comes from three different sources. A 5-step sequencer, a simple polyphonic 
                        synthesizer and a simple FM synthesizer. When you open up the address on the phone you end up with 5 tabs 
                        in the webpage that give you access to control each of these little modules. A short demo of the patch can be seen below.
                        More information on the patch can be found <a href="https://github.com/taetaytae/miraweb-phone-instrument" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>

                    <div className="phonevideo">
                        <iframe
                        src="https://player.vimeo.com/video/334388945"
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