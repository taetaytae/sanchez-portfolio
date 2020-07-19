import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{

    constructor(props){

        super(props);

        this.state = {


        }


    }


    render(){

        return(
            <nav>
                <Link className='logo' to='/'>
                    <h1>Mario Sanchez</h1>
                </Link>

                <Link className='links' to='/media'>Media</Link>
                <Link className='links' to='/contact'>Contact</Link>

                
            </nav>
        );

    }




}