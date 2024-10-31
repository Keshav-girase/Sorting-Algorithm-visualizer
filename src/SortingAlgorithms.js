const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const bubbleSort = async (array, setArray, speed, setColors) => {
    const arr = [...array];
    const colors = Array(arr.length).fill('#3f51b5'); // Default color
    const swapColor = '#f44336'; // Color for swapped elements
    const highlightColor = '#ff9800'; // Color for comparing elements

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Highlight the elements being compared
            colors[j] = highlightColor;
            colors[j + 1] = highlightColor;
            setColors([...colors]);
            await delay(speed);

            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                colors[j] = swapColor; // Highlight swapped element
                colors[j + 1] = swapColor; // Highlight swapped element
                setArray([...arr]);
                await delay(speed);
            }

            // Reset color after comparison
            colors[j] = '#3f51b5';
            colors[j + 1] = '#3f51b5';
            setColors([...colors]);
        }

        // Mark the sorted element
        colors[arr.length - 1 - i] = '#4caf50'; // Green for sorted elements
        setColors([...colors]);
    }
    // Mark final sorted element
    colors[0] = '#4caf50';
    setColors([...colors]);
    setArray(arr);
};

export const selectionSort = async (array, setArray, speed, setColors) => {
    let arr = [...array];
    const n = arr.length;
    const colors = Array(arr.length).fill('#3f51b5');

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        colors[i] = '#f44336'; // Highlight current index
        setColors([...colors]);

        for (let j = i + 1; j < n; j++) {
            colors[j] = '#ff9800'; // Highlight comparison
            setColors([...colors]);
            await delay(speed);

            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minimum index
            }

            colors[j] = '#3f51b5'; // Reset color after comparison
            setColors([...colors]);
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap minimum element
            setArray([...arr]);
            colors[i] = '#4caf50'; // Mark as sorted
            setColors([...colors]);
            await delay(speed);
        }
        colors[minIndex] = '#3f51b5'; // Reset minIndex color after swap
    }
    colors[n - 1] = '#4caf50'; // Mark last element as sorted
    setColors([...colors]);
    setArray(arr);
};

export const insertionSort = async (array, setArray, speed, setColors) => {
    let arr = [...array];
    const n = arr.length;
    const colors = Array(arr.length).fill('#3f51b5');

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        colors[i] = '#ff9800'; // Highlight current element
        setColors([...colors]);

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            colors[j + 1] = '#f44336'; // Highlight shift
            setArray([...arr]);
            setColors([...colors]);
            await delay(speed);
            j--;
        }

        arr[j + 1] = key;
        setArray([...arr]);
        colors[i] = '#3f51b5'; // Reset current element color
        colors[j + 1] = '#4caf50'; // Mark as sorted
        setColors([...colors]);
        await delay(speed);
    }
    colors[0] = '#4caf50'; // Mark the first element as sorted
    setColors([...colors]);
};

export const mergeSort = async (array, setArray, speed, setColors) => {
    const arr = array.slice();

    const merge = async (left, right, lowIndex, midIndex, highIndex) => {
        let sorted = [];
        let l = 0;
        let r = 0;

        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                sorted.push(left[l++]);
            } else {
                sorted.push(right[r++]);
            }
        }

        sorted = [...sorted, ...left.slice(l), ...right.slice(r)];

        for (let i = lowIndex; i <= highIndex; i++) {
            arr[i] = sorted[i - lowIndex];
            setArray([...arr]);
            setColors((prevColors) => {
                const updatedColors = [...prevColors];
                updatedColors[i] = '#f44336'; // Color the merging elements
                return updatedColors;
            });
            await delay(speed);
        }

        for (let i = lowIndex; i <= highIndex; i++) {
            setColors((prevColors) => {
                const updatedColors = [...prevColors];
                updatedColors[i] = '#4caf50'; // Mark elements as sorted
                return updatedColors;
            });
        }

        return sorted;
    };

    const mergeSortHelper = async (lowIndex, highIndex) => {
        if (lowIndex >= highIndex) return [arr[lowIndex]];

        const midIndex = Math.floor((lowIndex + highIndex) / 2);
        const left = await mergeSortHelper(lowIndex, midIndex);
        const right = await mergeSortHelper(midIndex + 1, highIndex);
        return await merge(left, right, lowIndex, midIndex, highIndex);
    };

    await mergeSortHelper(0, arr.length - 1);
};

export const quickSort = async (array, setArray, speed, setColors) => {
    let arr = array.slice();

    const partition = async (arr, low, high) => {
        let pivot = arr[high];
        let i = low - 1;
        setColors((prevColors) => {
            const updatedColors = [...prevColors];
            updatedColors[high] = '#ff9800'; // Highlight pivot
            return updatedColors;
        });

        for (let j = low; j < high; j++) {
            setColors((prevColors) => {
                const updatedColors = [...prevColors];
                updatedColors[j] = '#ff9800'; // Highlight comparison
                return updatedColors;
            });
            await delay(speed);

            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                setColors((prevColors) => {
                    const updatedColors = [...prevColors];
                    updatedColors[i] = '#f44336'; // Highlight swap
                    return updatedColors;
                });
                await delay(speed);
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setArray([...arr]);
        await delay(speed);
        return i + 1;
    };

    const quickSortHelper = async (arr, low, high) => {
        if (low < high) {
            let pi = await partition(arr, low, high);
            await quickSortHelper(arr, low, pi - 1);
            await quickSortHelper(arr, pi + 1, high);
        }
    };

    await quickSortHelper(arr, 0, arr.length - 1);
};
