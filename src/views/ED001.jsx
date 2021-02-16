import React from "react";
import "../css/workscss/ED001.css";
import ed1 from "../assets/worksimg/ed1.gif";
import ed3 from "../assets/worksimg/ed3.gif";

export default class Elastic001 extends React.Component {
        render(){
            return (
                <div className="ed001Container">

                    <h2>ED-001 (Elastic Dummy) (2021)</h2>

                    <p>ED-001 is a vst3/au host Max for Live device that allows for more creative parameter control by allowing the user to
                        slide between two different states (presets) of the plugin. This not only creates an easier method for automating
                        multiple parameters, giving you continuous control over all of a plugin's parameters and states; but also doubles
                        as a sound design tool for mixing presets and experimentation. ED-001 also has four mappable dials, giving independent
                        control over specific parameters.
                    </p>

                    <img src={ed1} alt={"ed001-1"}/>

                    <h2>Background</h2>

                    <p>
                        ED-001 was created to solve a common problem that people who work in DAWs encounter, in that parameter automation workflow 
                        can be tedious (especially for large plugins with 100s of parameters). Manually selecting parameters and drawing automation 
                        lines or recording passes of turning individual knobs is not a time-efficient method, and in most DAWs the full scope of a plugin’s 
                        settings can not be automated.

                        <br/>
                        <br/>
                        This device aims to make dealing with this problem easier by giving the user both mass control over the plugin between 
                        two “states,” and independent control using dials that map to selected parameters.
                    </p>

                    <img src={ed3} alt={"ed001-3"}/>

                    <p>ED-001 (Elastic Dummy) was made in collaboration with Lucas Hui.</p>


                    <h2>Features</h2>
                    <ul>
                        <li>Full control over au/vst plugins no matter the number of parameters</li>
                        <li>Quick, efficient and very easy to use</li>
                        <li>Built-in plugin browser</li>
                        <li>Customisable workflow allowing users to create their own method of interacting with audio plugins</li>
                        <li>Fully automatable from Ableton</li>
                        <li>Adjustable output limiter (w/ lookahead) for safe use with any (loud) plugins</li>
                        <li>Smooth interpolation between states</li>
                    </ul>

                    <p>ED-001 is still in development, and is still being tested. The device and its source can be found <a href="https://github.com/taetaytae/ED-001" target="_blank" rel="noopener noreferrer">here</a>.</p>


                </div>
            );
        }
}