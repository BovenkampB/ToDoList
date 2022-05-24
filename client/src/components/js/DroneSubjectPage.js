import React, { Component } from 'react';
import Nav from './NavHeader';
import './../css/DronePage.css';


let lipoData = new Array;
lipoData.push(4.2, 3.85, 3.1);

let lionData = new Array;
lionData.push(4.1, 3.7, 3);



class DroneSubjectPage extends Component {



    render() {
        return (

            <div className="main">
                <Nav />
                <h1>
                    Drones (quad-copter)
                </h1>

                <p>
                    Learn how to manage batteries and do other drone related tasks.
                </p>


                <h2>
                    Battery management
                </h2>

                <h3>
                    Lithium Polymer
                </h3>
                <table className='lipoTable'>
                    <tr>
                        <th>Number of cells</th>
                        <th>Full (V)</th>
                        <th>Storage (V)</th>
                        <th>Landing at (V)</th>
                    </tr>
                    <tr>
                        <th>1S</th>
                        <td>{lipoData[0].toFixed(2)}</td>
                        <td>{lipoData[1].toFixed(2)}</td>
                        <td>{lipoData[2].toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>2S</th>
                        <td>{(2 * lipoData[0]).toFixed(2)}</td>
                        <td>{(2 * lipoData[1]).toFixed(2)}</td>
                        <td>{(2 * lipoData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>3S</th>
                        <td>{(3 * lipoData[0]).toFixed(2)}</td>
                        <td>{(3 * lipoData[1]).toFixed(2)}</td>
                        <td>{(3 * lipoData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>4S</th>
                        <td>{(4 * lipoData[0]).toFixed(2)}</td>
                        <td>{(4 * lipoData[1]).toFixed(2)}</td>
                        <td>{(4 * lipoData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>5S</th>
                        <td>{(5 * lipoData[0]).toFixed(2)}</td>
                        <td>{(5 * lipoData[1]).toFixed(2)}</td>
                        <td>{(5 * lipoData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>6S</th>
                        <td>{(6 * lipoData[0]).toFixed(2)}</td>
                        <td>{(6 * lipoData[1]).toFixed(2)}</td>
                        <td>{(6 * lipoData[2]).toFixed(2)}</td>
                    </tr>
                </table>

Todo: 
lijst maken ipv tabel 
opacity: 0 wordt niet voorgelezen 

                <h3>
                    Lithium Ion
                </h3>
                <table className='lionTable'>
                    <tr>
                        <th>Number of cells</th>
                        <th>Full (V)</th>
                        <th>Storage (V)</th>
                        <th>Landing at (V)</th>
                    </tr>
                    <tr>
                        <th>1S</th>
                        <td>{lionData[0].toFixed(2)}</td>
                        <td>{lionData[1].toFixed(2)}</td>
                        <td>{lionData[2].toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>2S</th>
                        <td>{(2 * lionData[0]).toFixed(2)}</td>
                        <td>{(2 * lionData[1]).toFixed(2)}</td>
                        <td>{(2 * lionData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>3S</th>
                        <td>{(3 * lionData[0]).toFixed(2)}</td>
                        <td>{(3 * lionData[1]).toFixed(2)}</td>
                        <td>{(3 * lionData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>4S</th>
                        <td>{(4 * lionData[0]).toFixed(2)}</td>
                        <td>{(4 * lionData[1]).toFixed(2)}</td>
                        <td>{(4 * lionData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>5S</th>
                        <td>{(5 * lionData[0]).toFixed(2)}</td>
                        <td>{(5 * lionData[1]).toFixed(2)}</td>
                        <td>{(5 * lionData[2]).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th>6S</th>
                        <td>{(6 * lionData[0]).toFixed(2)}</td>
                        <td>{(6 * lionData[1]).toFixed(2)}</td>
                        <td>{(6 * lionData[2]).toFixed(2)}</td>
                    </tr>
                </table>
            </div >
        )
    }
}

export default DroneSubjectPage;