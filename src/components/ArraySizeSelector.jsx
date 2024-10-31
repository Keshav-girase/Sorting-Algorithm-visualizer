// src/components/ArraySizeSelector.jsx
import React from 'react';
import { TextField } from '@mui/material';

const ArraySizeSelector = ({ onSizeChange }) => {
    return (
        <TextField
            type="number"
            label="Array Size"
            onChange={(e) => onSizeChange(Number(e.target.value))}
            defaultValue={10}
            inputProps={{ min: 5, max: 100 }}
            variant="outlined"
            fullWidth
            margin="normal"
        />
    );
};

export default ArraySizeSelector;
