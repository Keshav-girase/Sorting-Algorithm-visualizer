// src/components/AlgorithmSelector.jsx
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AlgorithmSelector = ({ algorithms, onAlgorithmChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel>Sorting Algorithm</InputLabel>
            <Select onChange={(e) => onAlgorithmChange(e.target.value)}>
                {algorithms.map((alg, index) => (
                    <MenuItem key={index} value={alg}>
                        {alg}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default AlgorithmSelector;
