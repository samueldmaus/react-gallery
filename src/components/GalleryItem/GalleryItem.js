import React, {Component} from 'react';
import './GalleryItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
           
            <IconButton onClick={()=>this.props.updateLikes(this.props.image)} aria-label="favorite">
                <FavoriteIcon/></IconButton>
            

            <IconButton onClick={()=>this.props.deleteMovie(this.props.image)} aria-label="delete">
                <DeleteIcon/></IconButton>

            
            <p>{this.props.image.likes} people love this!</p>
            </div>
        )
    }
};

export default GalleryItem;