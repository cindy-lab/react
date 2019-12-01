import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Skeleton from '../Skeleton';
import Card from "./Card";
import axios from 'axios';
import ImageUpload from './ImageUpload';

const drawerWidth = "100%";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    width: 300,
    flexShrink: 0,
    
  },
  uploadimage:{
    paddingTop:'12%',
    
  },
  toolbar: theme.mixins.toolbar,
}));

// componentDidMount() {
//   this.renderPosts();
// }

// renderPosts = async() => {
//   try {
//     let res = await axios.get('/posts');
//     let posts = res.data;
//     // this will re render the view with new data
//     this.setState({
//       Posts: posts.map((post, i) => (
//         <li key={i} className="list-group-item">{post.text}</li>
//       ))
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// render() {
//   return (
//     <div>
//       <ul className="list-group list-group-flush">
//         {this.state.Posts}
//       </ul>
//     </div>
//   );
// }
export default function StarFeed() {


//  const myComponent = actions.map((action, i) => {
//     return <Component/>
// })


  const classes = useStyles();
  return (
    <div>
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent" >
      </Drawer> 
   
   
      <main >
        <div className={classes.uploadimage}>
        {/* <ImageUpload /></div>
        {/* <Skeleton/> */}
        { axios.get('http://localhost:5000/getImages') */}
  //    .then(res => {
  //  return   <ul>
  //    { res.data.map((post)=>{
  //       return (
  //        <li> <Card key={post.id} {...post} /> </li>
  //       );
  //     })}
  //     </ul>
  //   }).catch(err=>{
  //   return  <div>Failed to load feeds</div>
  //   })}
    //        <span>
   
    // </span>
 
      // </main> 
      </div>
      </div>
  );
}