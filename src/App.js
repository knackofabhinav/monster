import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'John',
          id: 'adfsdf'
        },
        {
          name: 'Gea',
          id: 'adffdsdf'
        },
        {
          name: 'Johdfdfn',
          id: 'adfsdfdfd'
        }
      ]
    };
  }

  render() {
    return(
      <div className="App">
        {this.state.monsters.map(monsters => (
          <h1 key={monsters.id}> {monsters.name} </h1>
        ))}
      </div>
    )
  }
}

export default App;
