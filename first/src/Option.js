import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
// import DvrIcon from '@material-ui/icons/Dvr';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import BuildIcon from '@material-ui/icons/Build';

export default function Option() {
    return(
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary='StarFeed'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EqualizerIcon/>
            </ListItemIcon>
            <ListItemText primary='Stats'/>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BuildIcon/>
            </ListItemIcon>
            <ListItemText primary='Settings'/>
          </ListItem>
        </List>
    )
}