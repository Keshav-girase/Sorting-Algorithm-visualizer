import React, { useEffect } from 'react';
import useSortingHelper from './useSorting';

const SortingAlgorithms = () => {
    const initialArray = [...Array(50).keys()].map(() => ({ value: Math.floor(Math.random() * 100) }));
    const { list, setList, mark, markSpl, unmark, compare, swap } = useSortingHelper(1, initialArray);

    const bubbleSort = async () => {
        const size = list.length;
        for (let i = 0; i < size - 1; ++i) {
            for (let j = 0; j < size - i - 1; ++j) {
                await mark(j);
                await mark(j + 1);
                if (await compare(j, j + 1)) {
                    await swap(j, j + 1);
                }
                await unmark(j);
                await unmark(j + 1);
            }
            list[size - i - 1].className = "cell done";
        }
        list[0].className = "cell done";
        updateComplexity("O(n^2)");
    };

    const insertionSort = async () => {
        const size = list.length;
        for (let i = 0; i < size - 1; ++i) {
            let j = i;
            while (j >= 0 && await compare(j, j + 1)) {
                await mark(j);
                await mark(j + 1);
                await swap(j, j + 1);
                await unmark(j);
                await unmark(j + 1);
                j -= 1;
            }
        }
        markAllDone();
        updateComplexity("O(n^2)");
    };

    const selectionSort = async () => {
        const size = list.length;
        for (let i = 0; i < size; ++i) {
            let minIndex = i;
            for (let j = i; j < size; ++j) {
                await markSpl(minIndex);
                await mark(j);
                if (await compare(minIndex, j)) {
                    await unmark(minIndex);
                    minIndex = j;
                }
                await unmark(j);
                await markSpl(minIndex);
            }
            await mark(minIndex);
            await mark(i);
            await swap(minIndex, i);
            await unmark(minIndex);
            list[i].className = "cell done";
        }
        updateComplexity("O(n^2)");
    };

    const mergeSort = async () => {
        await mergeDivider(0, list.length - 1);
        markAllDone();
        updateComplexity("O(nlog(n))");
    };

    const mergeDivider = async (start, end) => {
        if (start < end) {
            const mid = start + Math.floor((end - start) / 2);
            await mergeDivider(start, mid);
            await mergeDivider(mid + 1, end);
            await merge(start, mid, end);
        }
    };

    const merge = async (start, mid, end) => {
        let newList = [];
        let frontCounter = start;
        let midCounter = mid + 1;

        while (frontCounter <= mid && midCounter <= end) {
            const fValue = Number(list[frontCounter].getAttribute("value"));
            const sValue = Number(list[midCounter].getAttribute("value"));
            if (fValue >= sValue) {
                newList.push(sValue);
                midCounter++;
            } else {
                newList.push(fValue);
                frontCounter++;
            }
        }
        while (frontCounter <= mid) {
            newList.push(Number(list[frontCounter].getAttribute("value")));
            frontCounter++;
        }
        while (midCounter <= end) {
            newList.push(Number(list[midCounter].getAttribute("value")));
            midCounter++;
        }

        for (let c = start; c <= end; ++c) {
            list[c].className = "cell current";
        }
        for (let c = start, point = 0; c <= end && point < newList.length; ++c, ++point) {
            await swap(c, newList[point]);
        }
        for (let c = start; c <= end; ++c) {
            list[c].className = "cell";
        }
    };

    const quickSort = async () => {
        await quickDivider(0, list.length - 1);
        markAllDone();
        updateComplexity("O(nlog(n))");
    };

    const quickDivider = async (start, end) => {
        if (start < end) {
            const pivot = await partition(start, end);
            await quickDivider(start, pivot - 1);
            await quickDivider(pivot + 1, end);
        }
    };

    const partition = async (start, end) => {
        const pivot = list[end].getAttribute("value");
        let prevIndex = start - 1;

        await markSpl(end);
        for (let c = start; c < end; ++c) {
            const currValue = Number(list[c].getAttribute("value"));
            await mark(c);
            if (currValue < pivot) {
                prevIndex++;
                await mark(prevIndex);
                await swap(c, prevIndex);
                await unmark(prevIndex);
            }
            await unmark(c);
        }
        await swap(prevIndex + 1, end);
        await unmark(end);
        return prevIndex + 1;
    };

    const updateComplexity = (complexity) => {
        document.getElementById('time').innerHTML = complexity;
        document.querySelector(".footer > p:nth-child(1)").style.visibility = "visible";
    };

    const markAllDone = () => {
        for (let c = 0; c < list.length; ++c) {
            list[c].className = "cell done";
        }
    };

    return (
        <div>
            <div className="array">
                {list.map((item, index) => (
                    <div key={index} className="cell" style={{ height: `${3.8 * item.value}px` }} value={item.value}>
                        {item.value}
                    </div>
                ))}
            </div>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={insertionSort}>Insertion Sort</button>
            <button onClick={selectionSort}>Selection Sort</button>
            <button onClick={mergeSort}>Merge Sort</button>
            <button onClick={quickSort}>Quick Sort</button>
            <div id="time"></div>
        </div>
    );
};

export default SortingAlgorithms;
