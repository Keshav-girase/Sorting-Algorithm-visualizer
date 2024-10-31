import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const InputBox = () => {
    return (
        <Box className="inputBoxParent" m={2}>
            <Typography variant="body1">Enter the array values separated with commas:</Typography>
            <TextField id="inputArr" name="inputArr" className="inputBox" variant="outlined" fullWidth />
        </Box>
    );
};

export default InputBox;
