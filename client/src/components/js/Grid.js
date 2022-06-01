import React, { Component } from 'react';
import './../css/grid.css';

class Grid extends Component {
    render() {
        const gridCells = this.props.subjects.map(subject =>
            <div className="item">
                {subject.link}
            </div>)

        return (
            <div className='container' >
                {gridCells}
            </div>
        );
    }
}

export default Grid;