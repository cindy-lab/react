import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
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

function Media2(detail) {
  const details = detail;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
  
    <Card className={classes.card}>
      <CardHeader
        avatar={
            <Avatar
            alt="sample stargaze"
            src={details.imageURL}
          />
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ <Skeleton height={6} width="80%" /> }
        subheader={<Skeleton height={6} width="40%" /> }
      />
      {  <CardMedia
            className={classes.media}
            image={details.imageURL}
            title={details.imageDescription}
          />}

      <CardContent>
        { <Typography variant="body2" color="textSecondary" component="p">
              {
                details.imageDescription
              }
            </Typography>}
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
    </div>
  );
}
//i change it into media2 from media
// const Facebook = (props,detail) => {
//   return (
//     <div>
//         <Media2 detail={detail} props={props} />
//     </div>
//   );
// }


let Skeleton = (detail)=>{
    return(
               <div>
               {console.log(detail)}
            <Media2 detail = {detail} />
           </div>
           )
}
// class Skeleton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             details:{}
//         }
//    
//     componentDidMount() {
//         this.setState({
//             details :this.props.details
//         });
//     }

//   render () {
//    return(
//        <div>
//        {console.log(this.state.details)}
//     <Media2 detail = {this.state.details} />
//    </div>
//    )
//   }
//  }

export default Skeleton