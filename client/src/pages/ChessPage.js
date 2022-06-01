import React, { Component } from 'react';
import Nav from '../components/js/NavHeader';
import './../components/css/DronePage.css';
import ChessTimer from './../components/js/ChessTimer';

class ChessPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='main'>
                <Nav />
                <ChessTimer />
            </div>
        )
    }
}

export default ChessPage;