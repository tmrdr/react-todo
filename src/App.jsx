import React, { Component } from 'react';
import './App.css';

//Components
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">

        <List items={["eat dog", "walk sandwich", "return video tapes", "etc..", ]} />
      </div>
    );
  }
}

export default App;
