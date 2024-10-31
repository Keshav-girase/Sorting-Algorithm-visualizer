
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem, Box } from '@mui/material';

const Navbar = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }} onClick={handleReload}>
                    Sorting Algorithm Visualizer
                </Typography>
                <Button onClick={() => RenderScreen()} color="inherit">Generate Array</Button>
                <Select className="algo-menu" defaultValue={0}>
                    <MenuItem value={0}>Choose Algorithm</MenuItem>
                    <MenuItem value={1}>Bubble Sort</MenuItem>
                    <MenuItem value={2}>Selection Sort</MenuItem>
                    <MenuItem value={3}>Insertion Sort</MenuItem>
                    <MenuItem value={4}>Merge Sort</MenuItem>
                    <MenuItem value={5}>Quick Sort</MenuItem>
                </Select>
                <Select className="size-menu" defaultValue={10}>
                    <MenuItem value={0}>Array Size</MenuItem>
                    {[5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(size => (
                        <MenuItem key={size} value={size}>{size}</MenuItem>
                    ))}
                </Select>
                <Select className="input" defaultValue="N">
                    <MenuItem value="N">Input</MenuItem>
                    <MenuItem value="Y">Yes</MenuItem>
                    <MenuItem value="N">No</MenuItem>
                </Select>
                <Select className="speed-menu" defaultValue={0}>
                    <MenuItem value={0}>Speed</MenuItem>
                    {[0.5, 0.75, 1, 2, 4].map(speed => (
                        <MenuItem key={speed} value={speed}>{speed}x</MenuItem>
                    ))}
                </Select>
                <Button className="start" color="inherit">Sort</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
