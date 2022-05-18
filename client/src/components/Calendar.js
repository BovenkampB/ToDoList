import { render } from 'express/lib/response';
import React, { Component } from 'react';

class Calendar extends Component {



    render() {
        return (
            <div>
                <h2>
                    Calendar
                </h2>
                <p>
                    dit is een calendar... hierin staat wat je allemaal gaat doen! :)
                </p>
            </div>
        );
    }

}

export default Calendar;