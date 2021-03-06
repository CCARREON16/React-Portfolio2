import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../Portfolio'


class Header extends Component {
    state = {}

    render() {
        return (<div>
        
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    
                </p>
            </Fade>



        </div>);
    }
}

export default Header;