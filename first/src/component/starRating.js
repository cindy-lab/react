import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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


export default function HoverRating() {
  const [value, setValue] = React.useState(0);


  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate</Typography>
        <Rating
         name="simple-controlled"
          size = "large"
          value={value}
          onChange = {(event, newValue) => {
            setValue(newValue);
            
          }}
         
          IconContainerComponent={IconContainer}
        />
      </Box>
    </div>
  );
}
