import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function SimpleRating() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box  component="fieldset" mb={0} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating size="small" 
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      
    </div>
  );
}
