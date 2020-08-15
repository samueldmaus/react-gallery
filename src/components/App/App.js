import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    this.getGalleryList();
  };

  state = {
    gallery:[]
  };

  getGalleryList = () => {
    axios.get('/gallery')
    .then(response => {
      this.setState({
        gallery: response.data
      })
    }).catch(error => {
      console.log('error in GET:', error)
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
