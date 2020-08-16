import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class GalleryForm extends Component{
    render() {
        return(
            <>
            <h2>Add Movie</h2>
            <form>
                <TextField id="outlined-basic" label="Movie" variant="outlined" placeholder="Movie URL"/>
                <TextField id="outlined-basic" label="Title" variant="outlined" placeholder="Movie Title/Description"/>
                <Button variant="contained" color="primary">Add Movie</Button>
            </form>
            </>
            
        )
    }
};

export default GalleryForm;