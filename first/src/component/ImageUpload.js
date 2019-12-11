import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Form, Input, Card, Button, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import fs from 'fs';
import Store from "./store";
const base = 'http://localhost:4000/uploads/';

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imageDescription: ""
    };
  }


  // onSubmit = (e) => {
  //   e.preventDefault();

  //   if(!this.state.file.files){
  //     var file = fs.readFileSync(this.state.file.path);
  //     console.log(file);

  //   }
  //   let url = 'http://localhost:4000/' + this.state.file.filename;
  //   const data = {
  //     userId : this.state.user._id,
  //     imageDescription : this.state.imageDescription,
  //     imageURL: url,
  //     imageData : req.file.path,
  //     created_at:new Date()
  //   };
  //   axios.post(`${base}uploadmulter`, data)
  //     .then((response) => {
  //       alert("The file is successfully uploaded");
  //     }).catch((error) => {

  //     });

  // }
  _handleSubmit(e) {
    // e.preventDefault();
    // // TODO: do something with -> this.state.file
    // console.log('handle uploading-', this.state.file);
    e.preventDefault();
    var data = new FormData();
    data.append('image', this.state.file);
    data.append('imageDescription', this.state.imageDescription);

    axios.post(`http://localhost:4000/uploads/uploadmulter`,
      data
    ).then(res => {
      Store.feeds.push(res);
      this.setState({ imageDescription: "", file: "" })

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
  onChange = (e) => {
    this.setState({ imageDescription: e.target.value });
  }
  render() {
    return (
      <div>

        <Form.TextArea placeholder='What is new with Star?'
          value={this.state.imageDescription}
          required
          onChange={e => this.setState({ imageDescription: e.target.value })}
          style={{
            width: 500,
            height: 60,
            fontSize: 20,
            marginTop: 35
          }}
        // required
        />
        <div>
          <input className="PhotoInput"
            type="file"
            name="img"
            key={this.state.file}
            onChange={(e) => this._handleImageChange(e)}        
          />
          <button className="submitButton"
            disabled ={this.state.file === "" && this.state.imageDescription === ""}
            onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
            
        </div>
      </div>
    );
  }
}

