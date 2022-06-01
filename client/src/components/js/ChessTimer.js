import React, { Component } from 'react';
import './../css/Chess.css';

const minuteInSec = 60;
const tenMins = minuteInSec * 10;
const fiveMins = minuteInSec * 5;
const thirtyMins = minuteInSec * 30;
const start = document.getElementById('startTime');

class ChessTimer extends Component {
    constructor(props) {
        super(props);
        this.state = { timer1: tenMins, timer2: tenMins, turn: true, startTime: tenMins };
        this.onStart = this.onStart.bind(this)
        this.timer = this.timer.bind(this)
        this.onPause = this.onPause.bind(this)
        this.onChange = this.onChange.bind(this)
        // this.onReset = this.onReset.bind(this)
        // this.switchTimer = this.switchTimer.bind(this)
        // this.formatTimer = this.formatTimer.bind(this)

    }

    onStart() {
        this.setState((state) => {
            if (this.state.turn) {
                return { timer1: this.state.timer1 - 1 }
            }
            return { timer2: this.state.timer2 - 1 }

        });
    }

    timer = () => {
        this.f = setInterval(this.onStart, 1000);
        document.getElementById("startBtn").disabled = true;
    }

    onPause = () => {
        clearInterval(this.f);
        document.getElementById("startBtn").disabled = false;
    }

    onReset = () => {
        clearInterval(this.f);
        this.setState({ timer1: this.state.startTime })
        this.setState({ timer2: this.state.startTime })
        document.getElementById("startBtn").disabled = false;
    }

    switchTimer = () => {
        document.getElementById("timerWhite").disabled = this.state.turn;
        document.getElementById("timerBlack").disabled = !this.state.turn;

        this.setState({
            turn: !this.state.turn
        });

        // TODO: set active timer to opponent
    }

    formatTimer = (seconds) => {
        var timer1 = new Date(null);
        timer1.setSeconds(seconds); // specify value for SECONDS here
        return timer1.toISOString().substr(11, 8);
    }

    selectStartTime = () => {
        this.setState({
            startTime: fiveMins
        })
    }

    onChange = () => {
        this.setState({
            startTime: document.getElementById('startTime').value,
            timer1: document.getElementById('startTime').value,
            timer2: document.getElementById('startTime').value
        });
    }


    render() {
        return (
            <div className='ChessTimer'>
                <h1>Chess Timer</h1>
                <button className='timer' id='timerWhite' onClick={this.switchTimer}>{this.formatTimer(this.state.timer1)}</button>

                <select id="startTime" onInput={this.onChange} >
                    <option value="60">
                        1min
                    </option>
                    <option value={3 * 60}>
                        3min
                    </option>
                    <option value={5 * 60}>
                        5min
                    </option>
                    <option value={10 * 60} selected>
                        10min
                    </option>
                    <option value={30 * 60}>
                        30min
                    </option>
                </select>

                <button className='controlButton' id='startBtn' onClick={this.timer}>Start</button>
                <button className='controlButton' onClick={this.onPause}>Stop</button>
                <button className='controlButton' onClick={this.onReset}>Reset</button>
                <button className='timer' id='timerBlack' onClick={this.switchTimer}>{this.formatTimer(this.state.timer2)}</button>
            </div>
        );
    }


}

export default ChessTimer;