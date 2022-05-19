import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';


class NavHeader extends Component {
    render() {
        return (
            <nav>
                <img src={logo} className="App-logo" alt="To-do list" />

                <br />

                <Link to="/">To-do</Link> |{" "}
                <Link to="/kennis">Kennis</Link> |{" "}
                <Link to="/calendar">Calendar</Link>

            </nav>
        )
    }
}

export default NavHeader;