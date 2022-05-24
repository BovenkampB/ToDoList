import React, { Component } from 'react';
import Nav from './NavHeader';
import './../css/kennisbank.css'
import Grid from './Grid'
import { Link } from 'react-router-dom';
import dronePic from './../img/drone-logo.png';
import frontendPic from './../img/frontend-logo.png';
import printerPic from './../img/printer-logo.png';

const droneSubject = [];
droneSubject["link"] = <Link to="/drone"><img src={dronePic} className="subject-logo" alt="Drone link" /></Link>; //link to page for subject

const printerSubject = [];
printerSubject["link"] = <Link to="/drone"><img src={printerPic} className="subject-logo" alt="Drone link" /></Link>; //link to page for subject

const frontendSubject = [];
frontendSubject["link"] = <Link to="/drone"><img src={frontendPic} className="subject-logo" alt="Drone link" /></Link>; //link to page for subject

const subjects = [];

subjects.push(droneSubject, printerSubject, frontendSubject);


class KennisbankPage extends Component {
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

                <Grid subjects={subjects} />
            </div>
        );
    }

}

export default KennisbankPage;