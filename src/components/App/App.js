import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.js';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm.js';

class App extends Component {
  componentDidMount() {
    this.getGalleryList();
  };

  state = {
    gallery:[],
    newMovie: {
      path:'',
      description:''
    }
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
    let likes = image.likes;
    likes += 1;
    axios.put(`/gallery/like/${image.id}`, {newLikes: likes})
    .then(response => {
      this.getGalleryList();
    }).catch(error => {
      console.log('error in PUT:', error)
    });
  };

  deleteMovie = (image) => {
    axios.delete(`/gallery/${image.id}`)
    .then(response => {
      this.getGalleryList();
    }).catch(error => {
      console.log('error in DELETE:', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of great movies</h1>
        </header>
        <GalleryForm />
        <br/>
        <GalleryList gallery={this.state.gallery} updateLikes={this.updateLikes} 
        deleteMovie={this.deleteMovie}/>
      </div>
    );
  }
}

export default App;
