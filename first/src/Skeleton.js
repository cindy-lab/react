import React from 'react';
import ReactDOM from 'react-dom';
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
import ImageUpload from './component/ImageUpload';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: theme.spacing(2),
  },
  media: {
    height: 490,
  },
  star: {
    margin: 1,
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


function Media2(props,detail) {
  console.log("media");
  
  console.log(detail);
  
  const details = detail;
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
                src={details.imageURL}
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
            image={details.imageURL}
            title={details.imageDescription}
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
                details.imageDescription
              }
            </Typography>

          )}
        <Box component="fieldset" mb={3} borderColor="transparent">
          {/* <Typography component="legend">Rate</Typography> */}
          <Rating
            name="hover-tooltip"
            size="large"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}

            IconContainerComponent={IconContainer}
          />
        </Box>

      </CardContent>
    </Card>

  );
}
//i change it into media2 from media
Media2.propTypes = {
  loading: PropTypes.bool,
};
const Facebook = (props) => {
  return (
    <div>
        <Media2 details={props} />
    </div>
  );
}


export default Facebook