import React from 'react';
import { Box, Tooltip } from '@mui/material';

const ArrayVisualizer = ({ array, colors }) => {
    // Dynamic bar width based on the array size
    const barWidth = Math.min(30, 600 / array.length); // Limits max width to 30px

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            height="400px"
            margin="20px"
        >
            {array.map((value, index) => (
                <Tooltip title={`Value: ${value}`} key={index} arrow>
                    <Box
                        sx={{
                            width: `${barWidth}px`,
                            height: `${value * 3}px`, // Adjust height scaling based on value
                            backgroundColor: colors[index],
                            margin: '0 2px',
                            transition: 'height 0.5s ease, background-color 0.5s ease',
                            '&:hover': {
                                backgroundColor: '#ff9800', // Highlight bar on hover
                            },
                        }}
                    />
                </Tooltip>
            ))}
        </Box>
    );
};

export default ArrayVisualizer;
