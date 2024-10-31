// src/utils/randomList.js
export const randomList = async (length) => {
    const list = [];
    const lowerBound = 1;
    const upperBound = 100;

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
        list.push(randomNumber);
    }
    return list;
};
