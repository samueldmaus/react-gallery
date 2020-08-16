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
      console.log('error in GET:', error);
    });
  };

  updateLikes = (image) => {
    axios.put(`/gallery/like/${image.id}`)
    .then(response => {
      this.getGalleryList();
    }).catch(error => {
      console.log('error in PUT:', error)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of great movies</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.gallery} updateLikes={this.updateLikes} />
      </div>
    );
  }
}

export default App;
