import React, {Component} from 'react';
import './GalleryItem.css';

class GalleryItem extends Component{
    state = {
        showDescription: true
    };

    changeDescripton=()=>{
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    render(){
        return(
            <div className="moviePoster">
            {this.state.showDescription ? <img onClick={this.changeDescripton} src={this.props.image.path} 
            alt={this.props.image.description}/> : <p onClick={this.changeDescripton}>{this.props.image.description}</p>}
            <br/>
            <button className="deleteBtn" onClick={()=>this.props.updateLikes(this.props.image)}>Love It!</button>
            <p>{this.props.image.likes} people love this!</p>
            </div>
        )
    }
};

export default GalleryItem;