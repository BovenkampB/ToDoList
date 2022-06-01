import React, { Component, useState } from 'react';
import './../css/App.css';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import ToDoList from './ToDoList';
import Nav from './NavHeader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    let items = JSON.parse(localStorage.getItem('items'));
    this.setState(state => ({
      items: items,
      text: ''
    }));
  };

  render() {
    return (
      <div className="App">
        <Nav />

        <ToDoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>

          </label>
          <input id="new-todo" placeholder='Add new todo'
            onChange={this.handleChange}
            value={this.state.text} />

          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));

    localStorage.setItem("items", JSON.stringify(this.state.items.concat(newItem)));

  }

}

export default App;
