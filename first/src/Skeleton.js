import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import starRating from './component/starRating';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: theme.spacing(2),
  },
  media: {
    height: 490,
  },
  star: {
    margin:1,
  }
}));

const labels = {
  
  1: 'Nice',
 
  2: 'Good',

  3: 'Better',

  4: 'Best',
  
  5: 'Excellent',
};

function IconContainer(props) {
  const { value, ...other } = props;

  return (
    <Tooltip title={labels[value] || ''}>
      <span {...other} />
    </Tooltip>
  );
}


function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <Avatar
              alt="sample stargaze"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={loading ? <Skeleton height={6} width="80%" /> : 'sample pose'}
        subheader={loading ? <Skeleton height={6} width="40%" /> : '5 hours ago'}
      />
      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5lgWceoj3kpz9-ZdxtTiQNjxYP05kxMnfmc4jaToGleCTh53P"
          title="sample pose"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={6} />
            <Skeleton height={6} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              "This is why we live for life: Discovering our new you is the best achievement and accomplishment in your part"
            }
          </Typography>
        )}
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={classes.star}
        />
      </Box>
      </CardContent>
    </Card>
  );
}


function Media2(props) {
  const { loading = false } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <Avatar
              alt="sample stargaze"
              src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={loading ? <Skeleton height={6} width="80%" /> : 'sample pose'}
        subheader={loading ? <Skeleton height={6} width="40%" /> : '10 hours ago'}
      />
      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSogaFKkN43MdizRpUi3sVyiFSgWJlfFuvBI7E995FK2VIvU1yQ"
          title="sample pose"
        />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={6} />
            <Skeleton height={6} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              "Be brave and be bold no matter what failure of chances may face in your passion"
            }
          </Typography>
          
        )}
        {/* <Box >
        <Rating
          name="simple-controlled"
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          IconContainerComponent={IconContainer}
        />
        
         </starRating>
      </Box> */}
        <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Rate</Typography> */}
        <Rating
          name="hover-tooltip"
          size = "large"
          value={value}
          onChange = {(event, newValue) => {
            setValue(newValue);
          }}
         
          IconContainerComponent={IconContainer}
        />
      </Box>
      
      </CardContent>
    </Card>
    
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div>
      <Media />
      <Media2/>
      <Media loading />
    </div>
  );
}
