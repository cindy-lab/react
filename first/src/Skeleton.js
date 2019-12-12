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
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

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

// function Media(props) {
//   console.log("");

//   const { loading = false } = props;
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <div>
//       <Card className={classes.card}>
//         <CardHeader
//           avatar={
//             loading ? (
//               <Skeleton variant="circle" width={40} height={40} />
//             ) : (
//                 <Avatar
//                   alt="sample stargaze"
//                   src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg"
//                 />
//               )
//           }
//           action={
//             loading ? null : (
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />

//               </IconButton>

//             )
//           }
//           title={loading ? <Skeleton height={6} width="80%" /> : this.state.imageDescription}
//           subheader={loading ? <Skeleton height={6} width="40%" /> : '5 hours ago'}
//         />
//         {loading ? (
//           <Skeleton variant="rect" className={classes.media} />
//         ) : (
//             <CardMedia
//               className={classes.media}
//               image="http://localhost:400/uploads/uploadmulter"
//               title={this.state.ima}
//             />
//           )}
//         <CardContent>
//           {loading ? (
//             <React.Fragment>
//               <Skeleton height={6} />
//               <Skeleton height={6} width="80%" />
//             </React.Fragment>
//           ) : (
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {/* {
//                   "This is why we live for life: Discovering our new you is the best achievement and accomplishment in your part"
//                 } */}
//               </Typography>
//             )}
//           <Box component="fieldset" mb={3} borderColor="transparent">
//             <Rating
//               name="hover-tooltip"
//               size="large"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}

//               IconContainerComponent={IconContainer}
//             />
//             {/* <starRating/> */}
//           </Box>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// const handleClick = (e ) => {
//   console.log(e.target.value);
//   console.log(e)

  
//   // ( newValue) => {
//   //   console.log(event)
//   //   setValue(newValue);
//   //   var user = JSON.parse(localStorage.getItem("user"))
//   //   axios.get(`http://localhost:4000/uploads/rate/${user._id}/${details._id}/${newValue}`).
//   //   then(res=>{
//   //     console.log(res)
//   //   })
//   //   .catch(err=>{
//   //     console.log(err)

//   //   })

//   //   return 0
//   // }
// }

function Media2(props) {
  const details = props.details.props;
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
        title={loading ? <Skeleton height={6} width="80%" /> : details.user}
        subheader={new Date(details.created_at).toDateString()
      }
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

     
        {/* <Rating
          name="simple-controlled"
          value={value}
          id={details._id}
          size="large"
          onClick={handleClick.bind(this)}
        /> */}
      
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            size="large"
            _id={details._id}
            value={!details.ratings?0:details.ratings}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}

            IconContainerComponent={IconContainer}
          />
  
        </Box>    */}

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

