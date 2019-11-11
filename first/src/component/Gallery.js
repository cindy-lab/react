import React from 'react';
import Header from '../Header';
import Option from '../Option';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Skeleton from '../Skeleton';
import { Divider, Image } from 'semantic-ui-react';



const drawerWidth = 200;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer1: {
    width: 350,
    flexShrink: 0,
  },
  drawerPaper1: {
    width: 350,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));


export default function ClippedDrawer() {
  const classes = useStyles();
  const src = 'https://previews.123rf.com/images/maykal/maykal1809/maykal180900291/107849936-wild-privet-ligustrum-hedge-close-up-nature-texture-a-sample-of-topiary-art.jpg'

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Stargaze
          </Typography>
        </Toolbar>
      </AppBar>
      <Header position="fixed" className={classes.appBar}/>
      <Header position="fixed" className={classes.appBar}/>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <Option/>
      </Drawer>
      <div>
    <Divider hidden />
    <Image.Group size='medium'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
    <Image.Group size='medium'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
    <Image.Group size='medium'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
  </div>
  </div>
  )}


