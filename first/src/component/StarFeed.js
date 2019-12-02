import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Skeleton from '../Skeleton';
import Header from './StarPage';
// import imageUpload from './component/uploadPhoto';

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
// class StarFeed extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       image : Object,
//       imageDescription : String,
//     }
//   }

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
  
    // <div>
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Skeleton/>
        <Header/>
        {/* <imageUpload /> */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
      <Drawer
        className={classes.drawer1}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper1,
        }}
        anchor="right"
      >
      </Drawer>
    </div>
  );
}