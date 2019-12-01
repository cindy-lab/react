import React from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Skeleton from '@material-ui/lab/Skeleton';

export default class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        card: {
            maxWidth: 600,
            margin: 2,
          },
          media: {
            height: 490,
          },
          star: {
            margin:1,
          }};
    }  
    



    render() {
      return (
        <div>
        <Card className={this.state.card}>
     <CardHeader
       avatar={
           (
               <Avatar
                 alt="sample stargaze"
                 src={this.props.avatar}
               />
             )
       }
       action={
           (
               <IconButton aria-label="settings">
                 <MoreVertIcon />
               
               </IconButton>
               
             )
       }
       title={ 'sample pose'}
       subheader={ '5 hours ago'}
     />
      <CardMedia
         className={this.state.media}
         image={this.props.post_image}
         title="sample pose"
       />


   </Card>
   </div>
      )
    }
  }
    
 