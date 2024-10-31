// src/hooks/useSorting.js

import { useState, useEffect } from 'react';

const useSorting = (array, algorithm, speed) => {
    const [sortedArray, setSortedArray] = useState([]);
    const [timeComplexity, setTimeComplexity] = useState('');
    const [totalTime, setTotalTime] = useState(0);
    
    const sortAlgorithms = {
        bubbleSort: async (arr) => {
            const newArr = [...arr];
            const startTime = performance.now();
            const n = newArr.length;
            let timeComplexity = 'O(n^2)'; // Time complexity for bubble sort

            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (newArr[j] > newArr[j + 1]) {
                        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]; // Swap
                    }
                    await new Promise(resolve => setTimeout(resolve, 1000 / speed)); // Delay for visualization
                }
            }
            const endTime = performance.now();
            setTotalTime(((endTime - startTime) / 1000).toFixed(2)); // Total time taken in seconds
            setTimeComplexity(timeComplexity);
            return newArr;
        },
        // Add other sorting algorithms similarly...
    };

    const sort = async () => {
        if (!array.length || !algorithm) return;
        let sorted;
        
        switch (algorithm) {
            case '1':
                sorted = await sortAlgorithms.bubbleSort(array);
                break;
            // Add cases for other algorithms
            default:
                break;
        }

        setSortedArray(sorted);
    };

    useEffect(() => {
        if (array.length) {
            sort();
        }
    }, [array, algorithm, speed]);

    return { sortedArray, timeComplexity, totalTime };
};

export default useSorting;
