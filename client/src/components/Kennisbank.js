import React, { Component } from 'react';
import Nav from './NavHeader';
import './css/kennisbank.css'
import Grid from './js/Grid'

const arrOfObj = ["Drone", "3D-printer", "Front-end"]

class Kennisbank extends Component {
    render() {
        return (
            <div className='main'>
                <Nav />
                <h2>
                    Kennisbank
                </h2>
                <p>
                    dit is een Kennisbank... hierin staan bevindingen die eerder gedaan zijn,
                    die we niet opnieuw hoeven leren maar kunnen hergebruiken :)
                </p>

                <Grid arrOfObj={arrOfObj} />
            </div>
        );
    }

}

export default Kennisbank;