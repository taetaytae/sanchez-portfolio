import React from "react";
import "../css/Works.css";
import WorkCard from "../components/WorkCard";
import {Link} from "react-router-dom";

import {
    WorkCard1Iframe,
    WorkCard1Info,
    WorkCard2Iframe,
    WorkCard2Info,
    WorkCard3Iframe,
    WorkCard3Info,
    WorkCard4Iframe,
    WorkCard4Info,
    WorkCard5Iframe,
    WorkCard5Info,
    WorkCard6Iframe,
    WorkCard6Info,
    // WorkCard7Iframe,
    // WorkCard7Info,
    WorkCard8Iframe,
    WorkCard8Info
} from "../components/Cards"

export default class Works extends React.Component {
        render(){
            return (
                <div className="worksContainer" >
                    <p>This is my stuff.</p>

                    <Link className='workLinks' to='/elasticdummy001' component={WorkCard} iframe={<WorkCard8Iframe/>} info={<WorkCard8Info/>}/>
                    <Link className='workLinks' to='/finalproject' component={WorkCard} iframe={<WorkCard6Iframe/>} info={<WorkCard6Info/>}/>
                    {/* <Link className='workLinks' to='/arturiapresets' component={WorkCard} iframe={<WorkCard7Iframe/>} info={<WorkCard7Info/>}/> */}
                    <Link className='workLinks' to='/featurenator' component={WorkCard} iframe={<WorkCard5Iframe/>} info={<WorkCard5Info/>}/>
                    <Link className='workLinks' to='/phoneinst' component={WorkCard} iframe={<WorkCard4Iframe/>} info={<WorkCard4Info/>}/>
                    <Link className='workLinks' to='/spectrogram' component={WorkCard} iframe={<WorkCard3Iframe/>} info={<WorkCard3Info/>}/>
                    <Link className='workLinks' to='/waveforms' component={WorkCard} iframe={<WorkCard2Iframe/>} info={<WorkCard2Info/>}/>
                    <Link className='workLinks' to='/synth' component={WorkCard} iframe={<WorkCard1Iframe/>} info={<WorkCard1Info/>}/>


                </div>
            );
        }
}