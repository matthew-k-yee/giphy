import React, { Component } from 'react';
import axios from 'axios'
import Display from './components/Display'
import Buttons from './components/Buttons'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      home: false,
      trending: [],
    })
  }

  componentDidMount = () => {
    this.getAllTrending()
  }

  getAllTrending = async () => {
    const request = await axios.get('http://api.giphy.com/v1/gifs/trending?&api_key=IgNewGfIvQ4HIAdoVCMLECMSjjUSKYBm&limit=10')
    const trending = request.data.data
    this.setState({
      trending
    })
  }

  loadTrending = e => {
    e.preventDefault()
    this.setState({
      home: true
    })
  }

  reverseOrder = e => {
    e.preventDefault()
    const trending = this.state.trending
    const reverse = trending.reverse()
    this.setState({
      trending: reverse
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Trending Gifs</h1>
      <Buttons 
        loadTrending={this.loadTrending}
        reverseOrder={this.reverseOrder}  
        />
      {this.state.home ? <Display trending={this.state.trending}/> : null}
      </div>
    );
  }
}

export default App;
