import React, {Component} from 'react';

class GalleryItem extends Component{
    render(){
        return(
            <div>
            <img src={this.props.image.path} alt={this.props.image.description} />
            <br/>
            <button>Love It!</button>
            <p>{this.props.image.likes} people love this!</p>
            </div>
        )
    }
};

export default GalleryItem;