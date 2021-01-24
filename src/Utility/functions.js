import { maxNum } from './vars'

//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getInterval = (numElems) => {
    return ((1/1.07) ** (numElems - 90)) + 10;
};


export const createNewArr = (numElems) => {
    let list = [];
    for (let i = 0; i < numElems; i++) {
        list.push(getRandomInt(50, maxNum));
    }
    return list; 
};
