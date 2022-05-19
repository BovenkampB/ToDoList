import React, { Component } from 'react';
import './../css/grid.css';




class Grid extends Component {
    render() {

        const cells = this.props.arrOfObj.map(obj => 
            <div style={{ backgroundColor: `${'#'+Math.random().toString(16).substr(-6)}`}} 
            className="item">{obj}</div>)

        return (
            <div className='container' >
                {cells}
            </div>

        );
    }
}

export default Grid;