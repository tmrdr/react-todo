import React, { Component } from 'react';
import './App.css';

//Components
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List items={["walk dog", "eat sandwich", "do code"]} />
      </div>
    );
  }
}

export default App;
