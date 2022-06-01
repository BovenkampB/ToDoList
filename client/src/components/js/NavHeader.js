import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/logo.png';
import './../css/navBar.css'


class NavHeader extends Component {
    render() {
        return (
            <nav>
                <div className='logo'>
                    <img src={logo} className="App-logo" alt="To-do list" />
                </div>

                <div className='links'>
                    <Link to="/">To-do</Link>
                    <Link to="/kennis">Kennis</Link>
                    <Link to="/calendar">Calendar</Link>
                </div>
            </nav>
        )
    }
}

export default NavHeader;