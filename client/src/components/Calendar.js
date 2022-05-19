import React, { Component } from 'react';
import Nav from './NavHeader';


class Calendar extends Component {
    render() {
        return (
            <div className="app">
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

export default Calendar;