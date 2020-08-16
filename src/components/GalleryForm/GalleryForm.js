import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class GalleryForm extends Component{
    render() {
        return(
            <>
            <h2>Add Movie</h2>
            <form onSubmit={this.props.handleSubmit}>
                <TextField size="small" id="outlined-basic" label="Movie Poster URL" 
                variant="outlined" value={this.props.newMovie.path} onChange={(event)=>this.props.handleChangeFor(event, 'path')}/>
                <TextField size="small" id="outlined-basic" label="Title/Description" 
                variant="outlined" value={this.props.newMovie.description} onChange={(event)=>this.props.handleChangeFor(event, 'description')}/>
                <Button variant="contained" color="primary" type="submit" onClick={this.props.addMovie}>Add Movie</Button>
            </form>
            </>
            
        )
    }
};

export default GalleryForm;