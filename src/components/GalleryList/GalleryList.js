import React, {Component} from 'react';

class GalleryList extends Component{
    render() {
        return(
            <>
                {this.props.gallery.map(image => (
                    <div>
                    <img src={image.path} alt={image.description} />
                    <br/>
                    <button>Love It!</button>
                    <p>{image.likes} people love this!</p>
                    </div>
                ))}
            </>
        )
    }
};

export default GalleryList;