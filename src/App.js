import React, { Component } from 'react';
import {Cardlist} from './components/cardlist/cardlist';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    // what the super does is call construction function in React Component
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }

  // with the arrow function, we dont need to bind this method, "this" automaticly points to this method
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    // const above will return this its call destructuring
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster =>
      // includes will return true or false 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );


    return (
      <div className="App">
        <h2>Wild Monster</h2>
        <SearchBox 
          placeholder="search monster.." 
          handleChange={this.handleChange} 
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
