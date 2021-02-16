import React from "react";
import "../css/workscss/Featurenator.css";

export default class Featurenator extends React.Component {
        render(){
            return (
                <div className="featurenatorContainer">

                    <h2>Bop-It/MusicWand for Featurenator Research (2019)</h2>

                    <p>The purpose of this project was to test a new machine learning feature engineering
                        software called Featurenator (a newer version of the Wekinator program seen here) as part of
                        a research project being done at Goldsmiths, University of London. The purpose of the program
                        is to improve the performance of machine learning models by augmenting inputs to generate new features,
                        specifically for motion sensor data (in my case an accelerometer). The goal of 
                        the research was to address some of the following topics:</p>
                    
                    <ul>
                        <li>How is this useful to you?</li>
                        <li>How does this fit into your practice?</li>
                        <li>What does it allow you to do musically?</li>
                        <li>How easily learnable is the interface?</li>
                        <li>What does this allow you to do that you couldn't before? What does<br/> it allow you to do
                            more easily than without it?
                        </li>
                        <li>How quickly can you prototype ideas?</li>
                        <li>What is hard about using it? What does it not<br/> allow you to do that you wish it did?</li>
                        <li>General feedback on the user interface</li>
                    </ul>

                    <p>Two of the projects developed were a Bop-It simulator and a type of multi-purpose electronic instrument controlled through user
                        movement.</p>

                </div>
            );
        }
}