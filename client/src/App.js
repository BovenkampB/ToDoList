import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router-dom';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="To-do list" />
          <navigation>
            <Link to="/kennis">Kennis</Link> |{" "}
            <Link to="/calendar">Calendar</Link>

          </navigation>
        </header>

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
  }

}

export default App;
