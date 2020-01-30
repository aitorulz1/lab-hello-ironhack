import React, { Component } from 'react';
import Slider from "./Slider.js";
import "./App.css";
import FeatureList from './FeatureList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider />
        <FeatureList />
      </div>
    )
  }
}

export default App