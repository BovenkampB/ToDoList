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


                <div className='table'>
                    <ul className='row header'>
                        <li className='cell'>Numbers of cells</li>
                        <li className='cell'>Full (V)</li>
                        <li className='cell'>Storage (V)</li>
                        <li className='cell'>Landing at (V)</li>      
                    </ul>
                    <ul className='row'>
                        <li className='cell'>1s</li>
                        <li className='cell'>4,20</li>
                        <li className='cell'>3,85</li>
                        <li className='cell'>3,10</li>      
                    </ul>
                    <ul className='row'>
                        <li className='cell'>2s</li>
                        <li className='cell'>8,40</li>
                        <li className='cell'>7,70</li>
                        <li className='cell'>6,20</li>      
                    </ul>
                    <ul className='row'>
                        <li className='cell'>3s</li>
                        <li className='cell'>12,60</li>
                        <li className='cell'>11,55</li>
                        <li className='cell'>9,30</li>      
                    </ul>
                    <ul className='row'>
                        <li className='cell'>4s</li>
                        <li className='cell'>16,80</li>
                        <li className='cell'>15,40</li>
                        <li className='cell'>12,40</li>      
                    </ul>
                    <ul className='row'>
                        <li className='cell'>5s</li>
                        <li className='cell'>21,00</li>
                        <li className='cell'>19,25</li>
                        <li className='cell'>15,50</li>      
                    </ul>
                    <ul className='row'>
                        <li className='cell'>6s</li>
                        <li className='cell'>25,20</li>
                        <li className='cell'>23,10</li>
                        <li className='cell'>18,60</li>      
                    </ul>
                </div>

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