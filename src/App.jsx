import React, { useState, useEffect } from 'react';
import ArrayVisualizer from './components/ArrayVisualizer';
import AlgorithmSelector from './components/AlgorithmSelector';
import ArraySizeSelector from './components/ArraySizeSelector';
import SpeedSelector from './components/SpeedSelector';
import Footer from './components/Footer';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from './SortingAlgorithms';
import { AppBar, Toolbar, Container, Button, Typography, Grid, Box, Paper, Card, CardContent } from '@mui/material';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';

const App = () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('Bubble Sort');
    const [size, setSize] = useState(15);
    const [speed, setSpeed] = useState(500); // Adjust speed for better visualization
    const [timeComplexity, setTimeComplexity] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    const [colors, setColors] = useState([]);

    const algorithms = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort'];

    const defaultColor = '#3f51b5'; // Default bar color (Material UI primary color)
    const compareColor = '#f44336';  // Red color for comparing elements
    const sortedColor = '#4caf50';   // Green color for sorted elements

    useEffect(() => {
        generateArray();
    }, [size]);

    const generateArray = () => {
        const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
        setArray(newArray);
        setColors(new Array(size).fill(defaultColor));
    };

    const handleSort = async () => {
        if (!algorithm) {
            alert('Please select a sorting algorithm.');
            return;
        }

        let startTime = performance.now();

        switch (algorithm) {
            case 'Bubble Sort':
                await bubbleSort(array, setArray, speed, setColors, compareColor, sortedColor);
                setTimeComplexity('O(n^2)');
                break;
            case 'Selection Sort':
                await selectionSort(array, setArray, speed, setColors, compareColor, sortedColor);
                setTimeComplexity('O(n^2)');
                break;
            case 'Insertion Sort':
                await insertionSort(array, setArray, speed, setColors, compareColor, sortedColor);
                setTimeComplexity('O(n^2)');
                break;
            case 'Merge Sort':
                await mergeSort(array, setArray, speed, setColors, compareColor, sortedColor);
                setTimeComplexity('O(n log n)');
                break;
            case 'Quick Sort':
                await quickSort(array, setArray, speed, setColors, compareColor, sortedColor);
                setTimeComplexity('O(n log n)');
                break;
            default:
                break;
        }

        let endTime = performance.now();
        setTotalTime((endTime - startTime).toFixed(2) + ' ms');
    };

    return (
        <Box>
            {/* Header Section */}
            <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        Sorting Algorithm Visualizer
                    </Typography>
                </Toolbar>
            </AppBar>

            

            <Container maxWidth="lg" sx={{ marginTop: '30px' }}>
                <Grid container spacing={3}>
                    {/* Control Panel (Left) */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Control Panel
                                </Typography>

                                {/* Algorithm Selector */}
                                <AlgorithmSelector algorithms={algorithms} onAlgorithmChange={setAlgorithm} />

                                {/* Array Size Selector */}
                                <ArraySizeSelector onSizeChange={setSize} />

                                {/* Speed Selector */}
                                <SpeedSelector onSpeedChange={setSpeed} />

                                {/* Action Buttons */}
                                <Box mt={2}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={generateArray}
                                        fullWidth
                                        sx={{ marginBottom: '10px' }}
                                    >
                                        Generate New Array
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={handleSort} fullWidth>
                                        Sort
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Array Visualizer (Center) */}
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} sx={{ padding: '20px', height: '400px' }}>
                            <ArrayVisualizer array={array} colors={colors} />
                        </Paper>
                    </Grid>
                </Grid>

                {/* Footer */}
                <Footer timeComplexity={timeComplexity} totalTime={totalTime} />
            </Container>

            <SocialMedia/>
        </Box>
    );
};

export default App;
