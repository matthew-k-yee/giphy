import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.getTrending()
  }

  getTrending = async () => {
    const request = await axios.get('http://api.giphy.com/v1/gifs/trending?&api_key=IgNewGfIvQ4HIAdoVCMLECMSjjUSKYBm&limit=1')
    const response = request.data
    console.log(response)
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
