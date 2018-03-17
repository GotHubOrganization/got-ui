import React, { Component } from 'react';
import './App.css';
import { DataEditorComponent } from '../data-editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataEditorComponent />
      </div>
    );
  }
}

export default App;
