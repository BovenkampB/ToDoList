import React, { Component } from 'react';
import './../css/App.css';



class ToDoList extends Component {
  render() {
    return (
      <div>
        <h1>This should be done today</h1>
        <ul className='todoList'>

          {this.props.items.map(item => (
            <li className='todoListItem' key={item.id}>
              <input type="checkbox" onChange={this.handleChange} class="todoCheckbox"></input>
              {item.text}
            </li>
          ))}
        </ul>

      </div>
    );
  }

  handleChange(e) {
    console.log(e.target);
    // if (checkIfEverythingIsCheckedOff()){
    //   console.log("good job finishing all todo's! ")
    // }


     

    
  }

  // checkIfEverythingIsCheckedOff() {
  //   let checkboxes = document.getElementsByClassName("todoCheckbox");
  //   if (checkboxes != null) {
  //     for (let index = 0; index < checkboxes.length; index++) {
  //       const checkbox = checkboxes[index];
  //       if (checkbox = false) {
  //         return false;
  //       }
  //     }
  //   }
  // }

}




export default ToDoList;