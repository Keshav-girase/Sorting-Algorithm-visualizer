// src/components/SpeedSelector.jsx
import React from 'react';
import { Slider } from '@mui/material';

const SpeedSelector = ({ onSpeedChange }) => {
    return (
        <Slider
            defaultValue={100}
            step={50}
            min={50}
            max={1000}
            marks
            valueLabelDisplay="auto"
            onChange={(e, value) => onSpeedChange(value)}
            style={{ margin: '20px' }}
        />
    );
};

export default SpeedSelector; // Ensure default export is present
