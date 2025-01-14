import React ,{useEffect,useState } from 'react';
// import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Skeleton from '../Skeleton';
import Uploadimage from './ImageUpload'
import axios from 'axios';
import Store from "./store"
const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
}));
export default function ClippedDrawer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await axios(
        'http://localhost:4000/uploads/post/'+localStorage.getItem('query'),
        );
        setData(result.data)
    }
    fetchData();
  },[]); 
  Store.feeds = data;
  const classes = useStyles();
  return (
    <div className={classes.root}>
 
      <Drawer
        className={classes.drawer}
        variant="permanent" >
      </Drawer>
      <main >
        <div className={classes.toolbar} />
        <Uploadimage />

        {Store.feeds.map(detail => {
          return <Skeleton key={detail._id}  props={detail} />
        })}
      </main>
    </div>
  );
}

