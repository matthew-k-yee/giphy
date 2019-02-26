import React, { Component } from 'react';
import axios from 'axios'
import Display from './components/Display'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      trending: []
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

  render() {
    return (
      <div className="App">
      <Display trending={this.state.trending}/>
      </div>
    );
  }
}

export default App;
