import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

export default class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }  
    _handleSubmit(e) {
      // e.preventDefault();
      // // TODO: do something with -> this.state.file
      // console.log('handle uploading-', this.state.file);
      e.preventDefault();
      var data = new FormData();
      data.append('img', this.state.file);
  
      axios.post(`http://localhost:4000/uploads`,
          data
        ).then(res => {
          console.log(res);
        })
        .catch(error => {
          console.error("file upload failed", error);
        });
  
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    
    }
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }  
    render() {
      return (
        <div>
          <PostAddIcon />
          
          <Typography variant="h4">What's new with Star?</Typography>
          {/* <PhotoCameraIcon /> */}
          <div>
            <input className="PhotoInput" 
              type="file" 
              name="img"
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </div>
        </div>
      )
    }
  }
    
 