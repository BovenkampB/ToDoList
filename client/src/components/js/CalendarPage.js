import React, { Component } from 'react';
import Nav from './NavHeader';
import './../css/Calendar.css';


class CalendarPage extends Component {
    render() {
        return (
            <div className="main">
                <Nav />
                <h2>
                    Calendar
                </h2>
                <p>
                    dit is een calendar... hierin staat wat je allemaal gaat doen!
                </p>
            </div>
        );
    }

}

export default CalendarPage;