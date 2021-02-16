import React from 'react';
import '../css/Scrolltotop.css';

export default class Scrolltotop extends React.Component {


    constructor (props){

        super(props);

        this.state = {
            // float:Math.random(4)
        }

        // this.scrollFunction = this.scrollFunction.bind(this);

    }

    

    // scrollFunction(){
    //     let x;
    //     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    //         x = {display: 'block'};
    //     } else {
    //         x = {display: 'none'};
    //     }

    //     this.setState({scrollDisplay: x});

    // }

    topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render(){

        return(
            <div className='scrolltotopContainer' onScroll={() => {
                // this.scrollFunction();
            }}>
                <button id='scrolltotopBtn' style={this.state.scrollDisplay} onClick={() => {
                    this.topFunction();
                }}>
                    ⌃
                </button>
            </div>
        );
    }


}