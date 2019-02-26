import React, { Component } from 'react';
import axios from 'axios'
import Display from './components/Display'
import Buttons from './components/Buttons'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      home: false,
      trending: [],
      copy: []
    })
  }

  componentDidMount = () => {
    this.getAllTrending()
  }

  getAllTrending = async () => {
    const request = await axios.get('http://api.giphy.com/v1/gifs/trending?&api_key=IgNewGfIvQ4HIAdoVCMLECMSjjUSKYBm&limit=10')
    const trending = request.data.data
    this.setState({
      trending: trending, 
      copy: trending
    })
  }


  loadTrending = e => {
    e.preventDefault()
    this.setState({
      home: true
    })
  }

  onlyOne = e => {
    e.preventDefault()
    const trending = this.state.copy
    let randomize = [trending[Math.floor(Math.random() * trending.length)]]
    this.setState({
      trending: randomize
    })
  }

  randomOrder = e => {
    e.preventDefault()
    const trending = this.state.trending
    for ( let i = trending.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = trending[i]
      trending[i] = trending[j]
      trending[j] = temp
    }
    this.setState({
      trending
    })
  }

  reverseOrder = (e) => {
    e.preventDefault()
    const trending = this.state.trending
    const reverse = trending.reverse()
    this.setState({
      trending: reverse
    })
  }

  clearScreen = e => {
    e.preventDefault()
    this.setState({
      home: false
    })
  }

  render() {
    return (
      <div className="App background">
      <h1>Trending GIFs courtesy of the <a href='https://github.com/Giphy/GiphyAPI' className='giphy'>Giphy API</a></h1>
      <Buttons 
        loadTrending={this.loadTrending}
        randomOrder={this.randomOrder}
        reverseOrder={this.reverseOrder}  
        clearScreen={this.clearScreen}
        onlyOne={this.onlyOne}
        />
      {this.state.home ? <Display trending={this.state.trending}/> : null}
      </div>
    );
  }
}

export default App;
