// src/components/Footer.jsx
import React from 'react';
import { Typography } from '@mui/material';

const Footer = ({ timeComplexity, totalTime }) => {
    return (
        <div>
            <div style={{ marginTop: '20px' }}>
                <Typography variant="h6">Time Complexity: {timeComplexity}</Typography>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Typography variant="h6">Total Time: {totalTime}</Typography>
            </div>
        </div>
    );
};

export default Footer;
